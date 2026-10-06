import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import CategoryEditForm from "./CategoryEditForm";

export default async function AdminCategoryEditPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const isNew = slug === "new";
  const catData = isNew
    ? {
        id: "",
        slug: "",
        name: { vi: "", en: "" },
        description: { vi: "", en: "" },
        type: "segment",
      }
    : CATEGORIES.find((c) => c.id === slug);

  if (!catData) {
    return (
      <div className="admin-content" style={{ padding: "40px", textAlign: "center" }}>
        <h2>Không tìm thấy Danh mục</h2>
        <Link href="/admin/danh-muc" className="btn btn-primary" style={{ marginTop: "20px" }}>Quay lại</Link>
      </div>
    );
  }

  return (
    <>
      <div className="admin-hero">
        <div className="admin-hero-content">
          <Link href="/admin/danh-muc" className="admin-back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Quay lại quản lý danh mục
          </Link>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
            <div className="admin-hero-thumb">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <div className="admin-hero-text">
              <h1>{isNew ? "Tạo danh mục mới" : catData.name.vi}</h1>
              <p>{isNew ? "Định nghĩa một nhóm sản phẩm hoặc phân khúc mới" : catData.slug}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="admin-content" style={{ maxWidth: "1000px", marginTop: "-30px", position: "relative", zIndex: 10 }}>
        <div className="admin-form-container">
          <CategoryEditForm initialData={catData} isNew={isNew} />
        </div>
      </div>
    </>
  );
}
