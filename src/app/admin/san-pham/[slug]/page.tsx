import { PHILIPS_PRODUCTS } from "@/data/products";
import ProductEditForm from "./ProductEditForm";
import { redirect } from "next/navigation";

export default function AdminProductEditPage({ params }: { params: { slug: string } }) {
  const product = PHILIPS_PRODUCTS.find((p) => p.slug === params.slug);
  
  if (!product) {
    redirect("/admin/san-pham");
  }

  return (
    <div className="admin-header">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ margin: 0, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>
            <a href="/admin/san-pham" style={{ color: "var(--color-primary)", textDecoration: "none" }}>&larr; Quay lại danh sách</a>
          </p>
          <h1 style={{ marginTop: "16px" }}>Chỉnh sửa: {(product as any).baseName || product.name}</h1>
        </div>
      </div>
      
      {/* Client Component Form */}
      <ProductEditForm initialData={product} />
    </div>
  );
}
