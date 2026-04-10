"use client";

import { useLocale } from "@/components/LocaleProvider";
import ProductFilterWrapper from "./ProductFilterWrapper";
import { getDeviceType } from "@/data/categories";
import { MODALITY_INFO } from "@/data/modality-info";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";

export default function DeviceCategoryPage({ deviceType }: { deviceType: string }) {
  const { t, locale } = useLocale();
  const category = getDeviceType(deviceType);
  const info = MODALITY_INFO[deviceType] || null;

  if (!category) {
    return (
      <main className="main-content">
        <section className="section bg-light text-center">
          <div className="container">
            <h1 className="h2">{t("Category not found", "Danh mục không tồn tại")}</h1>
          </div>
        </section>
      </main>
    );
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Trang Chủ",
        "item": "https://hamedco.com.vn"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sản Phẩm",
        "item": "https://hamedco.com.vn/san-pham"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t(category.name.vi, category.name.en),
        "item": `https://hamedco.com.vn/san-pham/${deviceType}`
      }
    ]
  };

  return (
    <main className="main-content">
      <JsonLd data={breadcrumbSchema} />
      {/* ═══ CATEGORY HERO ═══ */}
      <section className="about-banner" style={{ minHeight: "450px" }}>
        <div className="container">
          <div className="breadcrumbs" style={{ paddingTop: 0, paddingBottom: "1.5rem" }}>
            <Link href="/" className="breadcrumb-item">
              Trang Chủ
            </Link>
            <span className="breadcrumb-separator">/</span>
            <Link href="/san-pham" className="breadcrumb-item">
              Sản Phẩm
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{t(category.name.vi, category.name.en)}</span>
          </div>

          <div className="open-letter-layout" style={{ gap: "4rem" }}>
            <div className="about-banner-content">
              <div className="about-banner-badge">
                {t("Giải pháp chuẩn đoán hình ảnh", "Diagnostic Imaging Solutions")}
              </div>
              <h1 className="about-banner-title">
                {info ? t(info.hero.title.vi, info.hero.title.en) : t(category.name.vi, category.name.en)}
              </h1>
              <p className="about-banner-sub" style={{ fontSize: "1.125rem" }}>
                {info ? t(info.hero.subtitle.vi, info.hero.subtitle.en) : t(category.description.vi, category.description.en)}
              </p>
            </div>
            
            <div className="open-letter-img-wrap" style={{ display: info ? 'block' : 'none', aspectRatio: "16/9" }}>
              {info && (
                  <Image 
                    src={info.hero.image} 
                    alt="Thiết bị y tế" 
                    fill
                    style={{ objectFit: 'contain', objectPosition: "center", transform: "scale(1.1)" }}
                    priority
                  />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES BENTO ═══ */}
      {info && info.features && (
        <section className="section bg-white" style={{ paddingBottom: "2rem" }}>
          <div className="container">
            <div className="core-values-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: "-4rem", position: "relative", zIndex: 10 }}>
              {info.features.map((feat: any, idx: number) => (
                <div key={idx} className="core-value-card" style={{ textAlign: "left", padding: "2rem" }}>
                  <div className="core-value-icon" style={{ margin: "0 0 1.5rem 0", background: "var(--color-primary-light)", color: "var(--color-primary-dark)" }}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>{t(feat.title.vi, feat.title.en)}</h3>
                  <p className="core-value-desc">
                    {t(feat.desc.vi, feat.desc.en)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ FILTER & PRODUCTS ═══ */}
      <section className="section bg-light" style={{ borderTop: "1px solid var(--color-gray-200)" }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: "3rem" }}>
            <h2>{t("Khám phá danh mục", "Explore the Portfolio")}</h2>
          </div>
          <ProductFilterWrapper initialDeviceType={deviceType} disableDeviceTypeSelect />
        </div>
      </section>
    </main>
  );
}
