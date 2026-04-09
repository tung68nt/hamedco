import type { Metadata } from "next";
import ProductFilterWrapper from "./ProductFilterWrapper";

export const metadata: Metadata = {
  title: "Sản phẩm — HAMEDCO | Thiết Bị Y Tế Philips Healthcare",
  description:
    "Danh mục sản phẩm Philips Healthcare chính hãng: CT Scanner, MRI, X-quang và siêu âm. HAMEDCO — nhà phân phối chính thức tại Việt Nam.",
};

export default function ProductsPage() {
  return (
    <main className="main-content">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <span className="breadcrumb-item">Trang chủ</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Sản phẩm</span>
          </div>
          <h1>Sản phẩm Philips Healthcare</h1>
          <p>
            Danh mục đầy đủ các giải pháp chẩn đoán hình ảnh Philips — từ siêu âm di động đến hệ thống MRI, CT cao cấp.
          </p>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <ProductFilterWrapper />
        </div>
      </section>
    </main>
  );
}
