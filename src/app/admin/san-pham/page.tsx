import Link from "next/link";
import { PHILIPS_PRODUCTS } from "@/data/products";

export default function AdminProductsPage() {
  return (
    <div className="admin-header">
      <h1>Quản lý Sản phẩm ({PHILIPS_PRODUCTS.length})</h1>
      <p>Danh sách các thiết bị y tế hiện có trên hệ thống.</p>

      <div className="admin-card">
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--color-gray-200)" }}>
              <th style={{ padding: "12px", color: "var(--color-gray-500)", fontWeight: 600 }}>Ảnh</th>
              <th style={{ padding: "12px", color: "var(--color-gray-500)", fontWeight: 600 }}>Mã & Tên</th>
              <th style={{ padding: "12px", color: "var(--color-gray-500)", fontWeight: 600 }}>Danh mục</th>
              <th style={{ padding: "12px", color: "var(--color-gray-500)", fontWeight: 600 }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {PHILIPS_PRODUCTS.map((p) => (
              <tr key={p.id} style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
                <td style={{ padding: "12px" }}>
                  <img src={(p as any).image} alt={p.name} style={{ width: "60px", height: "60px", objectFit: "contain", background: "var(--color-gray-50)", borderRadius: "8px" }} />
                </td>
                <td style={{ padding: "12px" }}>
                  <div style={{ fontWeight: 600, color: "var(--color-gray-900)" }}>{(p as any).baseName || p.name}</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-gray-500)" }}>Mã: {(p as any).code || "---"}</div>
                </td>
                <td style={{ padding: "12px" }}>
                  <span className="badge badge-primary">{p.category}</span>
                </td>
                <td style={{ padding: "12px" }}>
                  <Link href={`/admin/san-pham/${p.slug}`} className="btn btn-outline btn-sm">
                    Sửa
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
