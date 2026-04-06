"use client";

import Link from "next/link";
import { useState } from "react";
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
  longDescription?: { vi: string; en: string };
  images: string[];
  thumbnail: string;
  sourceUrl: string;
  videoUrl?: string | null;
  documents?: { label: string; size?: string; url: string }[];
  highlights: { vi: string[]; en: string[] };
  features?: { title: { vi: string; en: string }; desc: { vi: string; en: string }; image?: string }[];
  specifications?: { label: { vi: string; en: string }; value: { vi: string; en: string } }[];
  clinicalImages?: { url: string; caption?: string }[];
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
  
  // Local state for main image gallery
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(product.videoUrl ? true : false);

  const mainImg = product.images[activeImageIndex] || product.thumbnail;

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
            {/* Left — Image & Video */}
            <div className="pd-gallery">
              <div className="pd-image-main" style={{ borderRadius: "16px", overflow: "hidden", position: "relative", marginBottom: "1rem", backgroundColor: "#fff", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid var(--border-color)", aspectRatio: "16/9" }}>
                <span className="pd-category-badge" style={{ position: "absolute", top: "16px", left: "16px", zIndex: 10 }}>{category}</span>
                
                {product.videoUrl && showVideo ? (
                  <div className="pd-video-container" style={{ position: "relative", width: "100%", height: "100%" }}>
                    <iframe 
                      src={product.videoUrl.replace("watch?v=", "embed/")} 
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }} 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                    />
                  </div>
                ) : (
                  <img src={mainImg} alt={title} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                )}
              </div>
              
              {/* Image & Video Thumbnails Gallery */}
              <div className="pd-gallery-thumbnails" style={{ display: "flex", gap: "10px", marginTop: "1rem", flexWrap: "wrap" }}>
                {/* Video Thumbnail (Always first if exists) */}
                {product.videoUrl && (
                  <div 
                    onClick={() => setShowVideo(true)}
                    style={{ 
                      width: "80px", 
                      height: "80px", 
                      borderRadius: "8px", 
                      border: showVideo ? "2px solid var(--color-primary)" : "1px solid var(--border-color)", 
                      cursor: "pointer", 
                      position: "relative",
                      overflow: "hidden",
                      backgroundColor: "#000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: showVideo ? 1 : 0.6,
                      transition: "all 0.2s"
                    }}
                  >
                    <img src={product.thumbnail} alt="Video Preview" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }} />
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Image Thumbnails */}
                {product.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => {
                      setActiveImageIndex(idx);
                      setShowVideo(false);
                    }}
                    style={{ 
                      width: "80px", 
                      height: "80px", 
                      borderRadius: "8px", 
                      border: (!showVideo && activeImageIndex === idx) ? "2px solid var(--color-primary)" : "1px solid var(--border-color)", 
                      cursor: "pointer", 
                      overflow: "hidden",
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: (!showVideo && activeImageIndex === idx) ? 1 : 0.6,
                      transition: "all 0.2s"
                    }}
                  >
                    <img src={img} alt={`${title} - ${idx}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                ))}
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

      {/* ═══ TỔNG QUAN THIẾT KẾ ═══ */}
      {product.longDescription && (
        <section className="pd-overview-section" style={{ padding: "5rem 0", backgroundColor: "#fff" }}>
          <div className="container" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "1.5rem" }}>
              {t("Tổng quan thiết kế", "Design Overview")}
            </h2>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--color-neutral)" }}>
              {product.longDescription[locale]}
            </p>
          </div>
        </section>
      )}

      {/* ═══ TÍNH NĂNG NỔI BẬT (FEATURES) ═══ */}
      {product.features && product.features.length > 0 && (
        <section className="pd-features-section" style={{ padding: "5rem 0", backgroundColor: "#FAFAFA" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--color-text)", textAlign: "center", marginBottom: "4rem" }}>
              {t("Tính năng", "Features")}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
              {product.features.map((feat, i) => {
                const isReverse = i % 2 !== 0;
                return (
                  <div key={i} style={{ 
                    display: "flex", 
                    flexDirection: isReverse ? "row-reverse" : "row", 
                    gap: "4rem", 
                    alignItems: "center",
                    flexWrap: "wrap"
                  }}>
                    {feat.image && (
                      <div style={{ flex: "1 1 400px", borderRadius: "12px", overflow: "hidden" }}>
                        <img src={feat.image} alt={feat.title[locale]} style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }} />
                      </div>
                    )}
                    <div style={{ flex: "1 1 400px" }}>
                      <h3 style={{ fontSize: "2rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "1.25rem" }}>
                        {feat.title[locale]}
                      </h3>
                      <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--color-neutral)" }}>
                        {feat.desc[locale]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══ THÔNG SỐ KỸ THUẬT (SPECIFICATIONS) ═══ */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="pd-specs-section" style={{ padding: "5rem 0", backgroundColor: "#fff", borderTop: "1px solid #EAEAEA", borderBottom: "1px solid #EAEAEA" }}>
          <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "3rem" }}>
              {t("Thông số kỹ thuật", "Specifications")}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", columnGap: "4rem", rowGap: "2.5rem" }}>
              {product.specifications.map((spec, i) => (
                <div key={i} style={{ borderBottom: "1px solid #EAEAEA", paddingBottom: "1rem" }}>
                  <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.5rem" }}>
                    {spec.label[locale]}
                  </h4>
                  <p style={{ fontSize: "1rem", color: "var(--color-neutral)", margin: 0, lineHeight: 1.6 }}>
                    {spec.value[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ TÀI LIỆU SẢN PHẨM (DOCUMENTATION) ═══ */}
      {product.documents && product.documents.length > 0 && (
        <section className="pd-docs-section" style={{ padding: "5rem 0", backgroundColor: "#FAFAFA" }}>
          <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--color-text)", textAlign: "center", marginBottom: "3rem" }}>
              {t("Tài liệu sản phẩm", "Documentation")}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {product.documents.map((doc, i) => (
                <a key={i} href={doc.url} download target="_blank" rel="noopener noreferrer" 
                   style={{
                     display: "flex", alignItems: "center", justifyContent: "space-between",
                     padding: "1.5rem 2rem", backgroundColor: "#fff", 
                     borderRadius: "8px", border: "1px solid #EAEAEA",
                     textDecoration: "none", transition: "all 0.2s",
                     boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                   }}
                >
                  <div>
                    <div style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "0.3rem" }}>
                      {doc.label}
                    </div>
                    <div style={{ fontSize: "0.875rem", color: "var(--color-neutral)" }}>
                      PDF {doc.size ? `| ${doc.size}` : ""}
                    </div>
                  </div>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid var(--color-text)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text)" }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ THƯ VIỆN HÌNH ẢNH LÂM SÀNG (CLINICAL IMAGES) ═══ */}
      {product.clinicalImages && product.clinicalImages.length > 0 && (
        <section className="pd-clinical-section" style={{ padding: "5rem 0", backgroundColor: "#fff" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--color-text)", textAlign: "center", marginBottom: "3rem" }}>
              {t("Thư viện hình ảnh lâm sàng", "Clinical image gallery")}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
              {product.clinicalImages.map((img, i) => (
                <div key={i} style={{ backgroundColor: "#000", borderRadius: "8px", overflow: "hidden", position: "relative", aspectRatio: "4/3", display: "flex", flexDirection: "column" }}>
                  <img src={img.url} alt={img.caption || `Clinical Image ${i}`} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", flex: 1 }} />
                  {img.caption && (
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.8)", color: "#fff", padding: "1rem", fontSize: "0.875rem" }}>
                      {img.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
