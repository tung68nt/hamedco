"use client";

import { useLocale } from "../LocaleProvider";

/**
 * BusinessPhilosophy — Triết lý kinh doanh
 */
export default function BusinessPhilosophy() {
  const { t } = useLocale();

  const philosophies = [
    {
      keyword: { vi: "TẬN TÂM", en: "DEDICATED" },
      desc: {
        vi: "vì sự an toàn của người bệnh và hiệu quả vận hành của đối tác y tế.",
        en: "for the safety of patients and the operational efficiency of medical partners."
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      accent: "#E8834A"
    },
    {
      keyword: { vi: "TIÊN PHONG", en: "PIONEERING" },
      desc: {
        vi: "công nghệ y khoa, kiến tạo giải pháp tối ưu cho bệnh viện.",
        en: "medical technology, creating optimal solutions for hospitals."
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      accent: "#2B9EB3"
    },
    {
      keyword: { vi: "CHUYÊN NGHIỆP", en: "PROFESSIONAL" },
      desc: {
        vi: "trong tư vấn, triển khai và đồng hành trọn vòng đời thiết bị.",
        en: "in consulting, implementation and accompanying the full equipment lifecycle."
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      accent: "#10B981"
    },
    {
      keyword: { vi: "HÀI HÒA", en: "HARMONIOUS" },
      desc: {
        vi: "lợi ích giữa khách hàng, đối tác, nhân viên và cộng đồng.",
        en: "interests between customers, partners, employees and the community."
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      accent: "#F59E0B"
    },
    {
      keyword: { vi: "BỀN VỮNG", en: "SUSTAINABLE" },
      desc: {
        vi: "trên nền tảng uy tín 20 năm và định hướng phát triển dài lâu.",
        en: "on the foundation of 20 years of credibility and long-term development direction."
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 3l14 9-14 9V3z" />
        </svg>
      ),
      accent: "#8B5CF6"
    }
  ];

  return (
    <section className="philosophy-section section bg-white">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <span className="overline">{t("Kim chỉ nam hoạt động", "Guiding Principles")}</span>
          <h2>{t("Triết lý kinh doanh", "Business Philosophy")}</h2>
          <p>{t("5 nguyên tắc cốt lõi định hình mọi hành động của HAMEDCO", "5 core principles shaping every action of HAMEDCO")}</p>
        </div>

        <div className="philosophy-grid fade-in-up stagger-1">
          {philosophies.map((item, idx) => (
            <div
              className="philosophy-card"
              key={idx}
              style={{ animationDelay: `${idx * 0.1}s`, "--philosophy-accent": item.accent } as React.CSSProperties}
            >
              <div className="philosophy-icon" style={{ color: item.accent }}>
                {item.icon}
              </div>
              <div className="philosophy-body">
                <span className="philosophy-keyword" style={{ color: item.accent }}>
                  {item.keyword.vi}
                </span>
                <p className="philosophy-desc">{item.desc.vi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
