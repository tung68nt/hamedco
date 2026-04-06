# Product Requirements Document (PRD)
> Báo giá tham chiếu: #BG-WEB-HAMEDCO-2026-2
> Khách hàng: Công ty TNHH Dịch vụ và Giải pháp Công nghệ Tulie (đại diện Tulie Agency) cho Dự án HAMEDCO

## 1. Tổng quan Dự án
Phát triển một hệ thống Website B2B (Doanh nghiệp với Doanh nghiệp) chuyên nghiệp cho HAMEDCO - nhà phân phối thiết bị y tế với hơn 20 năm kinh nghiệm (50+ đối tác, 500+ sản phẩm). Website không chỉ là cổng thông tin điện tử mà còn là cỗ máy tạo Lead, quản trị nội dung linh hoạt đa ngôn ngữ.

### Mục tiêu kinh doanh:
- Chuyển đổi số toàn diện thay thế giao diện cũ kỹ.
- Nâng tầm nhận diện thương hiệu, thiết kế UI/UX theo tiêu chuẩn quốc tế (60fps GSAP/Framer Motion).
- Bắt Lead (Inquiry, Quote) qua 6 loại form phức tạp.
- Tiếp cận tệp khách hàng ngoại quốc thông qua 5 ngôn ngữ.

## 2. Phạm vi Công việc (Scope of Work - SOW) Cốt lõi
Phải đảm bảo bàn giao đủ thành phần và tính năng sau theo KPI của hợp đồng:

### 2.1. Thiết kế & Hiển thị Frontend (Next.js 14+, Tailwind CSS)
Website sẽ được xây dựng xoay quanh 18 Templates cốt lõi:
- **Trang chủ (Home)**: Tối đa hóa tỷ lệ chuyển đổi với Hero Carousel, thống kê Counter, Tin tức nổi bật, và FAQ Accordion.
- **Trang Giới thiệu (Intro)**: Timeline lịch sử 20 năm, thông điệp Leadership, thống kê động.
- **Trang Sản phẩm (Products)**: Hệ thống filter tab thông minh, phân trang, Product Details với Zoom Gallery, Technical Specs. Pop-up Download Brochure đổi lấy email/số điện thoại (Lead Magnet).
- **Trang Đối tác (Partners)**: Grid logo thương hiệu đối tác toàn cầu.
- **Trang Dịch vụ (Services)**: Flow timeline 4-6 bước triển khai thiết bị y tế.
- **Trang Dự án (Projects)**: Dashboard dự án triển khai.
- **Trang Tin tức (News/Blog)**: Chức năng Newsletter, Tags Category.
- **Trang Tuyển dụng (Recruitment)**: Job listings, form nộp CV.
- **Trang Liên hệ (Contact)**: API maps 3 chi nhánh văn phòng, validation 9-fields form.

### 2.2. Global Components & Tính Năng Nổi Bật
- **Multi-language**: 5 ngôn ngữ (Tiếng Anh, Tiếng Việt, Tiếng Nhật, Tiếng Hàn, Tiếng Đức).
- **Navbar/Mega Menu**: Điều hướng responsive đa tầng. Tích hợp Real-time search.
- **Footer & Floating Contacts**: 5 cots Footer, Trust badges, Floating buttons (Zalo, Hotline, Messenger).
- **Logic Forms (6 loại Form)**: Validation rate limiting (chống Spam Honeypot).
  - Yêu cầu báo giá (Quote - 9 fields)
  - Liên hệ (Contact)
  - Đăng ký nhận tin (Newsletter)
  - Ứng tuyển (Job Apply có đính kèm file)
  - Tải tài liệu (Lead Magnet Gated Content)

### 2.3. Quản trị Nội dung (Payload CMS)
- Khởi tạo Data model quản lý toàn diện Website (Static Pages, Cấu hình tĩnh như Logo/Banner/FAQ).
- CMS quản trị Module Sản phẩm (Thông số kỹ thuật, Catalog PDF, Brand liên kết).
- Tuỳ biến Data Dynamic: Blog, Dịch vụ, Dự án, Tuyển dụng.
- **Lead Dashboard**: Quản lý truy xuất form (Export Excel/CSV).
- **Media Management**: Storage tại Cloudflare R2 nhằm tiết kiệm chi phí băng thông, tự convert ảnh định dạng WebP.

### 2.4. Tính năng Tự động hoá (Automation)
- API tích hợp Google Sheets đồng bộ Leads theo thời gian thực.
- Automation Email phản hồi (System email sender).
- Kết nối mã Tracking: Google Tag Manager (GTM), FB Pixel.

## 3. Chuyển đổi Dữ liệu & Bàn Giao
- Phục hồi & Migration dữ liệu từ Website cũ: Hỗ trợ chuyển đổi tối thiểu 6 sản phẩm và 6 tin tức tiêu biểu (còn lại Import theo tool). 
- Bàn giao mã nguồn GitHub.
- Bảo hành miễn phí 12 tháng hệ thống, support 24/7 đối với lỗi bug critical.
- Bàn giao Figma, Hướng dẫn sử dụng Admin CMS.

## 4. Tối Ưu Bắt Buộc (SLA)
- **Tối ưu Kỹ thuật SEO (Technical SEO)**: Cấu hình Auto Sitemap.xml, SSR/ISR, Schema JSON-LD (Product, Articles).
- **Hiệu Năng**: Đạt điểm Google Core Web Vitals tối thiểu >= 85 điểm (Mobile).
