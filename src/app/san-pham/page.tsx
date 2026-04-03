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
  { id: "handheld", label: { vi: "Siêu âm cầm tay", en: "Handheld Ultrasound" } },
  { id: "compact", label: { vi: "Siêu âm compact", en: "Compact Ultrasound" } },
  { id: "poc", label: { vi: "Point-of-Care", en: "Point-of-Care" } },
  { id: "cart", label: { vi: "Siêu âm cart", en: "Cart-based Ultrasound" } },
  { id: "cardiac", label: { vi: "Tim mạch", en: "Cardiac" } },
  { id: "premium", label: { vi: "Cao cấp", en: "Premium" } },
];

export default function ProductsPage() {
  return (
    <>
      <ProductFilterWrapper categories={CATEGORIES} products={PHILIPS_PRODUCTS} />
    </>
  );
}
