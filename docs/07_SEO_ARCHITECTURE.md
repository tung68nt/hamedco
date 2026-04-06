# SEO Architecture (HAMEDCO)
> Tuân thủ SLA Báo giá: Hiệu suất ánh xạ theo Core Web Vitals và JSON-LD Markup.

## 1. Technical SEO Strategy
Để cạnh tranh trong lĩnh vực thiết bị y tế khắt khe, nền tảng Frontend bắt buộc tuân thủ:

### 1.1 Server-Side Rendering (SSR) & Incremental Static Regeneration (ISR)
- Tất cả các trang tĩnh (Home, About, Contact) sẽ được Pre-render (SSG/ISR) để đảm bảo Googlebot fetch HTML trọn vẹn.
- Dữ liệu Product/Blog re-generated tự động nền (ISR tag/background revalidate) mỗi 1h hoặc mỗi khi Admin Publish bài mới ở CMS Payload.
- Trả Status Code 404 cho Slug không hợp lệ. Trả 301 Redirects cho các URL cũ.

### 1.2 Crawling & Indexing Control
- **Dynamic Sitemap XML**: `hamedco.vn/sitemap.xml` tự động render cây URL chứa Product, News, Projects với thuộc tính `priority` và `lastmod`.
- **Robots.txt**: Cấu hình chặn Bot scan thư mục `/admin/`, `/api/` hoặc `/preview/`.
- **Hreflang Tags**: Yêu cầu bắt buộc do có 5 ngôn ngữ. Mapping `<link rel="alternate" hreflang="x" href="..." />` tương đối cho mỗi locale.
  - vi-VN
  - en-US / en-GB
  - ja-JP
  - ko-KR
  - de-DE

### 1.3 Security & Caching Headers
- Tích hợp chuẩn Canonical URL trong tag `<head>` chặn dublicate content.
- Bật Keep-Alive, Enable GZIP/Brotli Compression, và `Cache-Control: public, max-age=31536000, immutable` cho static assets (Fonts, JS/CSS, Icons).

## 2. On-Page SEO

### 2.1 Meta Data Tags Tự động hóa
CMS Payload phải thiết lập field chuẩn cho thẻ SEO:
- `Meta Title` (Auto-generated fallback vd: `[Sản phẩm] - [Tên Hãng] | HAMEDCO`).
- `Meta Description` (Limit 150-160 ký tự).
- **Open Graph (OG)** + **Twitter Cards**: Tự động sinh hoặc pick từ Cover Image dự phòng cho Social Sharing chia sẻ bài viết Zalo, Facebook, LinkedIn.

### 2.2 Heading & Semantic HTML5
- Sử dụng duy nhất 1 thẻ `<h1>` trên mỗi URL (Homepage: Đối tác tin cậy trong Thiết bị Y tế; Product: Tên định danh Thiết bị; Blog: Tiêu đề Post).
- `<address>`, `<nav>`, `<article>`, `<aside>`, `<main>` cấu trúc phân đoạn DOM rõ ràng.

### 2.3 Image Optimization
- Bắt buộc điền thuộc tính `alt="Mô tả công nghệ/Sản phẩm Y tế"` thông qua Payload CMS.
- Responsive Image: thuộc tính `sizes` và `srcSet` tự động render 3 độ phân giải (Mobile, Tablet, Desktop) định dạng WebP/AVIF. LCP Load tối ưu bằng tính năng Next/Image.

## 3. Web Vitals & Performance Budget
Chỉ tiêu SLA Hợp Đồng tối đa hóa tốc độ website y tế B2B:
- **LCP (Largest Contentful Paint)**: < 2.5s (Preload Hero Banner & First Fonts).
- **CLS (Cumulative Layout Shift)**: < 0.1 (Khai báo width/height rõ ràng cho Media/Iframe).
- **INP (Interaction to Next Paint)**: < 200ms (De-bounce search filters).
- Tách Bundle JS, Lazy Loading (`loading="lazy"`) hình ảnh Partner Logos và Iframe Google Maps.

## 4. Structured Data (JSON-LD)
Schema Markup cung cấp cho Search Engine hiểu rõ context Website & Product:
- `Organization` / `LocalBusiness`: Trang chủ (Logo, Address, Hotkeys, TTBYT).
- `Product`: Trang chi tiết Thiết bị y tế (Brand Name, Specs, Manual, MPN).
- `BreadcrumbList`: Định vị Breadcrumbs rõ ràng cho Bot dễ dàng navigate.
- `Article` / `NewsArticle`: Gắn vào trang Tin tức Y khoa / Dự án Y tế (Author, Date, Image, Publisher).
- `FAQPage`: Schema Accordion (Câu hỏi thường gặp ở Trang chủ).
