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
      <div className="filter-bar fade-in-up">
        <div className="tabs" style={{ borderBottom: "none" }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab${activeCategory === cat.id ? " active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label[locale] || cat.label.vi}
            </button>
          ))}
        </div>
        <div className="body-sm text-gray">
          {t(`Hiển thị ${filtered.length} sản phẩm`, `Showing ${filtered.length} products`)}
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filtered.map((p) => (
          <div className="product-card fade-in-up" key={p.id}>
            <div className="product-image">
              <img src={p.thumbnail} alt={p.name} loading="lazy" />
              <div className="product-badge">{(p.categoryLabel as any)[locale] || p.categoryLabel.vi}</div>
            </div>
            <div className="product-content">
              <div className="product-brand">{p.brand}</div>
              <h3 className="product-title">{p.name}</h3>
              <p className="product-desc line-clamp-3">{(p.description as any)[locale] || p.description.vi}</p>
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
