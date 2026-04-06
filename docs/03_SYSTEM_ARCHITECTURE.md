# System Architecture (HAMEDCO)
> Kiến trúc này được thiết kế dựa trên yêu cầu từ Báo giá CRM #BG-WEB-HAMEDCO-2026-2

## Tổng quan mô hình kiến trúc: Serverless + Headless CMS

Dự án HAMEDCO sử dụng mô hình tối giản, hướng đến hiệu suất load nhanh (Performance Optimization) và dễ bảo trì:
- **Frontend App**: Next.js 14+ (App Router), host tại Vercel (Edge Network).
- **Headless CMS & API**: Payload CMS (Local Node.js process / Monolithic API bundle) kết nối chung qua backend Next.js.
- **Database**: PostgreSQL (hoặc Neon/Supabase/Render) làm Primary Database.
- **Media Storage**: Cloudflare R2 nhằm tối giản chi phí băng thông, khả năng scale lớn, tích hợp qua AWS SDK v3.

---

## 1. Frontend Architecture (Vercel)
Website public của HAMEDCO sẽ sử dụng **Next.js** với cơ chế kết hợp **ISR (Incremental Static Regeneration)** (thay vì SSR ròng) nhằm tăng tốc độ tải mà không làm dữ liệu quá cũ, đáp ứng yêu cầu Technical SEO và Core Web Vitals (Điểm số >=85).

### UI/Styling Layer:
- **Tailwind CSS**: Dùng làm design system base (Màu sắc thương hiệu: Primary Teal, Orange, Xám).
- **Framer Motion + GSAP**: Xử lý các animations ở mức độ pixel-perfect và mượt mà cho 18 templates (Counter Stats, Fade-in scroll, Hero Carousel, FAQ Accordion).
- **Icons**: SVG inline nhằm tiết kiệm request HTPP.
- **State Management**: React Context API hoặc Zustand (Zustand ưu tiên xử lý Global State Sidebar, Lang Switcher, Mini-cart, Lead Magnet Modal).

### Routing & Chức năng (Routing Layer):
Các Endpoints App Router chính:
- `/[lang]/page.tsx` - Trang chủ (5 ngôn ngữ)
- `/[lang]/products/page.tsx` - Bộ lọc sản phẩm
- `/[lang]/products/[slug]/page.tsx` - Dynamic product
- `/[lang]/contact/page.tsx` - Trang Liên hệ & Map
- `/[lang]/jobs/[slug]/page.tsx` - Dynamic Job Posts

---

## 2. Headless CMS (Payload CMS)
Sử dụng Payload (phiên bản tích hợp Next.js hoặc Host độc lập) vì đây là CMS Node.js có kiến trúc type-safe mạnh mẽ 100% bằng TypeScript.
Vai trò của CMS:
- Trả API (RESTful/GraphQL) cho Frontend Next.js build.
- Giao diện Admin chuyên nghiệp (Admin Dashboard Custom).
- Xác thực người dùng (Auth via JWT & Role-Based Access Control).

### 2.1 API & Cấu trúc Phân quyền (RBAC)
- Khởi tạo 4 phân mảnh User Role:
  - `Admin`: Full rights system.
  - `Marketing`: Phân quyền CRUD bài viết, tin tức, tài liệu, quản lý CMS tĩnh (Logo, Banner).
  - `Sales`: Dashboard Quản lý Lead Forms, CRM Quote, Upload Product Catalog.
  - `Viewer/Agent`: Tài khoản cho đại lý hoặc người xem nội dung độc quyền.

---

## 3. Hệ thống Cắt/Bắt Lead (Lead Capture & Automation)
Kiến trúc này yêu cầu Backend xử lý Form Submit từ 6 Sources độc lập.

### 3.1. Dòng chảy Dữ liệu (Lead Flow)
1. **Frontend**: Người dùng nhập form (Quote, Contact, Download Brochure). App kích hoạt Client-side Validation. Zod.
2. **Next.js API Routes** (`/api/leads`): Tiếp nhận Request.
3. **Anti-spam Middleware**: Check Google reCAPTCHA v3 hoặc thuật toán Honeypot/Rate limit để giảm Bots. Cập nhật record vào Postgres.
4. **Third-party Automation**:
   - Khởi chạy Webhook.
   - Bắn data API qua **Google Sheets**.
   - Kích hoạt **System Email** (Sử dụng Resend/Nodemailer/SendGrid) để tự động gửi "Mail báo giá tự động" tới Sales và mail Confirm tới Khách hàng.

---

## 4. Multi-language Mapping (i18n)
- **Phương án tĩnh/động**: 
  - Giao diện cứng (Buttons, Headers) dùng module `next-intl` (thư viện).
  - Data/Nội dung động (Product description, Blog): Dùng Field Localization API trong Payload CMS hỗ trợ sẵn.
- **Routing**: `hamedco.vn/vi/...`, `hamedco.vn/en/...`, `hamedco.vn/ja/...`, `hamedco.vn/ko/...`, `hamedco.vn/de/...`. Cấu hình middleware Next.js để Auto-detect dựa trên `Accept-Language` headers từ trình duyệt hoặc cookies `NEXT_LOCALE`. Tắt tính năng tự phát sinh Tooltip Google Translate theo yêu cầu báo giá.

---

## 5. Hosting & CI/CD Pipeline
Quy trình DevOps chuẩn chỉnh (Đảm bảo yêu cầu bảo hành 12 tháng):
- Repo Source: Push source (GitHub).
- CI/CD tự động bằng Vercel Build (Build cache trên mỗi pull request).
- Database migration tự động qua CI/CD Pipeline (Prisma/Drizzle/Payload).
- Quản lý domain SSL do Vercel cung cấp.
