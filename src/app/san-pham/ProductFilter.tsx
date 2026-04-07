"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLocale } from "../../components/LocaleProvider";

interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: { vi: string; en: string };
  categoryIds?: string[];
  brand: string;
  description: { vi: string; en: string };
  thumbnail: string;
  highlights: { vi: string[]; en: string[] };
}

interface Category {
  id: string;
  name: { vi: string; en: string };
}

interface Props {
  categories: Category[];
  products: Product[];
}

function ProductFilterInner({ categories, products }: Props) {
  const searchParams = useSearchParams();
  const initCat = searchParams?.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initCat);
  const { locale, t } = useLocale();

  useEffect(() => {
    const cat = searchParams?.get("category");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.categoryIds?.includes(activeCategory));

  return (
    <>
      <div className="filter-bar fade-in-up" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "2.5rem"
      }}>
        <div style={{
          display: "flex",
          gap: "0.25rem",
          overflowX: "auto",
          paddingBottom: "8px",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }} className="hide-scrollbar">
          <button
            onClick={() => setActiveCategory("all")}
            style={{
              padding: "0.625rem 1.25rem",
              borderRadius: "99px",
              whiteSpace: "nowrap",
              fontWeight: activeCategory === "all" ? 600 : 500,
              fontSize: "0.9375rem",
              color: activeCategory === "all" ? "var(--color-primary)" : "var(--color-neutral)",
              backgroundColor: activeCategory === "all" ? "#fff" : "transparent",
              boxShadow: activeCategory === "all" ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {t("Tất cả", "All")}
          </button>
          
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "0.625rem 1.25rem",
                  borderRadius: "99px",
                  whiteSpace: "nowrap",
                  fontWeight: isActive ? 600 : 500,
                  fontSize: "0.9375rem",
                  color: isActive ? "var(--color-primary)" : "var(--color-neutral)",
                  backgroundColor: isActive ? "#fff" : "transparent",
                  boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {(cat.name as any)[locale] || cat.name.vi}
              </button>
            );
          })}
        </div>
        <div className="body-sm" style={{ color: "var(--color-neutral)", whiteSpace: "nowrap", fontSize: "0.9375rem" }}>
          {t(`Hiển thị ${filtered.length} sản phẩm`, `Showing ${filtered.length} products`)}
        </div>
      </div>

      <div className="products-grid">
        {filtered.map((p) => {
          const primaryCatId = p.categoryIds?.[0];
          const primaryCat = primaryCatId ? categories.find(c => c.id === primaryCatId) : null;
          const badgeLabel = primaryCat ? ((primaryCat.name as any)[locale] || primaryCat.name.vi) : "";

          return (
            <div 
              className="product-card" 
              key={p.id} 
              style={{ cursor: "pointer", position: "relative" }}
              onClick={(e) => {
                window.location.href = `/san-pham/${p.slug}`;
              }}
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

      {filtered.length === 0 && (
        <div className="text-center" style={{ padding: "60px 0", color: "var(--color-gray-500)" }}>
          <p style={{ fontSize: "1.125rem" }}>
            {t("Không tìm thấy sản phẩm trong danh mục này.", "No products found in this category.")}
          </p>
        </div>
      )}
    </>
  );
}

export default function ProductFilter(props: Props) {
  return (
    <Suspense fallback={<div>Loading filters...</div>}>
      <ProductFilterInner {...props} />
    </Suspense>
  );
}
