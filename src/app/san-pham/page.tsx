import type { Metadata } from "next";
import Link from "next/link";
import { PHILIPS_PRODUCTS } from "../../data/products";
import ProductFilterWrapper from "./ProductFilterWrapper";

export const metadata: Metadata = {
  title: "Sản phẩm — HAMEDCO | Thiết Bị Y Tế Philips Healthcare",
  description:
    "Danh mục sản phẩm Philips Healthcare chính hãng: siêu âm, chẩn đoán hình ảnh, theo dõi bệnh nhân, giải pháp tin học y tế. HAMEDCO — nhà phân phối chính thức tại Việt Nam.",
};

// Product categories for filtering
const CATEGORIES = [
  { id: "all", label: { vi: "Tất cả", en: "All" } },
  { id: "di-dong", label: { vi: "Siêu âm di động", en: "Portable Ultrasound" } },
  { id: "tam-trung", label: { vi: "Phân khúc Tầm trung", en: "Mid-range Segment" } },
  { id: "cao-cap", label: { vi: "Phân khúc Cao cấp", en: "Premium Segment" } },
];

export default function ProductsPage() {
  return (
    <>
      <ProductFilterWrapper categories={CATEGORIES} products={PHILIPS_PRODUCTS} />
    </>
  );
}
