"use client";

import { useLocale } from "../LocaleProvider";

/**
 * CoreValues — Company values and mission for the About page
 */
export default function CoreValues() {
  const { t, locale } = useLocale();

  const values = [
    {
      title: { vi: "Tận tâm", en: "Dedicated" },
      desc: { vi: "Phục vụ khách hàng bằng cả trái tim, luôn đặt lợi ích của bệnh nhân và y bác sĩ lên hàng đầu.", en: "Serving customers with passion, always prioritizing patients and medical professionals." },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: { vi: "Chính trực", en: "Integrity" },
      desc: { vi: "Cam kết 100% sản phẩm chính hãng, minh bạch trong mọi giao dịch và hợp tác kinh doanh.", en: "Committed to 100% genuine products, transparency in all transactions and collaborations." },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: { vi: "Chuyên nghiệp", en: "Professional" },
      desc: { vi: "Đội ngũ giàu kinh nghiệm, quy trình chuẩn hóa từ tư vấn đến bảo trì, hỗ trợ 24/7.", en: "Experienced team with standardized processes, from consulting to maintenance, 24/7 support." },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: { vi: "Sáng tạo", en: "Innovation" },
      desc: { vi: "Luôn tiên phong cập nhật những công nghệ y tế hiện đại nhất thế giới vào thị trường Việt Nam.", en: "Pioneering global state-of-the-art medical technologies in the Vietnam market." },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section className="values-section section bg-gray-50">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <span className="overline">{t("Giá trị cốt lõi", "Our Core Values")}</span>
          <h2>{t("Triết lý Kinh doanh & Sứ mệnh", "Business Philosophy & Mission")}</h2>
          <p>{t(
            "Suốt 20 năm, HAMEDCO luôn nỗ lực vì một nền y tế bền vững tại Việt Nam.",
            "For 20 years, HAMEDCO has been striving for a sustainable healthcare system in Vietnam."
          )}</p>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card fade-in-up" key={v.title.en} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="value-icon">{v.icon}</div>
              <h3 className="h4">{v.title[locale]}</h3>
              <p>{v.desc[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

