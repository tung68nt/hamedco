# Backup & Recovery Architecture
> Cam kết phục hồi dữ liệu trong 24h đối với sự cố nghiêm trọng (Disaster Recovery Time Objective).

## 1. Phương thức Sao lưu (Backup Methods)

Hệ thống B2B của HAMEDCO phải được lưu trữ song song tại nhiều vị trí địa lý nhằm giảm thiểu khả năng rủi ro Single Point of Failure:

### 1.1 Khối Database (PostgreSQL/Supabase)
Postgres Hosting được cấu hình tính năng PITR (Point-In-Time Recovery):
- **Bản sao lưu hàng ngày (Daily Auto-backups)**: Hệ thống tự động snap nguyên bộ Database (Leads, Config, Products) lúc 00:00 (GMT+7). Lưu trữ theo chu kỳ xoay vòng (Rolling backup 7 ngày gần nhất).
- **Log Ghi chú thay đổi (Write-Ahead Logging)**: Hỗ trợ khôi phục chi tiết từng giờ.
- **Export cục bộ (Weekly DB Dump)**: Cấu hình Cron-job tự động trigger `/api/backup-db`, xuất DB thành dạng `sql.gz` dump. Mã hóa GPG và đẩy về Storage cố định dự phòng thứ 3 (Google Drive hoặc 1 S3 Bucket khác vùng).

### 1.2 Khối File Media & Documents
Mọi hình ảnh (Gallery/Banner/Thumbnails) và Tài liệu tải xuống (Brochure PDF) upload lên CMS:
- Được lưu tại Cloudflare R2 thông qua AWS S3 SDK.
- Rộng băng thông và lưu cache vĩnh viễn với tính khả dụng 99.99%.
- Cơ cấu Object Versioning được Enable để ngăn ngừa tình trạng lỡ tay xóa đè nhầm hình ảnh/chứng từ quan trọng hoặc hacker chèn mã xấu.

### 1.3 Mã Nguồn (Source Code Versioning)
Tất cả Logic code (Next.js & CMS):
- Mã nguồn kiểm soát bởi **Git** và GitHub Private Repository. Đóng chặt `main` branch và cấp quyền push source sau khi đã Test Coverage.
- Khôi phục hạ tầng trong nháy mắt (Rollback Deploy) thông qua CI/CD Pipeline Vercel Panel khi 1 bản update tính năng bị lỗi, chỉ bằng 1 Click "Redeploy previous build". Không có Downtime.

## 2. Quy trình Phục hồi Thảm họa (Recovery Plan 24H)

Trong kịch bản Server sập hoặc Hosting DB cháy cục bộ:
- **Ngay lập tức**: Cắt Domain `hamedco.vn` điều phối qua 1 trang Placeholder "Hệ thống đang bảo trì" (Maintenance Mode) trên Vercel. Không để lộ Error Code với khách truy cập.
- **Hour 0-4 (Phát hiện và Đánh giá)**: Trích xuất File DB Dump gần nhất hoặc Trigger PITR từ Supabase Control Panel.
- **Hour 4-8 (Provisioning)**: Dựng Cụm RDS Database DB Cluster Node mới ở 1 Data Center khác. Gắn kết nối `DATABASE_URI` mới lên Vercel.
- **Hour 8-24 (Verification)**: Chạy Test khôi phục dữ liệu, Test Lead capture Form. Ngắt Maintenance Mode.
