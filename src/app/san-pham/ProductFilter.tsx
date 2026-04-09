"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLocale } from "../../components/LocaleProvider";
import { ALL_PRODUCTS } from "../../data/products";
import { DEVICE_TYPES, PRICE_TIERS } from "../../data/categories";

interface Props {
  initialDeviceType?: string;
  disableDeviceTypeSelect?: boolean;
}

export default function ProductFilter({ initialDeviceType = "all", disableDeviceTypeSelect = false }: Props) {
  const searchParams = useSearchParams();
  const initPrice = searchParams?.get("price") || "all";
  
  // States for filtering
  const [activeDevice, setActiveDevice] = useState(initialDeviceType);
  const [activePrice, setActivePrice] = useState(initPrice);
  
  const { locale, t } = useLocale();

  useEffect(() => {
    const price = searchParams?.get("price");
    if (price) setActivePrice(price);
  }, [searchParams]);

  // Derived filtered products
  const filteredProducts = ALL_PRODUCTS.filter((p) => {
    const matchDevice = activeDevice === "all" || p.deviceType === activeDevice;
    const matchPrice = activePrice === "all" || p.priceTier === activePrice;
    return matchDevice && matchPrice;
  });

  return (
    <>
      {/* ═══ FILTER CONTROLS ═══ */}
      <div className="filter-bar fade-in-up" style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        marginBottom: "2.5rem"
      }}>
        {/* Device Type Filter (Only show if not disabled) */}
        {!disableDeviceTypeSelect && (
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-neutral-dark)", width: "100px" }}>
              {t("Thiết bị:", "Device Type:")}
            </span>
            <div style={{ display: "flex", gap: "0.25rem", overflowX: "auto" }}>
              <button
                onClick={() => setActiveDevice("all")}
                className={`btn btn-sm ${activeDevice === "all" ? "btn-primary" : "btn-outline"}`}
                style={{ borderRadius: "99px" }}
              >
                {t("Tất cả", "All")}
              </button>
              {DEVICE_TYPES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveDevice(cat.id)}
                  className={`btn btn-sm ${activeDevice === cat.id ? "btn-primary" : "btn-outline"}`}
                  style={{ borderRadius: "99px" }}
                >
                  {t(cat.name.vi, cat.name.en)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price Tier Filter */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-neutral-dark)", width: "100px" }}>
            {t("Phân khúc:", "Price Tier:")}
          </span>
          <div style={{ display: "flex", gap: "0.25rem", overflowX: "auto" }}>
            <button
              onClick={() => setActivePrice("all")}
              className={`btn btn-sm ${activePrice === "all" ? "btn-primary" : "btn-outline"}`}
              style={{ borderRadius: "99px" }}
            >
              {t("Tất cả", "All")}
            </button>
            {PRICE_TIERS.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActivePrice(tier.id)}
                className={`btn btn-sm ${activePrice === tier.id ? "btn-primary" : "btn-outline"}`}
                style={{ borderRadius: "99px" }}
              >
                {t(tier.name.vi, tier.name.en)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ RESULTS INFO ═══ */}
      <div className="filter-results-info fade-in-up" style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "0.875rem", color: "var(--color-neutral)" }}>
          {t(`Hiển thị ${filteredProducts.length} sản phẩm`, `Showing ${filteredProducts.length} products`)}
        </p>
      </div>

      {/* ═══ PRODUCT GRID ═══ */}
      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <div 
            key={product.id} 
            className="product-card fade-in-up" 
            style={{ animationDelay: `${index * 0.05}s`, cursor: "pointer" }}
            onClick={() => {
              window.location.href = `/san-pham/chi-tiet/${product.slug}`;
            }}
          >
            <div className="product-image" style={{ overflow: "hidden", position: "relative" }}>
              <img
                src={product.thumbnail}
                alt={product.name}
                loading="lazy"
                style={{ objectFit: "contain", width: "100%", height: "100%", objectPosition: "center", transform: "scale(1.15)" }}
              />
              <div className="product-badge">{product.brand}</div>
            </div>
            <div className="product-content">
              <div className="product-brand" style={{ marginBottom: "4px" }}>
                {t(
                  DEVICE_TYPES.find((c) => c.id === product.deviceType)?.name.vi || "",
                  DEVICE_TYPES.find((c) => c.id === product.deviceType)?.name.en || ""
                )}{" "}
                •{" "}
                {t(
                  PRICE_TIERS.find((c) => c.id === product.priceTier)?.name.vi || "",
                  PRICE_TIERS.find((c) => c.id === product.priceTier)?.name.en || ""
                )}
              </div>
              <Link href={`/san-pham/chi-tiet/${product.slug}`} className="product-title" style={{ textDecoration: "none", color: "inherit", cursor: "pointer", display: "block", marginTop: "0" }}>
                {product.name}
              </Link>
              <p className="product-desc line-clamp-3" style={{ marginTop: "8px" }}>
                {t(product.subtitle.vi, product.subtitle.en)}
              </p>
              
              <ul style={{ 
                listStyle: "none", 
                padding: 0, 
                margin: "1rem 0 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
              }}>
                {(locale === "vi" ? product.highlights.vi : product.highlights.en).slice(0, 3).map((hl: string, i: number) => (
                  <li key={i} style={{ 
                    fontSize: "0.875rem", 
                    color: "var(--color-neutral)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem"
                  }}>
                    <svg width="16" height="16" fill="var(--color-primary)" viewBox="0 0 20 20" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {hl}
                  </li>
                ))}
              </ul>
              
              <Link 
                href={`/san-pham/chi-tiet/${product.slug}`} 
                className="product-action"
                onClick={(e) => e.stopPropagation()}
              >
                {t("Xem chi tiết", "View Details")}
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
        
        {filteredProducts.length === 0 && (
          <div className="product-empty-state" style={{ 
            gridColumn: "1 / -1", 
            padding: "4rem 2rem", 
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: "1rem",
            border: "1px dashed rgba(0,0,0,0.1)"
          }}>
            <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ margin: "0 auto 1rem", color: "var(--color-neutral-light)" }}>
              <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-neutral-dark)", marginBottom: "0.5rem" }}>
              {t("Không tìm thấy sản phẩm", "No products found")}
            </h3>
            <p style={{ color: "var(--color-neutral)", marginBottom: "1.5rem" }}>
              {t("Vui lòng thay đổi tiêu chí bộ lọc để xem các sản phẩm khác.", "Please change your filter criteria to see other products.")}
            </p>
            <button 
              onClick={() => { setActiveDevice("all"); setActivePrice("all"); }}
              className="btn btn-primary"
            >
              {t("Xóa bộ lọc", "Clear filters")}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
