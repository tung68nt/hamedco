"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { CATEGORIES } from "@/data/categories";

export default function ClientCategoryPage({ category, products }: { category: any, products: any[] }) {
  const { locale, t } = useLocale();

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-primary-dark)", marginBottom: "0.5rem" }}>
          {t(`Sản phẩm trong ${category.name.vi}`, `Products in ${category.name.en}`)}
        </h2>
        <p style={{ color: "var(--color-neutral)" }}>
          {t(`Hiển thị ${products.length} sản phẩm`, `Showing ${products.length} products`)}
        </p>
      </div>

      <div className="products-grid">
        {products.map((p) => {
          // get the first main category to show as primary badge, or the current category if it's the only one
          const primaryCatId = p.categoryIds?.[0] || category.id;
          const primaryCat = CATEGORIES.find((c) => c.id === primaryCatId);
          const badgeLabel = primaryCat ? ((primaryCat.name as any)[locale] || primaryCat.name.vi) : "";

          return (
            <div 
              className="product-card" 
              key={p.id} 
              style={{ cursor: "pointer", position: "relative" }}
              onClick={() => { window.location.href = `/san-pham/${p.slug}`; }}
            >
              <div className="product-image">
                <img src={p.thumbnail} alt={p.name} loading="lazy" />
                {badgeLabel && <div className="product-badge">{badgeLabel}</div>}
              </div>
              <div className="product-content">
                <div className="product-brand">{p.brand}</div>
                <Link href={`/san-pham/${p.slug}`} className="product-title" style={{ textDecoration: "none", color: "inherit", cursor: "pointer", display: "block", marginTop: "4px" }}>
                  {p.name}
                </Link>
                <p className="product-desc line-clamp-3">{(p.description as any)[locale] || p.description.vi}</p>
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

      {products.length === 0 && (
        <div className="text-center" style={{ padding: "60px 0", color: "var(--color-gray-500)", background: "#fff", borderRadius: "16px", border: "1px dashed #e5e7eb" }}>
          <p style={{ fontSize: "1.125rem" }}>
            {t("Chưa có sản phẩm nào thuộc danh mục này.", "No products found in this category.")}
          </p>
        </div>
      )}
    </>
  );
}
