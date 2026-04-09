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
                <Link href="/bao-gia" className="btn btn-accent btn-xl" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
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
