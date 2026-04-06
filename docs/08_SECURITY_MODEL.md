# Security Model & Protection Plan
> Hệ thống phòng thủ an toàn thông tin theo yêu cầu Hợp đồng CRM (Mục Bảo mật Thông tin & Chống tấn công).

## 1. Perimeter Security (Tường lửa & Domain)
### 1.1 Mạng phân phối Cloudflare/Vercel Edge
- Domain được trỏ thông qua mạng lưới CDN bảo mật của Vercel/Cloudflare.
- Bắt buộc kết nối an toàn 100% bằng giao thức HTTPS/SSL (TLS 1.2+).
- Tự động block IP theo Blacklist quốc tế, chống tấn công DDoS thông qua lớp khiên WAF (Web Application Firewall) tích hợp.

## 2. Application Layer Security (Next.js & API)
### 2.1 Đối với Các Module Leads & Forms (Inquiry/Newsletter)
Đây là cổng dễ bị spam/bot nã vào nhất:
- **Rate Limiting Middleware**: Giới hạn mỗi dải IP chỉ được gửi 5 requests/phút vào API `/api/leads` để chống tool submit hàng loạt làm phình Database.
- **Honeypot Technique**: Khai báo các field input ẩn vô hình bằng CSS (`display: none`). Nếu bot auto-fill submit được giá trị vào field này, Backend sẽ Reject âm thầm 200 OK nhưng không lưu vào Postgres.
- **CSRF Token / CORS Origin Validation**: Chỉ đồng ý CORS origin xuất phát từ `https://hamedco.vn` lên API CMS, chặn các nguồn domain rác POST dữ liệu.
- **Google reCAPTCHA v3**: Áp dụng trong một số tình huống dự phòng. Tự động chấm điểm (Trust Score) mà không làm phiền UX người dùng.

### 2.2 SQL Injection & XSS Protection
- Payload CMS có sẵn ORM hỗ trợ tham số truy vấn (Parameterized queries). Ngăn ngừa 100% việc chèn mã lệnh SQL độc hại qua Form search hoặc Query param `?slug=`.
- Content RichText từ CMS sẽ được auto Sanitize trước khi Render bằng React DOM (`dangerouslySetInnerHTML`) phòng ngừa XSS Scripts qua Comments/Input.
- Khai báo Cấu hình HTTP Security Headers (Next.js `next.config.js`):
  - `Content-Security-Policy (CSP)`
  - `X-Frame-Options: DENY` (Chống Clickjacking).
  - `X-Content-Type-Options: nosniff`.
  - `Referrer-Policy: strict-origin-when-cross-origin`.

## 3. CMS Authorization Layer (Nhân sự)
Phân tách bảo mật truy cập thông tin Khách hàng (Leads) giữa các cá nhân, vai trò:
- Payload Token Authorization: Session API bằng Cookie JWT bảo mật thời hạn 2h/24h.
- Role-Based Access Control (RBAC):
  - **Account `Marketing`**: Không phép quyền Edit/Xóa Leads hoặc Products.
  - **Account `Viewers`**: Chỉ cho phép Read, không quyền Edit bất kỳ Collection DB nào.
  - Ghi nhận `createdAt`, `updatedBy` Log dấu vết (Audit Trails) Admin nào đã đăng và chỉnh sửa Báo giá/Product cuối cùng.

## 4. Environment Variables
Bảo mật thông số mã nguồn tuyệt đối trên GitHub:
- Không hard-code các khóa bí mật như `POSTGRES_PASS`, `PAYLOAD_SECRET`, `SMTP_PASSWORD_SENDGRID`, `GTM_ID`.
- Sử dụng biến ảo (Env vars) bằng `.env` config an toàn, thiết lập thẳng trên Serverless CI/CD Settings (Vercel Variables Vault).
