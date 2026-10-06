"use client";

import { useLocale } from "@/components/LocaleProvider";

export default function CertificationsSection() {
  const { t } = useLocale();

  return (
    <section className="cert-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="overline">{t("Chứng nhận & Tiêu chuẩn", "Certifications & Standards")}</span>
          <h2>{t("TIÊU CHUẨN & CHỨNG NHẬN CHẤT LƯỢNG", "Quality Standards & Certifications")}</h2>
          <p>{t(
            "Sản phẩm đạt chứng nhận quốc tế đảm bảo sự an toàn tuyệt đối và tính pháp lý minh bạch cho mọi dự án y tế.",
            "Products achieve international certifications ensuring absolute safety and transparent legal compliance for all medical projects."
          )}</p>
        </div>
        <div className="cert-grid fade-in-up">
          {[
            { name: "ISO 13485", detail: t("Quản lý chất lượng TBYT", "Medical Devices QMS") },
            { name: t("CFS", "CFS"), detail: t("Giấy chứng nhận lưu hành tự do", "Certificate of Free Sale") },
            { name: "CE", detail: t("Chứng nhận Châu Âu", "European Conformity") },
            { name: t("Giấy phép TTBYT", "Medical Equipment License"), detail: t("Bộ Y tế Việt Nam", "Vietnam Ministry of Health") },
          ].map((cert) => (
            <div className="cert-item" key={cert.name}>
              <div className="cert-icon">
                <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-detail">{cert.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
