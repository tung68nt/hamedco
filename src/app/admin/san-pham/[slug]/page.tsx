import { ALL_PRODUCTS } from "@/data/products";
import ProductEditForm from "./ProductEditForm";
import { redirect } from "next/navigation";

export default async function AdminProductEditPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug) as any;

  if (!product) {
    redirect("/admin/san-pham");
  }

  const thumb = product.thumbnail || product.images?.[0] || "";

  return (
    <>
      {/* Edit Hero Bar */}
      <div className="admin-edit-hero">
        {thumb ? (
          <img src={thumb} alt={product.name} className="admin-edit-thumb" />
        ) : (
          <div className="admin-edit-thumb" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#ccc" }}>N/A</div>
        )}
        <div className="admin-edit-meta">
          <p>
            <a href="/admin/san-pham" style={{ color: "var(--color-primary)", textDecoration: "none", fontSize: "0.8rem", fontWeight: 500 }}>
              ← Quay lại danh sách
            </a>
          </p>
          <h1>{product.name}</h1>
          <p style={{ fontFamily: "var(--font-mono, monospace)" }}>{product.slug}</p>
        </div>
      </div>

      {/* Content */}
      <div className="admin-content">
        <ProductEditForm initialData={product} />
      </div>
    </>
  );
}
