"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useLocale } from "../../components/LocaleProvider";
import { ALL_PRODUCTS } from "../../data/products";
import { DEVICE_TYPES, PRICE_TIERS } from "../../data/categories";

interface Props {
  initialDeviceType?: string;
  disableDeviceTypeSelect?: boolean;
}

function getProductDisplayName(product: any): string {
  const deviceTypeNames: Record<string, { prefix: string; brand: string }> = {
    "sieu-am": { prefix: "Máy siêu âm Philips", brand: "Philips" },
    "ct": { prefix: "Máy chụp cắt lớp vi tính (CT Scanner)", brand: "Philips" },
    "mri": { prefix: "Máy chụp cộng hưởng từ (MRI)", brand: "Philips" },
    "x-quang": { prefix: "Máy X-quang", brand: "Philips" },
  };

  const info = deviceTypeNames[product.deviceType] || { prefix: "", brand: "Philips" };
  
  if (product.name.includes("Compact 5300")) {
    return "Máy siêu âm xách tay Philips 5300 Series";
  }
  if (product.name.includes("Compact 5500")) {
    return "Máy siêu âm Xách tay Philips 5500 Series";
  }
  
  let modelName = product.name;
  if (modelName.startsWith("Philips ")) {
    modelName = modelName.replace("Philips ", "");
  }
  
  return `${info.prefix} ${modelName}`;
}

export default function ProductFilter({ initialDeviceType = "all", disableDeviceTypeSelect = false }: Props) {
  const searchParams = useSearchParams();
  const initPrice = searchParams?.get("price") || "all";
  
  const [activeDevice, setActiveDevice] = useState(initialDeviceType);
  const [activePrice, setActivePrice] = useState(initPrice);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const { locale, t } = useLocale();

  useEffect(() => {
    const price = searchParams?.get("price");
    if (price) setActivePrice(price);
  }, [searchParams]);

  useEffect(() => {
    setActiveDevice(initialDeviceType);
  }, [initialDeviceType]);

  const availablePriceTiers = Array.from(new Set(
    ALL_PRODUCTS
      .filter((p) => activeDevice === "all" || p.deviceType === activeDevice)
      .map((p) => p.priceTier)
  ));
  
  const applicablePriceTiers = PRICE_TIERS.filter(tier => availablePriceTiers.includes(tier.id));

  const filteredProducts = ALL_PRODUCTS.filter((p) => {
    const matchDevice = activeDevice === "all" || p.deviceType === activeDevice;
    const matchPrice = activePrice === "all" || p.priceTier === activePrice;
    return matchDevice && matchPrice;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".products-grid .fade-in-up, .filter-results-info.fade-in-up");
      elements.forEach(el => el.classList.add("is-visible"));
    }, 50);
    return () => clearTimeout(timer);
  }, [activeDevice, activePrice, filteredProducts]);

  const clearFilters = () => {
    setActiveDevice(disableDeviceTypeSelect ? initialDeviceType : "all");
    setActivePrice("all");
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="filter-mobile-toggle">
        <button 
          className="btn btn-outline"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Bộ lọc
          <span className="filter-count">({filteredProducts.length})</span>
        </button>
      </div>

      <div className={`filter-layout ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Sidebar */}
        <aside className="filter-sidebar">
          <div className="sidebar-header">
            <h3>Bộ lọc sản phẩm</h3>
            <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Device Type Filter */}
          {!disableDeviceTypeSelect && (
            <div className="filter-group">
              <h4>{t("Thiết bị", "Device")}</h4>
              <div className="filter-options">
                <button
                  onClick={() => setActiveDevice("all")}
                  className={`filter-option ${activeDevice === "all" ? "active" : ""}`}
                >
                  <span className="filter-radio"></span>
                  {t("Tất cả", "All")}
                </button>
                {DEVICE_TYPES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveDevice(cat.id)}
                    className={`filter-option ${activeDevice === cat.id ? "active" : ""}`}
                  >
                    <span className="filter-radio"></span>
                    {t(cat.name.vi, cat.name.en)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Price Tier Filter */}
          <div className="filter-group">
            <h4>{t("Phân khúc", "Price Tier")}</h4>
            <div className="filter-options">
              <button
                onClick={() => setActivePrice("all")}
                className={`filter-option ${activePrice === "all" ? "active" : ""}`}
              >
                <span className="filter-radio"></span>
                {t("Tất cả", "All")}
              </button>
              {applicablePriceTiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setActivePrice(tier.id)}
                  className={`filter-option ${activePrice === tier.id ? "active" : ""}`}
                >
                  <span className="filter-radio"></span>
                  {t(tier.name.vi, tier.name.en)}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button className="btn btn-outline btn-block" onClick={clearFilters}>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            {t("Xóa bộ lọc", "Clear filters")}
          </button>
        </aside>

        {/* Main Content */}
        <div className="filter-main">
          {/* Results Info */}
          <div className="filter-results-info">
            <p>
              {t(`Hiển thị ${filteredProducts.length} sản phẩm`, `Showing ${filteredProducts.length} products`)}
              {activeDevice !== "all" && (
                <span className="active-filter">
                  • {t(DEVICE_TYPES.find(d => d.id === activeDevice)?.name.vi || "", "")}
                </span>
              )}
              {activePrice !== "all" && (
                <span className="active-filter">
                  • {t(PRICE_TIERS.find(p => p.id === activePrice)?.name.vi || "", "")}
                </span>
              )}
            </p>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <div 
                key={`${product.id}-${activeDevice}-${activePrice}`} 
                className="product-card fade-in-up" 
                style={{ transitionDelay: `${index * 0.05}s`, cursor: "pointer" }}
                onClick={() => {
                  window.location.href = `/san-pham/chi-tiet/${product.slug}`;
                }}
              >
                <div className="product-image">
                  <Image
                    src={product.thumbnail}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain", objectPosition: "center", transform: "scale(1.15)" }}
                  />
                  <div className="product-badge">{product.brand}</div>
                </div>
                <div className="product-content">
                  <div className="product-brand">
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
                  <Link href={`/san-pham/chi-tiet/${product.slug}`} className="product-title">
                    {getProductDisplayName(product)}
                  </Link>
                  <p className="product-desc line-clamp-3">
                    {t(product.subtitle.vi, product.subtitle.en)}
                  </p>
                  
                  <ul className="product-highlights">
                    {(locale === "vi" ? product.highlights.vi : product.highlights.en).slice(0, 3).map((hl: string, i: number) => (
                      <li key={i}>
                        <svg width="16" height="16" fill="var(--color-primary)" viewBox="0 0 20 20">
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
              <div className="product-empty-state" style={{ gridColumn: "1 / -1" }}>
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h3>{t("Không tìm thấy sản phẩm", "No products found")}</h3>
                <p>{t("Vui lòng thay đổi tiêu chí bộ lọc.", "Please change filter criteria.")}</p>
                <button className="btn btn-primary" onClick={clearFilters}>
                  {t("Xóa bộ lọc", "Clear filters")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .filter-mobile-toggle {
          display: none;
          margin-bottom: 1.5rem;
        }
        .filter-count {
          background: var(--color-primary);
          color: white;
          padding: 0.125rem 0.5rem;
          border-radius: 99px;
          font-size: 0.75rem;
          margin-left: 0.5rem;
        }
        .filter-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        .filter-sidebar {
          background: white;
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          border: 1px solid var(--color-gray-200);
          position: sticky;
          top: 100px;
        }
        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-gray-100);
        }
        .sidebar-header h3 {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-gray-900);
          margin: 0;
        }
        .sidebar-close {
          display: none;
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          color: var(--color-gray-500);
        }
        .filter-group {
          margin-bottom: 1.5rem;
        }
        .filter-group h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-gray-700);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .filter-options {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .filter-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.625rem 0.75rem;
          background: none;
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          text-align: left;
          font-size: 0.9375rem;
          color: var(--color-gray-700);
          transition: all 0.2s;
        }
        .filter-option:hover {
          background: var(--color-gray-50);
          color: var(--color-gray-900);
        }
        .filter-option.active {
          background: rgba(43, 158, 179, 0.1);
          color: var(--color-primary);
          font-weight: 500;
        }
        .filter-radio {
          width: 18px;
          height: 18px;
          border: 2px solid var(--color-gray-300);
          border-radius: 50%;
          flex-shrink: 0;
          transition: all 0.2s;
          position: relative;
        }
        .filter-option.active .filter-radio {
          border-color: var(--color-primary);
          background: var(--color-primary);
        }
        .filter-option.active .filter-radio::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
        }
        .filter-main {
          min-width: 0;
        }
        .filter-results-info {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-gray-100);
        }
        .filter-results-info p {
          font-size: 0.9375rem;
          color: var(--color-gray-600);
          margin: 0;
        }
        .active-filter {
          color: var(--color-primary);
          font-weight: 500;
        }
        .product-highlights {
          list-style: none;
          padding: 0;
          margin: 1rem 0 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .product-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--color-neutral);
        }
        .product-highlights svg {
          flex-shrink: 0;
          margin-top: 2px;
        }
        .product-empty-state {
          padding: 4rem 2rem;
          text-align: center;
          background: #fff;
          border-radius: 1rem;
          border: 1px dashed rgba(0,0,0,0.1);
        }
        .product-empty-state svg {
          margin: 0 auto 1rem;
          color: var(--color-neutral-light);
        }
        .product-empty-state h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-neutral-dark);
          margin-bottom: 0.5rem;
        }
        .product-empty-state p {
          color: var(--color-neutral);
          margin-bottom: 1.5rem;
        }
        @media (max-width: 1024px) {
          .filter-layout {
            grid-template-columns: 240px 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 768px) {
          .filter-mobile-toggle {
            display: block;
          }
          .filter-layout {
            grid-template-columns: 1fr;
          }
          .filter-sidebar {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: 300px;
            z-index: 1000;
            border-radius: 0;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            overflow-y: auto;
          }
          .filter-layout.sidebar-open .filter-sidebar {
            transform: translateX(0);
          }
          .filter-layout.sidebar-open::before {
            content: "";
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 999;
          }
          .sidebar-close {
            display: block;
          }
        }
      `}</style>
    </>
  );
}