import Link from "next/link";
import { PHILIPS_PRODUCTS } from "@/data/products";

const categoryMap: Record<string, { label: string; color: string }> = {
  "di-dong": { label: "Di động", color: "teal" },
  "tam-trung": { label: "Tầm trung", color: "orange" },
  "cao-cap": { label: "Cao cấp", color: "green" },
};

export default function AdminProductsPage() {
  const total = PHILIPS_PRODUCTS.length;
  const mobile = PHILIPS_PRODUCTS.filter((p) => p.category === "di-dong").length;
  const mid = PHILIPS_PRODUCTS.filter((p) => p.category === "tam-trung").length;
  const premium = PHILIPS_PRODUCTS.filter((p) => p.category === "cao-cap").length;

  return (
    <>
      {/* Topbar */}
      <div className="admin-topbar">
        <div className="admin-topbar-left">
          <h1>Quản lý Sản phẩm</h1>
          <p>Toàn bộ danh mục thiết bị siêu âm Philips</p>
        </div>
        <div className="admin-topbar-right">
          <span style={{ fontSize: "0.82rem", color: "var(--color-gray-400)" }}>
            Tổng: <strong style={{ color: "var(--color-gray-700)" }}>{total}</strong> thiết bị
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="admin-content">
        {/* Stats */}
        <div className="admin-stats">
          <div className="admin-stat-card">
            <div className="admin-stat-icon blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
            </div>
            <div>
              <div className="admin-stat-value">{total}</div>
              <div className="admin-stat-label">Tổng sản phẩm</div>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </div>
            <div>
              <div className="admin-stat-value">{mobile}</div>
              <div className="admin-stat-label">Di động / POC</div>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon orange">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
            </div>
            <div>
              <div className="admin-stat-value">{mid}</div>
              <div className="admin-stat-label">Tầm trung</div>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
            </div>
            <div>
              <div className="admin-stat-value">{premium}</div>
              <div className="admin-stat-label">Cao cấp</div>
            </div>
          </div>
        </div>

        {/* Table Card */}
        <div className="admin-card">
          <div className="admin-card-header">
            <h2>Danh sách sản phẩm</h2>
          </div>
          <div className="admin-card-body">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Slug</th>
                  <th>Danh mục</th>
                  <th>Features</th>
                  <th style={{ textAlign: "right" }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {PHILIPS_PRODUCTS.map((p: any) => {
                  const cat = categoryMap[p.category] || { label: p.category, color: "gray" };
                  const thumb = p.thumbnail || p.images?.[0] || "";
                  const featureCount = p.features?.length || 0;

                  return (
                    <tr key={p.id}>
                      <td>
                        <div className="product-row-info">
                          {thumb ? (
                            <img src={thumb} alt={p.name} className="product-row-thumb" />
                          ) : (
                            <div className="product-row-thumb" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#ccc", fontSize: "0.7rem" }}>N/A</div>
                          )}
                          <div>
                            <div className="product-row-name">{p.name}</div>
                            <div className="product-row-slug">{p.brand}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.78rem", color: "var(--color-gray-400)" }}>
                          {p.slug}
                        </span>
                      </td>
                      <td>
                        <span className={`admin-badge ${cat.color}`}>{cat.label}</span>
                      </td>
                      <td>
                        <span style={{ fontSize: "0.85rem", color: featureCount > 0 ? "var(--color-gray-700)" : "var(--color-gray-300)" }}>
                          {featureCount > 0 ? `${featureCount} mục` : "—"}
                        </span>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <Link href={`/admin/san-pham/${p.slug}`} className="admin-btn-edit">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                          Chỉnh sửa
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
