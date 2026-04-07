"use client";

import { useLocale } from "../LocaleProvider";

/**
 * VisionMissionValues — Tầm nhìn, Sứ mệnh & Giá trị cốt lõi (Light theme)
 */
export default function VisionMissionValues() {
  const { t } = useLocale();

  const coreValues = [
    {
      key: "TÍN",
      label: "Trust",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 11l3 3 5-5m-4-8s-6 2.5-6 9.5c0 3.5 2.5 6.5 6 8.5 3.5-2 6-5 6-8.5C18 5.5 12 3 12 3z" />
        </svg>
      ),
      desc: {
        vi: "Đặt chữ Tín lên hàng đầu trong mọi cam kết với đối tác, nhà thầu và bệnh viện.",
        en: "Putting Trust first in all commitments with partners, contractors and hospitals."
      }
    },
    {
      key: "TÂM",
      label: "Heart",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      desc: {
        vi: "Phụng sự cộng đồng bằng cái tâm của những người làm nghề y sinh.",
        en: "Serving the community with the heart of those dedicated to healthcare."
      }
    },
    {
      key: "CHẤT",
      label: "Quality",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      desc: {
        vi: "Khắt khe trong lựa chọn, chỉ cung cấp những sản phẩm đạt chuẩn quốc tế (CE, ISO).",
        en: "Strict in selection, only providing products meeting international standards (CE, ISO)."
      }
    },
    {
      key: "TỐC",
      label: "Speed",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      desc: {
        vi: "Phản ứng nhanh nhạy, hỗ trợ kỹ thuật kịp thời 24/7 để đảm bảo thiết bị vận hành liên tục.",
        en: "Rapid response, timely 24/7 technical support to ensure continuous equipment operation."
      }
    }
  ];

  return (
    <section className="vmv-section section bg-white">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <span className="overline overline-brand">{t("Định hướng chiến lược", "Strategic Direction")}</span>
          <h2>{t("Tầm nhìn – Sứ mệnh – Giá trị cốt lõi", "Vision – Mission – Core Values")}</h2>
        </div>

        {/* Vision & Mission */}
        <div className="vmv-cards fade-in-up stagger-1">
          <div className="vmv-card vmv-vision">
            <div className="vmv-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3>{t("Tầm nhìn", "Vision")}</h3>
            <p>
              {t(
                "Trở thành tập đoàn giải pháp y tế đa ngành hàng đầu, định hình tiêu chuẩn mới về dịch vụ cung ứng và bảo trì trang thiết bị y tế tại Việt Nam và khu vực.",
                "To become a leading multi-sector healthcare solutions group, setting new standards in medical equipment supply and maintenance services in Vietnam and the region."
              )}
            </p>
          </div>

          <div className="vmv-card vmv-mission">
            <div className="vmv-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10l6-3m0 13l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4" />
              </svg>
            </div>
            <h3>{t("Sứ mệnh", "Mission")}</h3>
            <p>
              {t(
                "Mang công nghệ y tế hiện đại nhất thế giới đến gần hơn với người dân Việt Nam, tối ưu hóa hiệu quả chẩn đoán, điều trị và nâng cao năng lực vận hành cho các cơ sở y tế.",
                "Bringing the world's most modern medical technology closer to Vietnamese people, optimizing diagnostic and treatment effectiveness and enhancing operational capacity for healthcare facilities."
              )}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="section-header text-center fade-in-up" style={{ marginTop: "64px" }}>
          <span className="overline overline-brand">{t("Triết lý vận hành", "Operational Philosophy")}</span>
          <h3>{t("Giá trị cốt lõi", "Core Values")}</h3>
        </div>

        <div className="core-values-grid fade-in-up stagger-2">
          {coreValues.map((val, idx) => (
            <div className="core-value-card" key={val.key} style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="core-value-icon">{val.icon}</div>
              <div className="core-value-key">
                <span className="core-value-vi">{val.key}</span>
                <span className="core-value-en">({val.label})</span>
              </div>
              <p className="core-value-desc">{val.desc.vi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
