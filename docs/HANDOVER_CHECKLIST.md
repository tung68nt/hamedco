# Handover & Delivery Checklist (Nghiệm Thu Hợp Đồng)
> Dự án: HAMEDCO Next.js
> Reference Code: #BG-WEB-HAMEDCO-2026-2

Tài liệu này đóng vai trò xác thực nghiệm thu bàn giao giữa Developer/Agency với Đại diện Chủ đầu tư (HAMEDCO) đảm bảo mọi cấu trúc, tính năng đáp ứng KPI như Báo giá. Mọi khoản phạt hợp đồng diễn tiến nếu không Pass danh sách này.

## Phase 1: Bàn giao Cấu trúc Lõi (SOW Core)
- [ ] **1. Template Hiển thị / UI UX (Giao diện V1 Pixel-perfect)**: Gồm đủ 18 templates (Home, Giới thiệu Timeline, Liên hệ Maps, Danh mục sản phẩm filter, Blog...) đúng với file Design Figma (Kèm hiệu ứng GSAP 60fps).
- [ ] **2. Backend CMS (Payload)**: Đã bàn giao Admin Account Master. Khách đăng nhập, tạo, sửa, xóa Sản phẩm/Tin tức trơn tru. Có cấu hình Cấu hình chung Logo/Footer.
- [ ] **3. Tính năng Lead Forms**: Test submit form Quote, form Liên hệ gửi thành công vào CMS Dashboard và Trigger ra Email hệ thống.
- [ ] **4. Multi-language Support**: Hoàn thiện 5 ngôn ngữ (Tiếng Anh, Tiếng Việt, Tiếng Nhật, Tiếng Hàn, Tiếng Đức), Auto-switcher URL Language, Dịch động qua CMS.
- [ ] **5. Chức năng Search Realtime**: Bộ lọc cấu hình chi tiết & Search tự động nảy kết quả.

## Phase 2: Performance & Data SLA
- [ ] **1. Core Web Vitals Audit**: Điểm Lighthouse Google (Mobile) Index Performance >= 85, LCP < 2.5s.
- [ ] **2. Technical SEO**: Trỏ link check Sitemap XML (`/sitemap.xml`) chứa Products, Robots.txt, JSON-LD test markup (Schema).
- [ ] **3. Security Score (Bảo mật)**: Forms ko spam (Rate limiting/Honeypot hoạt động). 

## Phase 3: Bàn giao Vật lý / Hard Data Deliverable
Nhà phát triển ban hành đủ các tài nguyên sau cho khách:
- [ ] **[01] Full Source Code (GitHub Repository)**: Gồm quyền chuyển Owner dự án Repo. Cấu trúc rõ ràng, không lock mã hoá.
- [ ] **[02] Cụm Hosting / Server Control**: Passwords/Auth của Vercel (Front), Supabase/Render (Postgres DB), và Cloudflare/AWS (Media Storage).
- [ ] **[03] Data Migration (Nhập liệu Website Cũ)**: Đã thiết lập sẵn ít nhất 6 Sản phẩm (Products) tiêu biểu (Kèm Catalog PDF, Gallery ảnh) và 6 bài viết (Tin tức nổi bật). Set up 301 Redirect URL cũ -> URL trang mới tương ứng cho các Post có Traffic. 
- [ ] **[04] Documentation & User Manual**: Tài liệu Hướng Dẫn Sử Dụng (CMS) bằng tiếng Việt (PDF Document hoặc Notion/Word). Bao gồm cách Upload Sản phẩm và Export Lead.
- [ ] **[05] Figma Blueprint**: Cấp quyền Viewer bản Design System / Handoff chính thức.

## Phase 4: Điều khoản Chăm sóc Dịch vụ / Bảo Hành Hậu Kỳ
- [ ] **Domain & Hosting (Miễn phí năm đầu)**: Check hạn thanh toán và Bàn giao Ownership Domain DNS Management.
- [ ] **Bảo Hành 12 Tháng Kỹ thuật**: Ký giấy xác nhận ngày Trigger bảo hành 12 tháng (xử lý bug tính năng trong vòng 24H). Bắt đầu kích hoạt support ticket.
- [ ] **Training Hướng dẫn (Off & On)**: Tổ chức buổi họp Meeting/Zoom chuyển giao công nghệ cho bộ phận Marketing / Cập nhật data nội sinh.
