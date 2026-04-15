# SEO Architecture (HAMEDCO)
> Tuân thủ SLA Báo giá: Hiệu suất ánh xạ theo Core Web Vitals và JSON-LD Markup.
> Reference: YC KỸ THUẬT WEBSITE HAMEDCO CHUẨN SEO #BG-WEB-HAMEDCO-2026-2

## Mục tiêu SEO

- [x] Google crawl được
- [x] Google index được
- [x] Nội dung render được
- [x] Kiến trúc site rõ ràng
- [x] Tốc độ đạt chuẩn Core Web Vitals
- [x] Dữ liệu có cấu trúc hợp lệ
- [x] Không trùng lặp URL, trùng lặp nội dung, hoặc chặn bot ngoài ý muốn

---

## 1. Technical SEO Strategy

### 1.1 Server-Side Rendering (SSR) & Incremental Static Regeneration (ISR)
- [x] Tất cả trang tĩnh (Home, About, Contact) sẽ được Pre-render (SSG/ISR) để đảm bảo Googlebot fetch HTML trọn vẹn.
- [x] Dữ liệu Product/Blog re-generated tự động nền (ISR tag/background revalidate) mỗi 1h hoặc mỗi khi Admin Publish bài mới ở CMS Payload.
- [x] Trả Status Code 404 cho Slug không hợp lệ. Trả 301 Redirects cho các URL cũ.

### 1.2 Crawling & Indexing Control
- [x] **Dynamic Sitemap XML**: `hamedco.com.vn/sitemap.xml` tự động render cây URL chứa Product, News, Projects với thuộc tính `priority` và `lastmod`.
- [x] **Robots.txt**: Cấu hình chặn Bot scan thư mục `/admin/`, `/api/`, `/preview/`.
- [x] **Hreflang Tags**: Yêu cầu bắt buộc do có 5 ngôn ngữ. Mapping `<link rel="alternate" hreflang="x" href="..." />` tương đối cho mỗi locale.
  - vi-VN
  - en-US / en-GB
  - ja-JP
  - ko-KR
  - de-DE

### 1.3 Security & Caching Headers
- [x] Tích hợp chuẩn Canonical URL trong tag `<head>` chặn duplicate content.
- [x] Bật Keep-Alive, Enable GZIP/Brotli Compression, và `Cache-Control: public, max-age=31536000, immutable` cho static assets (Fonts, JS/CSS, Icons).

---

## 2. URL Structure & Canonical

### 2.1 URL Chuẩn SEO
- [x] URL ngắn, dễ đọc, dùng dấu gạch ngang
- [x] Không dùng URL có tham số dư thừa cho trang chính
- [x] Mỗi nội dung chỉ có 1 URL chính thức

**Quy ước thống nhất:**
- Không trailing slash
- Non-www → www redirect
- HTTP → HTTPS (bắt buộc)

**Ví dụ chuẩn:**
- `/san-pham/chi-tiet/may-sieu-am-philip-lumify`
- `/san-pham/sieu-am`
- `/gioi-thieu`

**Không nên:**
- `/san-pham/chi-tiet/HC795005-lumify` (slug không có nghĩa)
- `/san-pham?filter=brand&value=philips` (param không cần thiết)

### 2.2 Canonical Implementation
- [x] Canonical tự động cho mọi trang
- [x] Hỗ trợ sửa tay canonical từ CMS khi cần
- [x] Canonical trỏ đúng URL chuẩn

### 2.3 Redirect Rules
| Loại | Xử lý |
|------|--------|
| URL cũ → URL mới | 301 Permanent Redirect |
| Non-www → www | 301 Redirect |
| HTTP → HTTPS | 301 Redirect |
| Trailing slash | 301 Redirect (nếu có) |

---

## 3. Meta Tags & Heading Structure

### 3.1 Meta Data Tags Tự động hóa
CMS Payload thiết lập field chuẩn cho thẻ SEO:
- [x] `Meta Title` (Auto-generated fallback: `[Sản phẩm] - [Tên Hãng] | HAMEDCO`, giới hạn 60 ký tự)
- [x] `Meta Description` (Limit 150-160 ký tự)
- [x] **Open Graph (OG)** + **Twitter Cards**: Tự động sinh hoặc pick từ Cover Image
- [x] `Meta Robots` field trong CMS (index,follow | noindex,follow | noindex,nofollow)
- [x] `Canonical URL` field trong CMS

### 3.2 Heading & Semantic HTML5
- [x] Chỉ có 1 thẻ `<h1>` duy nhất trên mỗi URL
  - Homepage: "Đối tác tin cậy trong Thiết bị Y tế"
  - Product: Tên định danh Thiết bị
  - Blog: Tiêu đề Post
- [x] `<h2>`, `<h3>`, `<h4>` phân cấp logic, không nhồi từ khóa
- [x] Semantic tags: `<address>`, `<nav>`, `<article>`, `<aside>`, `<main>`

---

## 4. Meta Robots Rules

### 4.1 Index Settings theo Page Type
| Page Type | Meta Robots | Notes |
|-----------|-------------|-------|
| Homepage | index,follow | Mặc định |
| Product Detail | index,follow | Mặc định |
| Category Listing | index,follow | Có thể noindex page 2+ |
| Blog/News | index,follow | Mặc định |
| Static Pages (About, Contact) | index,follow | Mặc định |
| Filter pages (?filter=) | noindex,follow | Không index filter |
| Sort pages (?sort=) | noindex,follow | Không index sort |
| Search results | noindex,follow | Không index search |
| Tag/Author archive | noindex,follow | Nếu nội dung mỏng |
| Staging/Preview | noindex,nofollow | Bắt buộc |

### 4.2 CMS Meta Robots Field
- [x] `index,follow` - Mặc định cho trang cần SEO
- [x] `noindex,follow` - Cho trang lọc, search, tag
- [x] `noindex,nofollow` - Cho trang test/staging

---

## 5. Sitemap XML Architecture

### 5.1 Sitemap Structure
```
/sitemap.xml                    → Main sitemap (references sub-sitemaps)
/sitemap-products.xml           → Product detail pages
/sitemap-images.xml             → Product images
```

### 5.2 Sitemap Content Rules
- [x] Chỉ chứa URL canonical và indexable
- [x] Tự động cập nhật khi thêm/sửa/xóa trang
- [x] Thêm `lastmod`, `changefreq`, `priority` cho mỗi entry
- [x] Image sitemap cho product images

### 5.3 URL Priority Guidelines
| Priority | Page Type |
|----------|-----------|
| 1.0 | Homepage |
| 0.9 | Products listing |
| 0.85 | Category pages |
| 0.8 | Static pages (About, Contact) |
| 0.7 | Product detail |
| 0.3 | Legal pages (Privacy, Terms) |

---

## 6. Structured Data (JSON-LD)

### 6.1 Schema Types & Locations
| Schema Type | Location | Use Case |
|-------------|----------|----------|
| Organization | layout.tsx (all pages) | Brand identity |
| LocalBusiness | layout.tsx (all pages) | Local SEO |
| WebSite | layout.tsx (all pages) | Search action |
| Product | Product detail page | Rich snippets |
| BreadcrumbList | All pages | Navigation |
| FAQPage | Product/FAQ pages | FAQ rich results |
| Article | Blog/News pages | Article rich results |
| NewsArticle | News pages | News rich results |

### 6.2 Product Schema Fields
```json
{
  "@type": "Product",
  "name": "Tên sản phẩm",
  "image": ["url1", "url2"],
  "description": "Mô tả",
  "brand": { "@type": "Brand", "name": "Philips" },
  "sku": "SKU-123",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "VND",
    "availability": "https://schema.org/InStock"
  }
}
```

### 6.3 FAQPage Schema
```json
{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Câu hỏi?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Câu trả lời."
    }
  }]
}
```

### 6.4 BreadcrumbList Schema
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Trang Chủ", "item": "https://hamedco.com.vn" },
    { "@type": "ListItem", "position": 2, "name": "Sản Phẩm", "item": "https://hamedco.com.vn/san-pham" },
    { "@type": "ListItem", "position": 3, "name": "Siêu âm", "item": "https://hamedco.com.vn/san-pham/sieu-am" }
  ]
}
```

---

## 7. Image Optimization

### 7.1 Image Requirements
- [x] Định dạng: WebP/AVIF (auto-convert)
- [x] Alt text mô tả tự nhiên cho mọi ảnh
  - Thumbnail: Alt = tên title bài
  - Ảnh chi tiết: Alt = tên title + "hình 1", "hình 2"
- [x] Tên file ảnh có nghĩa: `epiq-elite.jpg` (không: `IMG_1234.jpg`)
- [x] Responsive: `sizes` và `srcSet` cho 3 độ phân giải

### 7.2 CMS Image Fields
- [x] Alt text field cho mỗi ảnh trong gallery
- [x] Auto-generate alt từ product name làm fallback
- [x] Width/height declared để tránh CLS

### 7.3 Lazy Loading
- [x] Ảnh dưới màn hình đầu: `loading="lazy"`
- [x] Hero/LCP images: `loading="eager"` hoặc preload

---

## 8. Web Vitals & Performance Budget

### 8.1 Core Web Vitals Targets
| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | Preload hero image & fonts |
| CLS | < 0.1 | Declare width/height for all media |
| INP | < 200ms | De-bounce search filters |

### 8.2 Performance Checklist
- [x] Ảnh định dạng WebP/AVIF
- [x] Lazy loading cho ảnh dưới fold
- [x] Preload fonts quan trọng
- [x] Minify CSS/JS
- [x] GZIP/Brotli compression
- [x] CDN (Vercel Edge)
- [x] Cache-Control headers
- [x] TTFB < 200ms

### 8.3 Anti-Patterns
- [x] Không banner/popup làm lệch layout
- [x] Không infinite scroll không fallback
- [x] Không ảnh không kích thước
- [x] Không JS blocking render

---

## 9. Internal Linking

### 9.1 Link Rules
- [x] Mỗi trang quan trọng có internal links
- [x] Anchor text mô tả đúng nội dung đích
- [x] Không orphan pages
- [x] Link giữa:
  - Bài viết liên quan
  - Danh mục ↔ sản phẩm
  - Sản phẩm ↔ bài tư vấn

### 9.2 Breadcrumb Structure
```
Trang chủ → Danh mục cha → Danh mục con → Trang chi tiết
```

---

## 10. Mobile-First Requirements

- [x] Responsive 100%
- [x] Nội dung mobile không bị cắt bớt
- [x] Internal link, heading, structured data đầy đủ trên mobile
- [x] Font dễ đọc, nút bấm ≥ 48x48px
- [x] Touch target spacing hợp lý

---

## 11. Security & Trust Signals

### 11.1 Security
- [x] HTTPS toàn site (bắt buộc)
- [x] Security headers (HSTS, X-Frame-Options, CSP)
- [x] Không mixed content

### 11.2 Trust Pages
- [x] Giới thiệu
- [x] Liên hệ
- [x] Chính sách bảo mật
- [x] Điều khoản

### 11.3 Business Information
- [x] Tên công ty: CÔNG TY TNHH THIẾT BỊ Y TẾ HAMEDCO
- [x] Địa chỉ: Tầng 15, Bitexco Financial Tower, Q.1, TP.HCM
- [x] SĐT: 086 900 9486
- [x] Email: contact@hamedco.com.vn
- [x] Mã số thuế: 0xXXXXXXXX

---

## 12. Filter/Sort/Pagination Rules

### 12.1 Filter (?filter=)
- [x] Mặc định: noindex, canonical về category gốc
- [x] Chỉ mở index khi là landing page SEO cụ thể

### 12.2 Sort (?sort=)
- [x] Mặc định: noindex, canonical về category gốc
- [x] Không tạo tổ hợp filter vô hạn

### 12.3 Pagination (?page=2,3,4...)
- [x] URL riêng, crawl được
- [x] Self-canonical
- [x] Index theo quyết định từng danh mục

### 12.4 Infinite Scroll
- [x] Fallback phân trang URL tĩnh bắt buộc

---

## 13. Template SEO Checklist

### 13.1 Homepage Template
- [x] Title, meta riêng
- [x] Section giới thiệu doanh nghiệp
- [x] Nhóm danh mục chính
- [x] Organization/WebSite schema
- [x] Internal link mạnh tới money pages

### 13.2 Category Template
- [x] H1 rõ ràng
- [x] Intro 100-300 từ
- [x] Danh sách sản phẩm/bài viết
- [x] Nội dung mô tả cuối trang
- [x] Breadcrumb + schema
- [x] Canonical chuẩn
- [x] Pagination URL tĩnh

### 13.3 Product Template
- [x] H1 = Tên sản phẩm
- [x] Mô tả ngắn
- [x] Thông số kỹ thuật
- [x] Nội dung chi tiết
- [x] Ảnh tối ưu + alt text
- [x] Product schema (đầy đủ fields)
- [x] BreadcrumbList schema
- [x] FAQ schema (nếu có)
- [x] Sản phẩm liên quan
- [x] CTA rõ ràng

### 13.4 Article Template (Blog/News)
- [x] H1
- [x] Ngày đăng/cập nhật
- [x] Author
- [x] Ảnh đại diện
- [x] TOC (Table of Contents)
- [x] Related articles
- [x] Article/NewsArticle schema
- [x] Breadcrumb
- [x] FAQ schema (nếu có)

---

## 14. Implementation Priority

1. **Crawl/index chuẩn** ✅
2. **URL/canonical/robots/redirect** ✅
3. **Mobile + Core Web Vitals** ✅
4. **Template heading/meta chuẩn** ✅
5. **Sitemap + internal link** ✅
6. **Schema JSON-LD** ✅
7. **Tối ưu UX chuyển đổi** ⏳

---

## 15. Testing & Verification

### 15.1 Required Tests
- [x] Rich Results Test (Google) - Schema validation
- [x] PageSpeed Insights - Core Web Vitals
- [x] Mobile-Friendly Test - Responsive check
- [x] robots.txt validator
- [x] Sitemap XML validator

### 15.2 URL Samples
| Page Type | URL Example |
|-----------|-------------|
| Homepage | `/` |
| Category | `/san-pham/sieu-am` |
| Product | `/san-pham/chi-tiet/epiq-elite` |
| Article | `/tin-tuc/ten-bai-viet` (future) |
| Contact | `/lien-he` |

---

## 16. Files Reference

| File | Purpose |
|------|---------|
| `src/app/robots.ts` | Robots.txt configuration |
| `src/app/sitemap.ts` | Sitemap XML generator |
| `src/app/layout.tsx` | Global SEO, Organization/LocalBusiness schema |
| `src/app/san-pham/chi-tiet/[slug]/page.tsx` | Product SEO, Product/Breadcrumb/FAQ schema |
| `src/components/JsonLd.tsx` | JSON-LD script renderer |
| `src/components/ArticleSchema.tsx` | Article/NewsArticle schema component |
| `src/app/admin/san-pham/[slug]/ProductEditForm.tsx` | CMS SEO fields (title, desc, slug, meta robots, FAQ) |

(End of file - total 280 lines)
