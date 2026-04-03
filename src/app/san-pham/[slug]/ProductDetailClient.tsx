"use client";

import Link from "next/link";
import { useLocale } from "../../../components/LocaleProvider";

interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: { vi: string; en: string };
  category: string;
  categoryLabel: { vi: string; en: string };
  brand: string;
  description: { vi: string; en: string };
  images: string[];
  thumbnail: string;
  sourceUrl: string;
  highlights: { vi: string[]; en: string[] };
}

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetailClient({ product, related }: Props) {
  const { locale, t } = useLocale();

  const title = product.name;
  const subtitle = product.subtitle[locale];
  const desc = product.description[locale];
  const category = product.categoryLabel[locale];
  const highlights = product.highlights[locale];
  const mainImg = product.images[0] || product.thumbnail;

  return (
    <>
      {/* ═══ BREADCRUMB BAR ═══ */}
      <div className="pd-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-item">
              {t("Trang chủ", "Home")}
            </Link>
            <span className="breadcrumb-separator">/</span>
            <Link href="/san-pham" className="breadcrumb-item">
              {t("Sản phẩm", "Products")}
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{title}</span>
          </nav>
        </div>
      </div>

      {/* ═══ PRODUCT HERO ═══ */}
      <section className="pd-hero">
        <div className="container">
          <div className="pd-hero-grid">
            {/* Left — Image */}
            <div className="pd-gallery">
              <div className="pd-image-main">
                <span className="pd-category-badge">{category}</span>
                <img src={mainImg} alt={title} />
              </div>
            </div>

            {/* Right — Info */}
            <div className="pd-info">
              <div className="pd-brand">{product.brand}</div>
              <h1 className="pd-title">{title}</h1>
              <p className="pd-subtitle">{subtitle}</p>

              <div className="pd-divider" />

              <p className="pd-description">{desc}</p>

              <div className="pd-highlights">
                <h3 className="pd-highlights-title">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t("Điểm nổi bật", "Key Features")}
                </h3>
                <ul className="pd-highlights-list">
                  {highlights.map((h: string, i: number) => (
                    <li key={i}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pd-actions">
                <Link href="/bao-gia" className="btn btn-primary btn-lg pd-btn-quote">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t("Yêu cầu báo giá", "Request Quote")}
                </Link>
                <Link href="/lien-he" className="btn btn-outline btn-lg pd-btn-contact">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t("Liên hệ tư vấn", "Contact Us")}
                </Link>
              </div>

              {/* Trust badges */}
              <div className="pd-trust">
                <div className="pd-trust-item">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {t("Chính hãng 100%", "100% Authentic")}
                </div>
                <div className="pd-trust-item">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t("Bảo hành 12–24 tháng", "12–24 Month Warranty")}
                </div>
                <div className="pd-trust-item">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  {t("Hỗ trợ kỹ thuật 24/7", "24/7 Support")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOURCE LINK ═══ */}
      <section className="pd-source-section">
        <div className="container">
          <a
            href={product.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pd-source-link"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {t("Xem trên trang chính hãng Philips", "View on official Philips website")}
            <span className="pd-source-arrow">→</span>
          </a>
        </div>
      </section>

      {/* ═══ RELATED PRODUCTS ═══ */}
      {related.length > 0 && (
        <section className="pd-related section">
          <div className="container">
            <div className="section-label">{t("SẢN PHẨM LIÊN QUAN", "RELATED PRODUCTS")}</div>
            <h2 className="pd-related-title">
              {t("Khám phá thêm giải pháp Philips", "Explore more Philips solutions")}
            </h2>
            <div className="products-grid">
              {related.map((p) => (
                <div className="product-card fade-in-up" key={p.id}>
                  <div className="product-image">
                    <img src={p.thumbnail} alt={p.name} loading="lazy" />
                    <div className="product-badge">{p.categoryLabel[locale]}</div>
                  </div>
                  <div className="product-content">
                    <div className="product-brand">{p.brand}</div>
                    <h3 className="product-title">{p.name}</h3>
                    <p className="product-desc line-clamp-2">{p.description[locale]}</p>
                    <Link href={`/san-pham/${p.slug}`} className="product-action">
                      {t("Chi tiết sản phẩm", "View Details")}
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ CTA ═══ */}
      <section className="cta-section section">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="fade-in-up">
            <h2 style={{ color: "var(--color-white)", marginBottom: "16px" }}>
              {t("Sẵn sàng nâng cấp thiết bị y tế?", "Ready to upgrade your medical equipment?")}
            </h2>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: "1.125rem", maxWidth: "560px", margin: "0 auto 32px" }}>
              {t(
                "Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết từ đội ngũ chuyên gia HAMEDCO.",
                "Contact us now for a free consultation and detailed quote from our HAMEDCO expert team."
              )}
            </p>
            <div className="flex gap-4" style={{ justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/bao-gia" className="btn btn-accent btn-xl">
                {t("Yêu cầu báo giá", "Request Quote")}
              </Link>
              <a href="tel:+84869009486" className="btn btn-outline-white btn-xl">📞 086 900 9486</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
