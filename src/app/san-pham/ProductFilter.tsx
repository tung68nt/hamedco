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
  const deviceTypeNames: Record<string, string> = {
    "sieu-am": "Máy siêu âm Philips",
    "ct": "Máy chụp cắt lớp vi tính (CT Scanner)",
    "mri": "Máy chụp cộng hưởng từ (MRI)",
    "x-quang": "Máy X-quang",
  };

  const prefix = deviceTypeNames[product.deviceType] || "";
  
  // Exception cases
  if (product.name.includes("Compact 5300")) {
    return "Máy siêu âm xách tay Philips 5300 Series";
  }
  if (product.name.includes("Compact 5500")) {
    return "Máy siêu âm Xách tay Philips 5500 Series";
  }
  
  // Handle special cases where brand is already in the name
  let modelName = product.name;
  if (modelName.startsWith("Philips ")) {
    modelName = modelName.replace("Philips ", "");
  }
  
  return `${prefix} ${modelName}`;
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

  const hasActiveFilters = activeDevice !== "all" || activePrice !== "all";

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="filter-mobile-toggle">
        <button 
          className="btn btn-outline"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 21V14M4 10V3M12 21V12M12 8V3M20 21V16M20 12V3M1 14h6M9 8h6M17 16h6"/>
          </svg>
          Bộ lọc
          {hasActiveFilters && <span className="filter-badge">•</span>}
        </button>
      </div>

      <div className={`filter-layout ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Sidebar */}
        <aside className="filter-sidebar">
          <div className="sidebar-header">
            <h3>Bộ lọc</h3>
            <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Device Type Filter */}
          {!disableDeviceTypeSelect && (
            <div className="filter-group">
              <h4>{t("Thiết bị", "Thiết bị")}</h4>
              <div className="filter-options">
                <button
                  onClick={() => setActiveDevice("all")}
                  className={`filter-option ${activeDevice === "all" ? "active" : ""}`}
                >
                  <span className="filter-radio"></span>
                  {t("Tất cả", "Tất cả")}
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
            <h4>{t("Phân khúc", "Phân khúc")}</h4>
            <div className="filter-options">
              <button
                onClick={() => setActivePrice("all")}
                className={`filter-option ${activePrice === "all" ? "active" : ""}`}
              >
                <span className="filter-radio"></span>
                {t("Tất cả", "Tất cả")}
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
          {hasActiveFilters && (
            <button className="clear-filters-btn" onClick={clearFilters}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              Xóa bộ lọc
            </button>
          )}
        </aside>

        {/* Main Content */}
        <div className="filter-main">
          {/* Results Info */}
          <div className="filter-results-info">
            <p>
              {t(`Hiển thị ${filteredProducts.length} sản phẩm`, `Hiển thị ${filteredProducts.length} sản phẩm`)}
            </p>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <div 
                key={`${product.id}-${activeDevice}-${activePrice}`} 
                className="product-card fade-in-up"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="product-image">
                  <Image
                    src={product.thumbnail}
                    alt={getProductDisplayName(product)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>
                <div className="product-content">
                  <div className="product-category">
                    {t(
                      DEVICE_TYPES.find((c) => c.id === product.deviceType)?.name.vi || "",
                      DEVICE_TYPES.find((c) => c.id === product.deviceType)?.name.en || ""
                    )}
                  </div>
                  <Link href={`/san-pham/chi-tiet/${product.slug}`} className="product-title">
                    {getProductDisplayName(product)}
                  </Link>
                  <p className="product-desc">
                    {t(product.subtitle.vi, product.subtitle.en)}
                  </p>
                  
                  <div className="product-footer">
                    <Link 
                      href={`/san-pham/chi-tiet/${product.slug}`} 
                      className="product-action"
                    >
                      Xem chi tiết
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredProducts.length === 0 && (
              <div className="product-empty-state" style={{ gridColumn: "1 / -1" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                <h3>{t("Không tìm thấy sản phẩm", "Không tìm thấy sản phẩm")}</h3>
                <p>{t("Vui lòng thay đổi bộ lọc để xem sản phẩm khác.", "Vui lòng thay đổi bộ lọc.")}</p>
                <button className="btn btn-primary" onClick={clearFilters}>
                  Xóa bộ lọc
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
        .filter-badge {
          color: var(--color-primary);
          font-weight: 700;
        }
        .filter-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 2rem;
          align-items: start;
        }
        .filter-sidebar {
          background: white;
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          border: 1px solid var(--color-gray-200);
          position: sticky;
          top: 90px;
        }
        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-gray-100);
        }
        .sidebar-header h3 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-gray-900);
          margin: 0;
        }
        .sidebar-close {
          display: none;
          background: none;
          border: none;
          padding: 0.25rem;
          cursor: pointer;
          color: var(--color-gray-500);
        }
        .filter-group {
          margin-bottom: 1.25rem;
        }
        .filter-group:last-of-type {
          margin-bottom: 1rem;
        }
        .filter-group h4 {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-gray-500);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .filter-options {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .filter-option {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.5rem 0.75rem;
          background: none;
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          text-align: left;
          font-size: 0.875rem;
          color: var(--color-gray-700);
          transition: all 0.15s;
        }
        .filter-option:hover {
          background: var(--color-gray-50);
        }
        .filter-option.active {
          background: rgba(43, 158, 179, 0.1);
          color: var(--color-primary);
          font-weight: 500;
        }
        .filter-radio {
          width: 16px;
          height: 16px;
          border: 2px solid var(--color-gray-300);
          border-radius: 50%;
          flex-shrink: 0;
          transition: all 0.15s;
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
        .clear-filters-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.625rem 1rem;
          background: var(--color-gray-50);
          border: 1px solid var(--color-gray-200);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: 0.875rem;
          color: var(--color-gray-700);
          font-weight: 500;
          transition: all 0.2s;
        }
        .clear-filters-btn:hover {
          background: var(--color-gray-100);
          border-color: var(--color-gray-300);
        }
        .filter-main {
          min-width: 0;
        }
        .filter-results-info {
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-gray-100);
        }
        .filter-results-info p {
          font-size: 0.875rem;
          color: var(--color-gray-600);
          margin: 0;
        }
        .product-category {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }
        .product-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-gray-900);
          text-decoration: none;
          line-height: 1.4;
          display: block;
          margin-bottom: 0.5rem;
        }
        .product-title:hover {
          color: var(--color-primary);
        }
        .product-desc {
          font-size: 0.8125rem;
          color: var(--color-gray-600);
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .product-footer {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-gray-100);
        }
        .product-action {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
        }
        .product-action:hover {
          gap: 0.5rem;
        }
        .product-empty-state {
          padding: 4rem 2rem;
          text-align: center;
          background: #fff;
          border-radius: var(--radius-lg);
          border: 1px dashed var(--color-gray-200);
        }
        .product-empty-state svg {
          margin: 0 auto 1rem;
          color: var(--color-gray-400);
        }
        .product-empty-state h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--color-gray-900);
          margin-bottom: 0.5rem;
        }
        .product-empty-state p {
          font-size: 0.875rem;
          color: var(--color-gray-600);
          margin-bottom: 1.5rem;
        }
        @media (max-width: 1024px) {
          .filter-layout {
            grid-template-columns: 220px 1fr;
            gap: 1.5rem;
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
            width: 280px;
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