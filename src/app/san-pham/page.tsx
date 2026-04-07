import type { Metadata } from "next";
import { PHILIPS_PRODUCTS } from "../../data/products";
import { CATEGORIES } from "../../data/categories";
import ProductFilterWrapper from "./ProductFilterWrapper";

export const metadata: Metadata = {
  title: "Sản phẩm — HAMEDCO | Thiết Bị Y Tế Philips Healthcare",
  description:
    "Danh mục sản phẩm Philips Healthcare chính hãng: siêu âm, chẩn đoán hình ảnh, theo dõi bệnh nhân, giải pháp tin học y tế. HAMEDCO — nhà phân phối chính thức tại Việt Nam.",
};

export default function ProductsPage() {
  // Only pass segment-type categories as filter tabs on the all-products page
  const segmentCategories = CATEGORIES.filter(c => c.type === "segment").map(c => ({
    id: c.id,
    name: c.name,
  }));

  return (
    <>
      <ProductFilterWrapper categories={segmentCategories} products={PHILIPS_PRODUCTS} />
    </>
  );
}
