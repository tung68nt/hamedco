# Database Schema (HAMEDCO)
> Payload CMS Collections & Postgres Relationships - Based on CRM Quote

## Tổng quan
Hệ thống sử dụng **PostgreSQL** là hệ quản trị CSDL lõi. Hệ thống sẽ tạo mô hình Collection/Field dựa trên Core của Payload CMS.

## 1. Content Collections (Nội dung)

### 1.1 Khối Sản phẩm & Chuyên ngành (Products & Ecosystem)
1. **Products**
   - Lọc và phân trang cho các Template Sản Phẩm (Maxio III, Sonesta, Philips...).
   - Fields:
     - `title` (Localized string)
     - `slug` (Unique Index, Auto-format)
     - `brand` (Relationship -> `Brands`)
     - `category` (Relationship -> `Categories` - Medical Imaging, Surgical...)
     - `short_description` (Text)
     - `gallery` (Array -> `Media`)
     - `tabs_data` (Block/Array) -> Lưu HTML/RichText cho 6 tabs: Tổng quan, Tính năng, Thông số kỹ thuật, Cấu hình, Tài liệu (PDF Brochure), Ứng dụng lâm sàng.
     - `certifications` (Relationship -> `Certificates` như CE Mark, FDA).
   - SEO Fields (Title, Desc, OG Image).
   
2. **Brands (Hãng sản xuất / Đối tác)**
   - Vd: Philips, KLS Martin, JVM.
   - Fields: `name`, `logo`, `country`, `description`, `products_rel`.

3. **Categories (Cây danh mục)**
   - Loại sản phẩm (vd: Chẩn đoán hình ảnh).

### 1.2 Khối Truyền thông & Dịch vụ (Dynamic Pages)
4. **Services**
   - 4 Landing pages: Tư vấn giải pháp, Triển khai, Bảo trì, Đào tạo.
   - Fields: `title`, `slug`, `icon`, `hero`, `process_steps`, `benefits`.
   
5. **Projects (Case studies / Dự án)**
   - Fields: `title`, `client_name`, `date`, `products_used` (Rel -> Products), `results`, `gallery`, `testimonial`.
   
6. **Blog (Tin tức / Kiến thức)**
   - Fields: `title`, `category` (Tin công ty, Ngành y tế), `author`, `publishedDate`, `coverImage`, `content` (RichText/Lexical), `tags`.

7. **Recruitment (Tuyển dụng Jobs)**
   - Fields: `position`, `department`, `location`, `type` (Full-time/Part-time), `deadline`, `requirements`, `benefits`, `jd_content`.

### 1.3 Media Storage
8. **Media Center (Cloudflare R2)**
   - Quản lý Upload Images, JSON Lotties, PDF Brochures, Video.
   - Tích hợp hook auto WebP resize & Auto Alt-text (SEO).
   - Tích hợp File Access Control (Lead Magnet Gated Download - phải bắt buộc điền form mới download được file pdf datasheet).

## 2. Lead Management (Quản lý Data Khách hàng)

Hệ thống ghi nhận Data từ 6 nguồn Form (theo mục 2.1 Báo giá).

### 2.1 Khối Thu thập (Lead Capture)
9. **Leads_Inquiry / Quote (Form Yêu Cầu Tư Vấn / Báo giá)**
   - Fields: `fullName`, `phone`, `email`, `organization` (BV/Phòng khám), `department` (Khoa), `interestedProducts` (Rel -> Products), `quantity`, `message`.
   - `status`: New, Contacted, Qualified, Closed.
   - `source_url`: URL người dùng đang xem lúc submit form.
   
10. **Leads_Newsletter**
    - `email`, `subscribed_at`.
    
11. **Job_Applications (Nộp CV)**
    - `candidate_name`, `email`, `phone`, `position_applied` (Rel->Recruitment), `cv_file` (Media Upload).

## 3. Global & Static Configuration
Các cấu hình dùng 1 lần (Singleton).
1. **Config_Global**:
   - `Site Name`, `Footer Address`, `Hotlines`, `Social Links`, `Google Analytics Code`.
2. **Config_HomePage**:
   - `Hero_Slides` (Ảnh, Tiêu đề, Badge, 2 x CTA).
   - `Counter_Stats` (Số năm, Số SP, Số đối tác, Tên nhãn).
   - `Certifications` (Danh sách 5 chứng chỉ).
   - `Why_Choose_Us` (6 Grid Items).
   - `FAQ` (Câu hỏi và Trả lời).
   - `Testimonials` (Đánh giá của Y/Bác sĩ).
3. **Config_AboutPage**:
   - Lịch sử hình thành (Timeline Data).
   - Tầm nhìn / Sứ mệnh.
