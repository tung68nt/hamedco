"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="admin-wrapper">
      <aside className="admin-sidebar">
        <Link href="/admin/san-pham" className="brand">
          HAMEDCO CMS
        </Link>

        <div className="nav-group">
          <div className="nav-group-title">Danh mục Quản trị</div>
          <div className="sidebar-nav">
            <Link
              href="/admin/san-pham"
              className={pathname?.includes("/admin/san-pham") ? "active" : ""}
            >
              Quản lý Sản phẩm
            </Link>
            <Link
              href="#"
              className={pathname === "/admin/tin-tuc" ? "active" : ""}
            >
              Tin tức & Blog
            </Link>
            <Link
              href="#"
              className={pathname === "/admin/cai-dat" ? "active" : ""}
            >
              Cấu hình chung
            </Link>
          </div>
        </div>
      </aside>

      <main className="admin-main">
        {children}
      </main>
    </div>
  );
}
