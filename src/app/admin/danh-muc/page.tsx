import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

export default function AdminCategoriesPage() {
  const mainCount = CATEGORIES.filter(c => c.type === 'device-type').length;
  const segmentCount = CATEGORIES.filter(c => c.type === 'price-tier').length;

  return (
    <>
      <div className="admin-topbar">
        <div className="admin-topbar-left">
          <h1>Quản lý Danh mục</h1>
          <p>Tổ chức cấu trúc phân loại thiết bị siêu âm</p>
        </div>
        <div className="admin-topbar-right">
          <Link href="/admin/danh-muc/new" className="btn btn-primary">
            + Thêm Danh mục
          </Link>
        </div>
      </div>

      <div className="admin-content">
        <div className="admin-stats" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="admin-stat-card">
            <div className="admin-stat-icon teal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <div>
              <div className="admin-stat-value">{mainCount}</div>
              <div className="admin-stat-label">Danh mục Chính</div>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
            </div>
            <div>
              <div className="admin-stat-value">{segmentCount}</div>
              <div className="admin-stat-label">Phân khúc Nhóm</div>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h2>Hệ thống Phân loại Định tuyến</h2>
          </div>
          <div className="admin-card-body">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Tên danh mục (VI / EN)</th>
                  <th>URL Slug (ID)</th>
                  <th>Loại hình</th>
                  <th style={{ textAlign: "right" }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {CATEGORIES.map((cat: any) => (
                  <tr key={cat.id}>
                    <td>
                      <div>
                        <div style={{ fontWeight: 600, color: "var(--color-gray-800)" }}>{cat.name.vi}</div>
                        <div style={{ fontSize: "0.8rem", color: "var(--color-gray-400)" }}>{cat.name.en}</div>
                      </div>
                    </td>
                    <td>
                      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.8rem", color: "var(--color-primary)", background: "#e0f2fe", padding: "4px 8px", borderRadius: "4px" }}>
                        {cat.slug}
                      </span>
                    </td>
                    <td>
                      <span className={`admin-badge ${cat.type === 'device-type' ? 'teal' : 'gray'}`}>
                        {cat.type === 'device-type' ? 'Chính (Loại Thiết bị)' : 'Phân khúc (Tabs)'}
                      </span>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <Link href={`/admin/danh-muc/${cat.id}`} className="admin-btn-edit">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                        Sửa
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
