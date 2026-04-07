"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "../../components/LocaleProvider";

interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: { vi: string; en: string };
  category: string;
  categoryLabel: { vi: string; en: string };
  brand: string;
  description: { vi: string; en: string };
  thumbnail: string;
  highlights: { vi: string[]; en: string[] };
}

interface Category {
  id: string;
  label: { vi: string; en: string };
}

interface Props {
  categories: Category[];
  products: Product[];
}

export default function ProductFilter({ categories, products }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  const { locale, t } = useLocale();

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Filter Bar */}
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
                {cat.label[locale] || cat.label.vi}
              </button>
            );
          })}
        </div>
        <div className="body-sm" style={{ color: "var(--color-neutral)", whiteSpace: "nowrap", fontSize: "0.9375rem" }}>
          {t(`Hiển thị ${filtered.length} sản phẩm`, `Showing ${filtered.length} products`)}
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filtered.map((p) => (
          <div 
            className="product-card fade-in-up" 
            key={p.id} 
            style={{ cursor: "pointer", position: "relative" }}
            onClick={(e) => {
              window.location.href = `/san-pham/${p.slug}`;
            }}
          >
            <div className="product-image">
              <img src={p.thumbnail} alt={p.name} loading="lazy" />
              <div className="product-badge">{(p.categoryLabel as any)[locale] || p.categoryLabel.vi}</div>
            </div>
            <div className="product-content">
              <div className="product-brand">{p.brand}</div>
              <Link href={`/san-pham/${p.slug}`} className="product-title" style={{ textDecoration: "none", color: "inherit", cursor: "pointer", display: "inline-block" }}>
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
        ))}
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
