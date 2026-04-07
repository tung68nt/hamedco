"use client";

import { useLocale } from "../LocaleProvider";

/**
 * CorporateCulture — Văn hoá doanh nghiệp
 */
export default function CorporateCulture() {
  const { t } = useLocale();

  const cultures = [
    {
      keyword: { vi: "CHUYÊN NGHIỆP", en: "PROFESSIONAL" },
      desc: {
        vi: "trong từng hành động, chuẩn mực trong từng quy trình.",
        en: "in every action, standardized in every process."
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      keyword: { vi: "TRÁCH NHIỆM", en: "RESPONSIBLE" },
      desc: {
        vi: "với từng thiết bị, từng dự án và từng bệnh nhân gián tiếp phục vụ.",
        en: "for every device, every project and every patient indirectly served."
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      keyword: { vi: "HỌC HỎI", en: "LEARNING" },
      desc: {
        vi: "không ngừng để nâng cao năng lực chuyên môn và cập nhật công nghệ y khoa.",
        en: "continuously to improve professional capabilities and update medical technology."
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      keyword: { vi: "ĐỒNG ĐỘI", en: "TEAMWORK" },
      desc: {
        vi: "gắn kết, hỗ trợ và cùng hướng tới mục tiêu chung.",
        en: "connected, supportive and working together toward common goals."
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      keyword: { vi: "CHÍNH TRỰC", en: "INTEGRITY" },
      desc: {
        vi: "trong mọi cam kết với khách hàng và đối tác.",
        en: "in all commitments with customers and partners."
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    }
  ];

  return (
    <section className="culture-section section bg-gray-50">
      <div className="container">
        <div className="culture-layout">
          {/* Left info */}
          <div className="culture-intro fade-in-up">
            <span className="overline">{t("DNA của HAMEDCO", "HAMEDCO's DNA")}</span>
            <h2>{t("Văn hoá doanh nghiệp", "Corporate Culture")}</h2>
            <p className="body-lg">
              {t(
                "Văn hóa doanh nghiệp là nền tảng vững chắc giúp HAMEDCO phát triển bền vững và tạo dựng niềm tin vững chắc với đối tác và khách hàng trong suốt hơn 20 năm qua.",
                "Corporate culture is the solid foundation that helps HAMEDCO develop sustainably and build strong trust with partners and customers over 20 years."
              )}
            </p>
            <div className="culture-quote">
              <span className="culture-quote-mark">"</span>
              <p>
                {t(
                  "Kinh doanh không chỉ dừng lại ở việc cung cấp sản phẩm, mà là quá trình kiến tạo niềm tin thông qua chất lượng, sự chuyên nghiệp và trách nhiệm trong từng cam kết.",
                  "Business is not just about providing products, but the process of building trust through quality, professionalism and responsibility in every commitment."
                )}
              </p>
            </div>
          </div>

          {/* Right culture cards */}
          <div className="culture-cards fade-in-up stagger-1">
            {cultures.map((item, idx) => (
              <div className="culture-card" key={idx} style={{ animationDelay: `${idx * 0.08}s` }}>
                <div className="culture-card-icon">{item.icon}</div>
                <div className="culture-card-body">
                  <strong className="culture-keyword">{item.keyword.vi}</strong>
                  <span className="culture-sep"> </span>
                  <span className="culture-card-desc">{item.desc.vi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
