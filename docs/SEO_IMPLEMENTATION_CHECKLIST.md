# SEO Implementation Checklist
> Dự án: HAMEDCO Website
> Reference: #BG-WEB-HAMEDCO-2026-2
> Checklist này dùng để verify trước khi bàn giao

---

## A. Crawl & Index Verification

- [ ] Tất cả trang cần SEO trả về HTTP 200 OK
- [ ] Không có noindex trên trang cần index
- [ ] robots.txt không chặn CSS, JS, ảnh quan trọng
- [ ] Tất cả trang quan trọng có thể tìm thấy qua:
  - [ ] Internal links
  - [ ] Sitemap XML
  - [ ] Menu/danhmuc structure
- [ ] Liên kết nội bộ là `<a href>` chuẩn, không dùng onclick/javascript:
  ```html
  <!-- ĐÚNG -->
  <a href="/san-pham/chi-tiet/epiq-elite">EPIQ Elite</a>
  
  <!-- SAI - không crawl được -->
  <span onclick="goToProduct('epiq-elite')">EPIQ Elite</span>
  ```
- [ ] Staging site không bị index (noindex hoặc Basic Auth)

---

## B. URL & Canonical Verification

- [ ] URL ngắn, dễ đọc, dùng dấu gạch ngang:
  ```
  ✅ /may-sieu-am-philip-lumify
  ❌ /san-pham/chi-tiet/HC795005-lumify
  ❌ /product?id=12345
  ```
- [ ] Không URL có tham số dư thừa cho trang chính
- [ ] Mỗi nội dung chỉ có 1 URL chính thức
- [ ] Multiple URL variations có canonical redirect:
  - [ ] trailing slash → non-trailing
  - [ ] www → non-www (hoặc ngược lại)
  - [ ] http → https
- [ ] Canonical tag đúng trong `<head>`:
  ```html
  <link rel="canonical" href="https://hamedco.com.vn/san-pham/chi-tiet/epiq-elite" />
  ```

---

## C. Title, Meta, Heading Verification

### Title
- [ ] Mỗi trang có title riêng biệt
- [ ] Title chứa từ khóa chính của trang
- [ ] Title không nhồi từ khóa (spam)
- [ ] Title giới hạn 60 ký tự
- [ ] Title template: `Tên sản phẩm - Hãng | HAMEDCO`

### Meta Description
- [ ] Mỗi trang có meta description riêng
- [ ] Description mô tả chính xác nội dung trang
- [ ] Description giới hạn 150-160 ký tự
- [ ] Chứa call-to-action nhẹ

### Heading Structure
- [ ] Chỉ có 1 `<h1>` duy nhất cho nội dung chính
- [ ] `<h2>`, `<h3>`, `<h4>` phân cấp logic
- [ ] Không skip heading levels (h1 → h3 → h5)
- [ ] Headings mô tả nội dung section

---

## D. Meta Robots Verification

- [ ] Trang sản phẩm: `index,follow`
- [ ] Trang danh mục: `index,follow`
- [ ] Trang blog/news: `index,follow`
- [ ] Trang filter (?filter=): `noindex,follow`
- [ ] Trang sort (?sort=): `noindex,follow`
- [ ] Trang search: `noindex,follow`
- [ ] Trang tag: `noindex,follow` (nếu nội dung mỏng)
- [ ] Trang admin/preview: `noindex,nofollow`

---

## E. Sitemap Verification

- [ ] File `/sitemap.xml` tồn tại
- [ ] Sitemap có `sitemap-index` nếu > 50k URLs
- [ ] Chỉ chứa URL canonical
- [ ] Không chứa URL noindex
- [ ] Không chứa redirect URLs
- [ ] Có `lastmod`, `changefreq`, `priority`
- [ ] Image sitemap cho product images

**Validate Sitemap:**
```
https://hamedco.com.vn/sitemap.xml
https://hamedco.com.vn/sitemap-products.xml
https://hamedco.com.vn/sitemap-images.xml
```

---

## F. Mobile-First Verification

- [ ] Giao diện responsive 100%
- [ ] Test trên Chrome DevTools Mobile Emulator
- [ ] Nội dung mobile = desktop (không cắt bớt)
- [ ] Heading, link, structured data đầy đủ trên mobile
- [ ] Font size ≥ 16px cho body text
- [ ] Nút bấm ≥ 48x48px
- [ ] Touch targets cách nhau ≥ 8px

**Google Mobile-Friendly Test:**
```
https://search.google.com/test/mobile-friendly
```

---

## G. Core Web Vitals Verification

### LCP (Largest Contentful Paint) < 2.5s
- [ ] Hero image preloaded
- [ ] Fonts preloaded
- [ ] Không render-blocking resources
- [ ] Sử dụng CDN

### CLS (Cumulative Layout Shift) < 0.1
- [ ] Tất cả ảnh có width/height declared
- [ ] Iframes có dimensions
- [ ] Không banner/popup làm nhảy layout
- [ ] Font-display: swap

### INP (Interaction to Next Paint) < 200ms
- [ ] Event handlers nhanh
- [ ] De-bounce search/filter inputs
- [ ] Không long tasks blocking main thread

**PageSpeed Insights:**
```
https://pagespeed.web.dev/
```

---

## H. Image SEO Verification

- [ ] Tất cả ảnh có alt text:
  ```html
  <!-- Product thumbnail -->
  <img src="epiq-elite.jpg" alt="Máy siêu âm Philips EPIQ Elite" />
  
  <!-- Detail image -->
  <img src="epiq-elite-feature1.jpg" alt="Máy siêu âm Philips EPIQ Elite - Hình 1: Giao diện điều khiển" />
  ```
- [ ] Alt text mô tả tự nhiên, không keyword stuffing
- [ ] Tên file có nghĩa
- [ ] Sử dụng WebP/AVIF format
- [ ] Ảnh quan trọng (LCP) không lazy-load
- [ ] Ảnh dưới fold có `loading="lazy"`

---

## I. Structured Data Verification

### Required Schemas
- [ ] **Organization** - Trong `<head>` mọi trang
- [ ] **LocalBusiness** - Trong `<head>` mọi trang
- [ ] **WebSite** - Trong `<head>` mọi trang
- [ ] **BreadcrumbList** - Mọi trang có breadcrumb
- [ ] **Product** - Trang product detail
- [ ] **FAQPage** - Trang có FAQ section
- [ ] **Article** - Trang blog/news

### Schema Validation
```bash
# Sử dụng Google Rich Results Test
https://search.google.com/test/rich-results
```

### Checklist per Page Type

#### Homepage
- [ ] Organization schema
- [ ] LocalBusiness schema  
- [ ] WebSite schema
- [ ] SearchAction schema

#### Product Detail
- [ ] Product schema (name, image, description, brand, offers)
- [ ] BreadcrumbList schema
- [ ] FAQPage schema (nếu có)
- [ ] Images in schema match page images

#### Blog/Article
- [ ] Article schema
- [ ] NewsArticle schema
- [ ] BreadcrumbList schema
- [ ] Author info

---

## J. Internal Linking Verification

- [ ] Mỗi trang quan trọng có ≥ 3 internal links
- [ ] Anchor text mô tả đúng nội dung đích:
  ```html
  <!-- ĐÚNG -->
  <a href="/san-pham/chi-tiet/epiq-elite">Philips EPIQ Elite</a>
  
  <!-- SAI - generic anchor -->
  <a href="/san-pham/chi-tiet/epiq-elite">Click here</a>
  ```
- [ ] Related products/articles có links
- [ ] Breadcrumb navigation có links
- [ ] Footer có navigation links
- [ ] Không orphan pages

---

## K. JavaScript/Rendering Verification

- [ ] Nội dung chính có sẵn trong HTML (không rely hoàn toàn vào JS)
- [ ] Meta tags (title, description, canonical) trong HTML source
- [ ] Structured data trong HTML source
- [ ] Heading tags đúng thứ tự trong HTML

**View Source Test:**
- [ ] Inspect > View page source
- [ ] Tìm `<title>`, `<meta name="description">`, `<link rel="canonical">`
- [ ] Tìm `<script type="application/ld+json">`

---

## L. Security & Trust Verification

### Security
- [ ] HTTPS hoạt động (không mixed content)
- [ ] Security headers:
  ```http
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Strict-Transport-Security: max-age=31536000
  Content-Security-Policy: ...
  ```

### Trust Pages
- [ ] `/gioi-thieu` có thông tin doanh nghiệp
- [ ] `/lien-he` có form hoạt động
- [ ] `/chinh-sach-bao-mat` tồn tại
- [ ] `/dieu-khoan` tồn tại

### Business Info
- [ ] Tên công ty: CÔNG TY TNHH THIẾT BỊ Y TẾ HAMEDCO
- [ ] Địa chỉ đầy đủ
- [ ] SĐT: 086 900 9486
- [ ] Email: contact@hamedco.com.vn

---

## M. Filter/Sort/Pagination Verification

### Filter (?filter=)
- [ ] Canonical trỏ về category gốc
- [ ] Meta robots: noindex

### Sort (?sort=)
- [ ] Canonical trỏ về category gốc
- [ ] Meta robots: noindex

### Pagination (?page=2,3,4...)
- [ ] URL riêng cho mỗi trang
- [ ] Dùng `<a href>` không phải JS
- [ ] Canonical: self-referential
- [ ] Pagination controls hoạt động

### Infinite Scroll
- [ ] Có fallback pagination URL
- [ ] Load more button hoạt động

---

## N. Performance Verification

### Image Optimization
- [ ] Sử dụng WebP/AVIF
- [ ] Kích thước tối ưu (< 200KB cho ảnh lớn)
- [ ] Responsive images với srcset

### Code Splitting
- [ ] JS bundle < 150KB initial
- [ ] Lazy load routes không cần thiết

### Caching
- [ ] Static assets có Cache-Control: max-age=31536000
- [ ] HTML có Cache-Control phù hợp
- [ ] Vercel Edge caching hoạt động

---

## O. Final QA Checklist

### Pre-Delivery Tests
- [ ] Google Rich Results Test passed
- [ ] PageSpeed Insights score ≥ 85 (mobile)
- [ ] Google Mobile-Friendly Test passed
- [ ] Lighthouse SEO score ≥ 90
- [ ] Không console errors
- [ ] Không broken links

### Deliverables
- [ ] File robots.txt
- [ ] File sitemap.xml
- [ ] Redirect rules documented
- [ ] Canonical rules documented
- [ ] Meta robots rules documented
- [ ] Schema list per template documented
- [ ] Test reports (Rich Results, PageSpeed, Mobile)

### CMS Documentation
- [ ] Hướng dẫn sửa SEO title/description
- [ ] Hướng dẫn sửa slug
- [ ] Hướng dẫn sửa canonical
- [ ] Hướng dẫn sửa meta robots
- [ ] Hướng dẫn thêm FAQ

---

## URLs mẫu để test

| Page Type | URL |
|-----------|-----|
| Homepage | https://hamedco.com.vn/ |
| Products | https://hamedco.com.vn/san-pham |
| Category | https://hamedco.com.vn/san-pham/sieu-am |
| Product | https://hamedco.com.vn/san-pham/chi-tiet/epiq-elite |
| About | https://hamedco.com.vn/gioi-thieu |
| Contact | https://hamedco.com.vn/lien-he |

---

## Lỗi thường gặp cần tránh

1. **Trùng lặp Title** - Mỗi trang phải có title duy nhất
2. **Thiếu Alt Text** - Mọi ảnh phải có alt
3. **Canonical sai** - Canonical phải trỏ đến URL chuẩn
4. **Schema không khớp nội dung** - Schema phải match what users see
5. **Mobile khác desktop** - Không được cắt nội dung mobile
6. **Filter pages index** - Filter pages phải noindex
7. **Hero image lớn** - Preload nhưng optimize kích thước
8. **Missing structured data** - Organization + WebSite schema bắt buộc

(End of file - total 295 lines)
