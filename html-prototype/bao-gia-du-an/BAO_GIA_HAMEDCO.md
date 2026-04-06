# BÁO GIÁ THIẾT KẾ & PHÁT TRIỂN WEBSITE — HAMEDCO.VN

> **Dự án:** Thiết kế và phát triển website doanh nghiệp HAMEDCO
> **Khách hàng:** Công ty CP Vật tư và Thiết bị Y tế Hà Nội (HAMEDCO)
> **Ngày lập:** 18/03/2026
> **Đơn vị thực hiện:** _[Tên công ty của bạn]_

---

## 1. TỔNG QUAN DỰ ÁN

Website doanh nghiệp giới thiệu sản phẩm & dịch vụ cho công ty thiết bị y tế, bao gồm:
- Website public đa trang (multi-page)
- CMS quản trị nội dung
- Hệ thống đa ngôn ngữ (5 ngôn ngữ)
- SEO framework toàn diện
- Lead capture funnels

---

## 2. DANH SÁCH TRANG WEBSITE (SITEMAP)

### 2.1 Tổng quan cấu trúc (Web Structure)

```
hamedco.vn/
├── / ............................ Trang chủ (Homepage)
├── /gioi-thieu ................. Giới thiệu công ty
├── /san-pham/ .................. Sản phẩm (Listing)
│   ├── /san-pham?nganh=....... Lọc theo ngành hàng
│   ├── /san-pham?chuyen-khoa=. Lọc theo chuyên khoa
│   ├── /san-pham?hang=........ Lọc theo hãng
│   └── /san-pham/[slug] ...... Chi tiết sản phẩm (Dynamic)
│       ├── /san-pham/maxio-iii
│       ├── /san-pham/sonesta-6210
│       ├── /san-pham/chammed-cu-5000
│       ├── /san-pham/surgical-instruments
│       ├── /san-pham/jvm-pharmacy-automation
│       └── /san-pham/[slug]... (N trang sản phẩm khác)
├── /dich-vu/ ................... Dịch vụ (Listing)
│   ├── /dich-vu/tu-van ........ Tư vấn giải pháp
│   ├── /dich-vu/trien-khai .... Triển khai & Lắp đặt
│   ├── /dich-vu/bao-tri ....... Bảo trì & Bảo hành
│   └── /dich-vu/dao-tao ....... Đào tạo
├── /doi-tac/ ................... Đối tác & Hãng (Listing)
│   └── /doi-tac/[slug] ........ Brand page (Dynamic)
│       ├── /doi-tac/kls-martin
│       ├── /doi-tac/philips
│       ├── /doi-tac/jvm
│       ├── /doi-tac/perfint
│       ├── /doi-tac/chammed
│       └── /doi-tac/sonesta
├── /du-an/ ..................... Dự án & Case study (Listing)
│   └── /du-an/[slug] .......... Chi tiết dự án (Dynamic)
├── /tin-tuc/ ................... Tin tức & Kiến thức (Listing)
│   └── /tin-tuc/[slug] ........ Chi tiết bài viết (Dynamic)
│       ├── /tin-tuc/hamedco-ky-ket-hop-tac-perfint-healthcare
│       ├── /tin-tuc/xu-huong-thiet-bi-y-te-2026
│       ├── /tin-tuc/quy-dinh-nhap-khau-thiet-bi-y-te-2026
│       ├── /tin-tuc/hamedco-trien-khai-jvm-bac-ninh
│       ├── /tin-tuc/huong-dan-chon-mua-dung-cu-phau-thuat
│       ├── /tin-tuc/ai-chan-doan-hinh-anh-viet-nam
│       └── /tin-tuc/[slug].... (N bài viết khác)
├── /tuyen-dung/ ................ Tuyển dụng (Listing)
│   └── /tuyen-dung/[slug] ..... Chi tiết vị trí (Dynamic)
├── /lien-he .................... Liên hệ
├── /bao-gia .................... Yêu cầu báo giá
├── /tai-lieu/ .................. Tài liệu & Brochure
│   └── Download center
├── /chinh-sach-bao-mat ......... Chính sách bảo mật
├── /dieu-khoan-su-dung ......... Điều khoản sử dụng
├── /sitemap .................... Sitemap HTML
└── /noi-bo ..................... Khu vực nội bộ / Đại lý
```

---

### 2.2 Chi tiết từng trang

#### 🏠 TRANG CHỦ (`/`)
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Top Bar | Địa chỉ, giờ làm việc, hotline, email |
| 2 | Header + Navigation | Logo, 7 menu chính, dropdown sản phẩm (4 danh mục con), language switcher (5 ngôn ngữ), CTA báo giá |
| 3 | Mobile Navigation | Menu mobile responsive, hamburger toggle |
| 4 | Hero Carousel | 3 slide ảnh full-width, auto-play, dots navigation, badge, CTA buttons x2 |
| 5 | Stats Counter | 4 counters với animation scroll (20+ năm, 50+ đối tác, 500+ sản phẩm, 200+ dự án) |
| 6 | About Intro | Split layout: text + image, 2 CTA buttons |
| 7 | Featured Products | Grid 6 product cards (image, brand, title, description, link), CTA "Xem tất cả" |
| 8 | Services | Grid 4 service cards với icon SVG + mô tả |
| 9 | Partners Logo | Grid 6 partner logos clickable (KLS Martin, Philips, JVM, Perfint, CHAMMED, SONESTA) |
| 10 | Certifications | Grid 5 chứng nhận (CE Mark, FDA 510(k), ISO 13485, IEC 60601, Bộ Y tế VN) |
| 11 | Why Choose Us | Grid 6 items với icon + mô tả |
| 12 | Cooperation Process | 4 bước quy trình hợp tác |
| 13 | Testimonials | Grid 4 testimonial cards (avatar, quote, tên, chức vụ) |
| 14 | FAQ | 5 câu hỏi accordion mở/đóng |
| 15 | CTA + Inquiry Form | Split: CTA content + form nhanh (4 fields: họ tên, SĐT, email, nội dung) |
| 16 | Footer CTA Bar | Banner CTA + 2 buttons |
| 17 | Footer | 5 columns: brand+social+newsletter, sản phẩm, dịch vụ, công ty, liên hệ |
| 18 | Footer Trust Badges | 5 badges tin cậy |
| 19 | Footer Bottom | Copyright, ĐKKD, links (bảo mật, điều khoản, sitemap) |
| 20 | Floating CTA | Panel: Hotline, Zalo, Facebook — mở/đóng |
| 21 | Back to Top | Button scroll to top |
| 22 | Lightbox | Xem ảnh phóng to |
| 23 | JSON-LD | Organization structured data |

---

#### 📋 GIỚI THIỆU (`/gioi-thieu`)
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Breadcrumbs | Trang chủ > Giới thiệu |
| 2 | Page Hero | Tiêu đề + mô tả ngắn |
| 3 | Company Story | Split layout: câu chuyện doanh nghiệp + hình ảnh |
| 4 | Vision & Mission | 2 cards: Tầm nhìn + Sứ mệnh |
| 5 | Core Values | Grid 3 value cards (icon, tiêu đề, mô tả): Uy tín, Trách nhiệm, Hiệu quả |
| 6 | Timeline | 6 mốc lịch sử (2005, 2008, 2012, 2016, 2020, 2024) |
| 7 | Stats Counter | 4 counters animation |
| 8 | CTA Section | CTA + 2 buttons |

---

#### 📦 SẢN PHẨM — LISTING (`/san-pham`)
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Breadcrumbs | Trang chủ > Sản phẩm |
| 2 | Page Hero | Tiêu đề + mô tả |
| 3 | Filter Bar | Tab filter: Tất cả, Chẩn đoán hình ảnh, Phẫu thuật, Tự động hóa, Khác |
| 4 | Product Grid | 5+ product cards (image, brand, title, description, badge, link) |
| 5 | CTA Section | CTA báo giá + liên hệ |

---

#### 📦 SẢN PHẨM — CHI TIẾT (`/san-pham/[slug]`) — Template dùng chung
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Breadcrumbs | Trang chủ > Sản phẩm > [Tên SP] |
| 2 | Product Hero | Gallery ảnh lớn (lightbox, zoom) |
| 3 | Product Info | Tên, brand, model, mô tả ngắn |
| 4 | Tab Navigation | Tổng quan \| Tính năng \| Thông số kỹ thuật \| Cấu hình \| Tài liệu \| Ứng dụng lâm sàng |
| 5 | Tab: Tổng quan | Mô tả chi tiết sản phẩm |
| 6 | Tab: Tính năng | Danh sách features (title + description) |
| 7 | Tab: Thông số | Bảng specs (key/value/unit) |
| 8 | Tab: Cấu hình | Các configuration options |
| 9 | Tab: Tài liệu | Download brochure PDF, datasheet |
| 10 | Tab: Ứng dụng | Clinical applications richtext |
| 11 | Sidebar | Brand logo, CTA "Yêu cầu báo giá", "Tải brochure" |
| 12 | Certifications | Badges chứng nhận sản phẩm |
| 13 | Reference Sites | Danh sách bệnh viện đã triển khai |
| 14 | Related Products | Sản phẩm liên quan |
| 15 | JSON-LD Product | Product structured data |

**Số lượng trang sản phẩm hiện tại:** 5 sản phẩm (MAXIO III, SONESTA 6210, CHAMMED CU-5000, Dụng cụ phẫu thuật KLS Martin, JVM Pharmacy Automation)
**Ước tính mở rộng:** 20–50 sản phẩm

---

#### 🔧 DỊCH VỤ — LISTING (`/dich-vu`)
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Breadcrumbs | Trang chủ > Dịch vụ |
| 2 | Page Hero | Tiêu đề + mô tả |
| 3 | Services Grid | 4 service cards chi tiết (icon, title, description, danh sách tính năng): Tư vấn giải pháp, Triển khai & Lắp đặt, Bảo trì & Bảo hành, Đào tạo |
| 4 | Process Timeline | 6 bước quy trình làm việc |
| 5 | CTA Section | CTA + 2 buttons |

---

#### 🔧 DỊCH VỤ — CHI TIẾT (`/dich-vu/[slug]`) — 4 trang con
| # | Trang | Nội dung |
|---|-------|----------|
| 1 | `/dich-vu/tu-van` | Landing page Tư vấn giải pháp |
| 2 | `/dich-vu/trien-khai` | Landing page Triển khai & Lắp đặt |
| 3 | `/dich-vu/bao-tri` | Landing page Bảo trì & Bảo hành |
| 4 | `/dich-vu/dao-tao` | Landing page Đào tạo |

Mỗi trang chi tiết dịch vụ bao gồm: Hero, Mô tả chi tiết, Quy trình, Benefits, CTA đăng ký

---

#### 🤝 ĐỐI TÁC — LISTING (`/doi-tac`)
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Breadcrumbs | Trang chủ > Đối tác |
| 2 | Page Hero | Tiêu đề + mô tả |
| 3 | Partner Details | 6 partner sections chi tiết (logo/text, tên hãng, quốc gia, mô tả, tags): KLS Martin, Philips, JVM, Perfint Healthcare, CHAMMED, SONESTA |
| 4 | CTA "Trở thành đối tác" | CTA hợp tác + 2 buttons |

---

#### 🤝 ĐỐI TÁC — BRAND PAGE (`/doi-tac/[slug]`) — 6 trang con
| # | Trang | Nội dung |
|---|-------|----------|
| 1 | `/doi-tac/kls-martin` | Brand page KLS Martin Group (Đức) |
| 2 | `/doi-tac/philips` | Brand page Philips Healthcare (Hà Lan) |
| 3 | `/doi-tac/jvm` | Brand page JVM (Hàn Quốc) |
| 4 | `/doi-tac/perfint` | Brand page Perfint Healthcare (Ấn Độ) |
| 5 | `/doi-tac/chammed` | Brand page CHAMMED (Hàn Quốc) |
| 6 | `/doi-tac/sonesta` | Brand page SONESTA Medical |

Mỗi brand page bao gồm: Logo, Mô tả hãng, Quốc gia, Lịch sử, Sản phẩm của hãng, Chứng nhận

---

#### 🏗️ DỰ ÁN & CASE STUDY (`/du-an`) — MỚI
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Page Hero | Tiêu đề + filter |
| 2 | Project Grid | Card grid các dự án |
| 3 | Chi tiết dự án (`/du-an/[slug]`) | Client, sản phẩm sử dụng, kết quả, gallery ảnh, testimonial |

**Ước tính:** 10–20 case study

---

#### 📰 TIN TỨC — LISTING (`/tin-tuc`)
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Breadcrumbs | Trang chủ > Tin tức |
| 2 | Page Hero | Tiêu đề + mô tả |
| 3 | Filter Tabs | 4 tabs: Tất cả, Tin công ty, Kiến thức, Ngành y tế |
| 4 | Article Grid | 6+ article cards (image, badge category, date, title, excerpt) |
| 5 | Pagination | Phân trang bài viết |

---

#### 📰 TIN TỨC — CHI TIẾT (`/tin-tuc/[slug]`) — Template bài viết
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Breadcrumbs | Trang chủ > Tin tức > [Tiêu đề] |
| 2 | Article Cover | Ảnh cover lớn, tiêu đề, ngày đăng, tác giả, category |
| 3 | Article Content | Rich text content: headings, paragraphs, images, lists, quotes |
| 4 | Social Share | Buttons chia sẻ Facebook, LinkedIn, Copy link |
| 5 | Related Articles | 3 bài viết liên quan |
| 6 | CTA Section | CTA liên hệ |
| 7 | JSON-LD Article | Article structured data |

**Số bài viết hiện tại:** 6 bài
**Ước tính mở rộng:** 20–50 bài

---

#### 👥 TUYỂN DỤNG — LISTING (`/tuyen-dung`)
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Breadcrumbs | Trang chủ > Tuyển dụng |
| 2 | Page Hero | Tiêu đề + mô tả |
| 3 | Why Join | 3 perk cards (Thu nhập, Đào tạo quốc tế, Bảo hiểm) |
| 4 | Job Listings | 3+ job cards (department badge, title, description, location, type, deadline, CTA ứng tuyển) |
| 5 | CTA "Gửi CV" | CTA cho vị trí chưa có trong danh sách |

---

#### 👥 TUYỂN DỤNG — CHI TIẾT (`/tuyen-dung/[slug]`) — Dynamic
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Job Detail | Department, Location, Type |
| 2 | Job Description | Rich text mô tả công việc |
| 3 | Requirements | Yêu cầu ứng viên |
| 4 | Benefits | Quyền lợi nhân viên |
| 5 | Apply Form/Button | Form ứng tuyển hoặc gửi email |

---

#### 📞 LIÊN HỆ (`/lien-he`)
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Breadcrumbs | Trang chủ > Liên hệ |
| 2 | Page Hero | Tiêu đề + mô tả |
| 3 | Office Cards | 3 office cards chi tiết (Trụ sở HN, VP2 HN, VP HCM): địa chỉ, SĐT, email, giờ làm việc |
| 4 | Contact Form | Form 7 fields: họ tên, đơn vị, email, SĐT, chủ đề (select 6 options), nội dung, nút gửi |
| 5 | Google Map | Iframe Google Maps nhúng |

---

#### 💰 YÊU CẦU BÁO GIÁ (`/bao-gia`)
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Breadcrumbs | Trang chủ > Yêu cầu báo giá |
| 2 | Page Hero | Tiêu đề + mô tả |
| 3 | Quote Form | Form chi tiết 9 fields: họ tên, chức vụ, đơn vị, khoa/phòng, email, SĐT, sản phẩm (select 7 options), số lượng, chi tiết yêu cầu |
| 4 | Sidebar Benefits | 6 lý do chọn HAMEDCO |
| 5 | Hotline CTA | Box CTA gọi hotline gấp |
| 6 | Thank You | Trang cảm ơn sau submit |

---

#### 📄 TÀI LIỆU & BROCHURE (`/tai-lieu`) — MỚI
| # | Section / Thành phần | Mô tả chi tiết |
|---|----------------------|-----------------|
| 1 | Page Hero | Download Center |
| 2 | Filter | Lọc theo sản phẩm / hãng |
| 3 | Resource Grid | Danh sách tài liệu: brochure, catalog, datasheet |
| 4 | Download | Nút tải (có thể yêu cầu thông tin lead) |

---

#### 📄 TRANG PHỤ (Utility Pages)
| # | Trang | Mô tả |
|---|-------|-------|
| 1 | `/chinh-sach-bao-mat` | Chính sách bảo mật |
| 2 | `/dieu-khoan-su-dung` | Điều khoản sử dụng |
| 3 | `/sitemap` | Sitemap HTML |
| 4 | Trang 404 | Not Found page |
| 5 | Trang Thank You | Sau submit form |

---

## 3. TỔNG HỢP SỐ TRANG

| Nhóm trang | Trang cha | Trang con (template) | Trang con (dynamic/nội dung) | Tổng |
|------------|-----------|---------------------|------------------------------|------|
| Trang chủ | 1 | — | — | **1** |
| Giới thiệu | 1 | — | — | **1** |
| Sản phẩm | 1 (listing) | 1 (template chi tiết) | 5 sản phẩm ban đầu + mở rộng 20–50 | **6–51** |
| Dịch vụ | 1 (listing) | 4 (trang con dịch vụ) | — | **5** |
| Đối tác | 1 (listing) | 6 (brand pages) | — | **7** |
| Dự án & Case study | 1 (listing) | 1 (template chi tiết) | 10–20 case study | **12–22** |
| Tin tức | 1 (listing) | 1 (template chi tiết) | 6 bài ban đầu + mở rộng 20–50 | **8–52** |
| Tuyển dụng | 1 (listing) | 1 (template chi tiết) | 3 vị trí ban đầu | **5** |
| Liên hệ | 1 | — | — | **1** |
| Báo giá | 1 | — | — | **1** |
| Tài liệu | 1 | — | — | **1** |
| Utility pages | — | — | 5 | **5** |
| **TỔNG** | **11** | **14 templates** | **29–128 nội dung** | **~54–142 trang** |

---

## 4. CHỨC NĂNG WEBSITE (FEATURES)

### 4.1 Global Components (Áp dụng cho tất cả trang)

| # | Chức năng | Mô tả chi tiết |
|---|-----------|-----------------|
| 1 | **Top Bar** | Thông tin liên hệ nhanh (địa chỉ, giờ làm, hotline, email) |
| 2 | **Header Sticky** | Logo, navigation 7 mục, sticky on scroll |
| 3 | **Mega Menu / Dropdown** | Dropdown sản phẩm với 4 danh mục con |
| 4 | **Language Switcher** | 5 ngôn ngữ (VI, EN, ZH, KO, JA) với cờ quốc gia, dropdown |
| 5 | **Mobile Responsive** | Menu hamburger, navigation mobile full-screen |
| 6 | **CTA Button Header** | Nút "Yêu cầu báo giá" trên header |
| 7 | **Breadcrumbs** | Breadcrumb navigation trên tất cả trang con |
| 8 | **Footer Mega** | 5 columns: brand info, sản phẩm, dịch vụ, công ty, liên hệ |
| 9 | **Footer Newsletter** | Form đăng ký nhận tin (email subscription) |
| 10 | **Footer Social Links** | Facebook, LinkedIn, YouTube, Email |
| 11 | **Footer Trust Badges** | 5 badges: chính hãng, bảo hành, hỗ trợ 4h, ISO, TTBYT |
| 12 | **Footer CTA Bar** | Banner CTA + 2 buttons (báo giá + hotline) |
| 13 | **Floating Contact Panel** | Panel popup: Hotline, Zalo, Facebook — mở/đóng animation |
| 14 | **Back-to-Top Button** | Nút cuộn lên đầu trang, hiện khi scroll |
| 15 | **Skip to Content** | Accessibility: Skip to main content link |
| 16 | **Lightbox** | Xem ảnh phóng to (gallery products) |

---

### 4.2 Chức năng Interactive & Animation

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | **Hero Carousel** | Auto-play slider 3 slides, dots navigation, transition mượt |
| 2 | **Counter Animation** | Số đếm từ 0 → target khi scroll vào viewport |
| 3 | **Fade-in-up Animation** | Hiệu ứng xuất hiện sections khi scroll (stagger) |
| 4 | **FAQ Accordion** | Mở/đóng câu hỏi với animation |
| 5 | **Product Filter Tabs** | Lọc sản phẩm theo category (no page reload) |
| 6 | **News Filter Tabs** | Lọc tin tức theo category |
| 7 | **Image Gallery** | Product image gallery với lightbox, zoom |
| 8 | **Product Tab Navigation** | Tab content trong trang chi tiết sản phẩm |
| 9 | **Smooth Scroll** | Scroll mượt đến anchor sections |
| 10 | **Hover Effects** | Card hover, button hover states |

---

### 4.3 Chức năng Form & Lead Capture

| # | Form | Vị trí | Số fields |
|---|------|--------|-----------|
| 1 | **Form tư vấn nhanh** | Trang chủ CTA section | 4 fields (tên, SĐT, email, nội dung) |
| 2 | **Form yêu cầu báo giá** | `/bao-gia` | 9 fields (tên, chức vụ, đơn vị, khoa/phòng, email, SĐT, sản phẩm, số lượng, chi tiết) |
| 3 | **Form liên hệ** | `/lien-he` | 7 fields (tên, đơn vị, email, SĐT, chủ đề, nội dung, nút gửi) |
| 4 | **Form đăng ký newsletter** | Footer (all pages) | 1 field (email) |
| 5 | **Form ứng tuyển** | `/tuyen-dung/[slug]` | Email với subject tự động / Form upload CV |
| 6 | **Form tải tài liệu** | `/tai-lieu` | Lead gate: tên, email → tải brochure |

**Tính năng form chung:**
- Validation client-side (required fields, email format, phone format)
- Auto-email notification cho team (sales/HR)
- Thank you page / success message
- CSRF protection
- Rate limiting

---

### 4.4 SEO & Technical Features

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | **SSR/ISR** | Server-Side Rendering cho SEO |
| 2 | **Meta Tags** | Title, description, canonical cho mọi trang |
| 3 | **Open Graph** | OG tags cho chia sẻ social |
| 4 | **JSON-LD Structured Data** | Organization, Product, Article, BreadcrumbList |
| 5 | **Sitemap XML** | Tự động generate sitemap.xml |
| 6 | **Robots.txt** | Robots.txt chuẩn |
| 7 | **301 Redirects** | Redirect toàn bộ URL cũ → URL mới |
| 8 | **Semantic HTML5** | Heading hierarchy, ARIA labels |
| 9 | **Image Optimization** | WebP format, lazy loading, responsive images |
| 10 | **Alt Text** | Alt text bắt buộc cho tất cả hình ảnh |
| 11 | **Canonical URLs** | Canonical URL cho mọi trang |
| 12 | **Performance** | Lighthouse ≥85, LCP <2.5s, CLS <0.1 |

---

### 4.5 Đa ngôn ngữ (Multi-Language)

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | **5 ngôn ngữ** | Tiếng Việt 🇻🇳, English 🇬🇧, 中文 🇨🇳, 한국어 🇰🇷, 日本語 🇯🇵 |
| 2 | **Google Translate Integration** | Tự động dịch in-page |
| 3 | **Ẩn Google Translate UI** | Ẩn hoàn toàn toolbar, banner, tooltip Google Translate |
| 4 | **Custom Language Switcher** | Dropdown với cờ quốc gia trong header |
| 5 | **Cookie/localStorage** | Lưu preference ngôn ngữ người dùng |

---

### 4.6 Accessibility (WCAG 2.1 AA)

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | Skip-to-content link | Nhảy đến nội dung chính |
| 2 | Keyboard navigation | Tất cả tương tác bằng bàn phím |
| 3 | Screen reader | Hỗ trợ đọc màn hình |
| 4 | Color contrast | Tỷ lệ tương phản ≥ 4.5:1 |
| 5 | Focus indicators | Hiển thị focus khi tab |
| 6 | ARIA labels | Labels cho tất cả interactive elements |

---

### 4.7 Responsive Design

| Breakpoint | Kích thước |
|-----------|-----------|
| Mobile | 0 – 639px |
| Tablet | 640 – 1023px |
| Desktop | 1024 – 1279px |
| Wide | 1280px+ |

---

## 5. HỆ THỐNG CMS / ADMIN

### 5.1 Quản trị Sản phẩm

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | CRUD sản phẩm | Tạo, sửa, xóa, xem sản phẩm |
| 2 | Rich Editor | Editor nội dung WYSIWYG |
| 3 | Upload Gallery | Upload nhiều ảnh sản phẩm |
| 4 | Upload Brochure | Upload PDF brochure/datasheet |
| 5 | Categories | Quản lý danh mục (ngành hàng, chuyên khoa, hãng) |
| 6 | Draft/Publish | Workflow nháp → xuất bản |
| 7 | Version History | Lịch sử chỉnh sửa |
| 8 | Bulk Import/Export | Nhập/xuất hàng loạt (Excel/CSV) |

---

### 5.2 Quản trị Nội dung

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | CRUD bài viết | Tạo, sửa, xóa, xem tin tức/kiến thức |
| 2 | Rich Editor | Editor với image upload inline |
| 3 | Category/Tags | Phân loại bài viết (tin công ty, kiến thức, ngành y tế) |
| 4 | Page Builder | Tạo trang tùy chỉnh (landing page, dynamic pages) |
| 5 | SEO Fields | Meta title, description, OG image cho mỗi bài |
| 6 | Schedule Publish | Hẹn giờ đăng bài tự động |
| 7 | CRUD Dịch vụ | Quản lý nội dung dịch vụ |
| 8 | CRUD Đối tác | Quản lý thông tin partner/brand |
| 9 | CRUD Tuyển dụng | Quản lý vị trí tuyển dụng |
| 10 | CRUD Dự án | Quản lý case study/dự án |

---

### 5.3 Quản trị Lead

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | Dashboard | Dashboard inquiry mới |
| 2 | Lead List | Danh sách leads từ tất cả forms |
| 3 | Filter/Search | Lọc, tìm kiếm leads |
| 4 | Status Tracking | Trạng thái: New → Contacted → Qualified → Closed |
| 5 | Export | Xuất leads ra Excel/CSV |
| 6 | Email Notification | Tự động gửi email khi có lead mới |

---

### 5.4 Quản lý Media

| # | Chức năng | Mô tả |
|---|-----------|-------|
| 1 | Upload Media | Upload ảnh, video, PDF |
| 2 | Image Optimization | Tự động optimize ảnh (resize, compress, WebP) |
| 3 | Folder Management | Sắp xếp media theo thư mục |
| 4 | Alt Text | Quản lý alt text cho SEO |
| 5 | Cloud Storage | Lưu trữ trên Cloudflare R2 |

---

### 5.5 Phân quyền (Roles)

| Role | Quyền |
|------|-------|
| Admin | Full access |
| Marketing | Content, news, pages, media |
| Sales | Products, leads, resources |
| Viewer | Read-only |

---

## 6. DATA MIGRATION (Chuyển dữ liệu từ site cũ)

| # | Hạng mục | Mô tả |
|---|----------|-------|
| 1 | Content Inventory | Kiểm kê toàn bộ nội dung site cũ |
| 2 | URL Mapping | Ánh xạ URL cũ → URL mới |
| 3 | 301 Redirects | Thiết lập redirect cho tất cả URL có traffic |
| 4 | Image/PDF Migration | Download + re-upload media lên storage mới |
| 5 | Field Mapping | Ánh xạ data cũ → schema mới |
| 6 | Migration Script | Script chuyển dữ liệu (idempotent) |
| 7 | QA Checklist | Kiểm tra chất lượng mỗi batch |

**Ước tính khối lượng:**
- Products: 20–50 sản phẩm
- News: 10+ bài viết
- Partners: 5–10 thương hiệu
- Media: 100+ ảnh/PDF

---

## 7. DESIGN SYSTEM

| # | Hạng mục | Chi tiết |
|---|----------|----------|
| 1 | Color Palette | Primary Teal (#2B9EB3), Accent Orange (#E8834A), Dark Teal (#1A7A8A), neutrals |
| 2 | Typography | System fonts / Google Fonts |
| 3 | Spacing System | Design tokens |
| 4 | Component Library | Buttons, Cards, Badges, Forms, Tables, Tabs, Timeline, Accordion, Lightbox, Carousel |
| 5 | Icon System | SVG inline icons |
| 6 | CSS Architecture | Variables, Base, Layout, Components, Pages |

---

## 8. TỔNG HỢP BÁO GIÁ

### 8.1 Theo số trang (Page-based Pricing)

| # | Nhóm | Số trang | Ghi chú |
|---|------|----------|---------|
| 1 | Trang chủ (Homepage) | 1 | Phức tạp nhất: 23 sections/components |
| 2 | Trang tĩnh (Static Pages) | 10 | Giới thiệu, Dịch vụ listing, Đối tác listing, Liên hệ, Báo giá, Tuyển dụng listing, Tin tức listing, Tài liệu, Dự án listing, Sitemap HTML |
| 3 | Trang chi tiết dịch vụ | 4 | 4 landing pages dịch vụ |
| 4 | Trang brand (đối tác) | 6 | 6 brand pages |
| 5 | Template chi tiết sản phẩm | 1 | Template complex (6 tabs, gallery, sidebar) |
| 6 | Nội dung sản phẩm | 5 ban đầu | Setup 5 sản phẩm (mở rộng 20–50) |
| 7 | Template bài viết | 1 | Template blog/article |
| 8 | Nội dung bài viết | 6 ban đầu | Setup 6 bài tin tức |
| 9 | Template vị trí tuyển dụng | 1 | Template job detail |
| 10 | Nội dung tuyển dụng | 3 ban đầu | Setup 3 vị trí |
| 11 | Template dự án | 1 | Template case study |
| 12 | Utility pages | 5 | 404, Thank you, Bảo mật, Điều khoản, Sitemap |
| **TỔNG TEMPLATES + TRANG** | **~44 trang** | |

---

### 8.2 Theo chức năng (Feature-based Pricing)

| # | Chức năng | Độ phức tạp |
|---|-----------|-------------|
| 1 | Design System & UI Kit | Cao |
| 2 | Responsive Design (4 breakpoints) | Cao |
| 3 | Global Components (Header, Footer, Floating CTA, etc.) | Trung bình |
| 4 | Hero Carousel + Animations | Trung bình |
| 5 | Counter Animation on Scroll | Thấp |
| 6 | FAQ Accordion | Thấp |
| 7 | Product Filter System | Trung bình |
| 8 | News Filter System | Trung bình |
| 9 | Image Gallery + Lightbox | Trung bình |
| 10 | Tab Navigation (Product Detail) | Trung bình |
| 11 | Form Validation + Submission (6 forms) | Cao |
| 12 | Email Notification System | Trung bình |
| 13 | Multi-Language (5 languages) | Cao |
| 14 | SEO Framework (SSR, JSON-LD, Sitemap, Redirects) | Cao |
| 15 | CMS Setup (Payload CMS) | Cao |
| 16 | CMS: Product Management | Cao |
| 17 | CMS: Content Management | Trung bình |
| 18 | CMS: Lead Management | Trung bình |
| 19 | CMS: Media Management | Trung bình |
| 20 | CMS: Role-based Access | Trung bình |
| 21 | Data Migration | Cao |
| 22 | Accessibility (WCAG 2.1 AA) | Trung bình |
| 23 | Performance Optimization | Trung bình |
| 24 | Floating Contact Panel (Hotline, Zalo, FB) | Thấp |
| 25 | Newsletter Subscription | Thấp |
| 26 | Google Maps Integration | Thấp |
| 27 | Social Share | Thấp |
| 28 | Brochure Download / Lead Gate | Trung bình |

---

> **Ghi chú:** Tài liệu này được tổng hợp dựa trên phân tích toàn bộ codebase hiện tại và PRD v1.0 của dự án HAMEDCO. Các mục đánh dấu "MỚI" là các trang/chức năng có trong PRD nhưng chưa được triển khai trong codebase hiện tại.
