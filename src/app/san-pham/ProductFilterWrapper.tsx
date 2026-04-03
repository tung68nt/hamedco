"use client";

import Link from "next/link";
import { useLocale } from "../../components/LocaleProvider";
import ProductFilter from "./ProductFilter";

interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: { vi: string; en: string };
  category: string;
  categoryLabel: { vi: string; en: string };
  brand: string;
  description: { vi: string; en: string };
  thumbnail: string;
  highlights: { vi: string[]; en: string[] };
}

interface Category {
  id: string;
  label: { vi: string; en: string };
}

interface Props {
  categories: Category[];
  products: Product[];
}

export default function ProductFilterWrapper({ categories, products }: Props) {
  const { t } = useLocale();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/" className="breadcrumb-item">
              {t("Trang chủ", "Home")}
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">
              {t("Sản phẩm", "Products")}
            </span>
          </div>
          <h1>{t("Sản phẩm Philips Healthcare", "Philips Healthcare Products")}</h1>
          <p>
            {t(
              "Danh mục đầy đủ các giải pháp siêu âm và chẩn đoán hình ảnh Philips — từ thiết bị cầm tay đến hệ thống cao cấp",
              "A complete portfolio of Philips ultrasound and diagnostic imaging solutions — from handheld devices to premium systems"
            )}
          </p>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <ProductFilter categories={categories} products={products} />
        </div>
      </section>

      <section className="cta-section section">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="fade-in-up">
            <h2 style={{ color: "var(--color-white)", marginBottom: "16px" }}>
              {t("Cần tư vấn chọn thiết bị phù hợp?", "Need help choosing the right equipment?")}
            </h2>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: "1.125rem", maxWidth: "560px", margin: "0 auto 32px" }}>
              {t(
                "Đội ngũ chuyên gia HAMEDCO sẵn sàng phân tích nhu cầu và đề xuất giải pháp tối ưu cho cơ sở y tế của bạn.",
                "HAMEDCO expert team is ready to analyze your needs and propose the optimal solution for your medical facility."
              )}
            </p>
            <div className="flex gap-4" style={{ justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/bao-gia" className="btn btn-accent btn-xl">
                {t("Yêu cầu báo giá", "Request Quote")}
              </Link>
              <a href="tel:+84869009486" className="btn btn-outline-white btn-xl">📞 086 900 9486</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
