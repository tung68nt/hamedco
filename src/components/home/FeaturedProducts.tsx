"use client";

import Link from "next/link";
import { ALL_PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { useLocale } from "@/components/LocaleProvider";

export default function FeaturedProducts() {
  const topProducts = ALL_PRODUCTS.slice(0, 6);
  const { locale, t } = useLocale();

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="overline">{t("Sản phẩm nổi bật", "Featured Products")}</span>
          <h2>{t("Giải pháp Siêu âm & Chẩn đoán Hình ảnh Philips", "Philips Ultrasound & Imaging Solutions")}</h2>
          <p>{t(
            "Dẫn đầu kỷ nguyên siêu âm thông minh, Philips mang đến danh mục giải pháp toàn diện, từ thiết bị cầm tay linh hoạt đến các hệ thống chuyên sâu hiệu suất vượt trội, đáp ứng nhu cầu lâm sàng ở mọi cấp độ. Tại Việt Nam, HAMEDCO là nhà phân phối của Philips, đưa hệ sinh thái Connected Care hiện diện rộng khắp tại hàng trăm bệnh viện và cơ sở y tế trên toàn quốc.",
            "Leading the era of intelligent ultrasound, Philips offers a comprehensive portfolio of solutions, from flexible handheld devices to high-performance advanced systems, designed to meet clinical needs at every level. In Vietnam, HAMEDCO is Philips' exclusive distributor, extending the Connected Care ecosystem across hundreds of hospitals and healthcare facilities nationwide."
          )}</p>
        </div>
        <div className="products-grid">
          {topProducts.map((p) => {
            const pCat = p.deviceType ? CATEGORIES.find(c => c.id === p.deviceType) : null;
            const badgeLabel = pCat ? ((pCat.name as any)[locale] || pCat.name.vi) : "";

            return (
            <div 
              className="product-card" 
              key={p.id}
              style={{ cursor: "pointer" }}
              onClick={() => { window.location.href = `/san-pham/${p.slug}`; }}
            >
              <div className="product-image">
                <img src={p.thumbnail} alt={p.name} loading="lazy" />
                {badgeLabel && <div className="product-badge">{badgeLabel}</div>}
              </div>
              <div className="product-content">
                <div className="product-brand" style={{ marginBottom: "4px" }}>{p.brand}</div>
                <Link href={`/san-pham/${p.slug}`} className="product-title" style={{ textDecoration: "none", color: "inherit", cursor: "pointer", display: "block", marginTop: "0" }}>
                  {p.name}
                </Link>
                <p className="product-desc line-clamp-3" style={{ marginTop: "8px" }}>{p.description[locale]}</p>
                <Link 
                  href={`/san-pham/${p.slug}`} 
                  className="product-action"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t("Chi tiết sản phẩm", "View Details")}
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            );
          })}
        </div>
        <div className="text-center" style={{ marginTop: "40px" }}>
          <Link href="/san-pham" className="btn btn-primary btn-lg">{t("Xem tất cả sản phẩm", "View All Products")}</Link>
        </div>
      </div>
    </section>
  );
}
