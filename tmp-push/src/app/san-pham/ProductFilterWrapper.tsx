"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useLocale } from "../../components/LocaleProvider";
import ProductFilter from "./ProductFilter";

interface Props {
  initialDeviceType?: string;
  disableDeviceTypeSelect?: boolean;
}

export default function ProductFilterWrapper({ initialDeviceType, disableDeviceTypeSelect }: Props) {
  const { t } = useLocale();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductFilter initialDeviceType={initialDeviceType} disableDeviceTypeSelect={disableDeviceTypeSelect} />
      </Suspense>

      {!disableDeviceTypeSelect && (
        <section className="cta-section section" style={{ marginTop: "4rem" }}>
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
      )}
    </>
  );
}
