"use client";

import { useLocale } from "@/components/LocaleProvider";
import ProductFilterWrapper from "./ProductFilterWrapper";
import { getDeviceType } from "@/data/categories";

export default function DeviceCategoryPage({ deviceType }: { deviceType: string }) {
  const { t } = useLocale();
  const category = getDeviceType(deviceType);

  if (!category) {
    return (
      <main className="main-content">
        <section className="section bg-light text-center">
          <div className="container">
            <h1 className="h2">{t("Category not found", "Danh mục không tồn tại")}</h1>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="main-content">
      {/* ═══ CATEGORY HEADER ═══ */}
      <section className="section bg-primary text-white" style={{ padding: "4rem 0" }}>
        <div className="container text-center">
          <h1 className="h1 mb-4" style={{ color: "white" }}>{t(category.name.vi, category.name.en)}</h1>
          <p className="text-large opacity-80 max-w-3xl mx-auto">
            {t(category.description.vi, category.description.en)}
          </p>
        </div>
      </section>

      {/* ═══ FILTER & PRODUCTS ═══ */}
      <section className="section bg-light">
        <div className="container">
          <ProductFilterWrapper initialDeviceType={deviceType} disableDeviceTypeSelect />
        </div>
      </section>
    </main>
  );
}
