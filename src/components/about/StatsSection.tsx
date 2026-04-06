"use client";

import { useLocale } from "../LocaleProvider";

/**
 * StatsSection — Counter-based statistics for the About page
 */
export default function StatsSection() {
  const { t } = useLocale();

  const stats = [
    { number: "20", label: t("Năm kinh nghiệm", "Years of Experience"), suffix: "+" },
    { number: "25", label: t("Đối tác quốc tế", "International Partners"), suffix: "+" },
    { number: "500", label: t("Sản phẩm", "Products"), suffix: "+" },
    { number: "200", label: t("Dự án triển khai", "Project Implementations"), suffix: "+" }
  ];

  return (
    <section className="stats-section section bg-dark">
      <div className="container">
        <div className="grid grid-4">
          {stats.map((item, idx) => (
            <div className="stat-item fade-in-up" key={item.label} style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="stat-number">
                <span className="counter-value">{item.number}</span>
                <span className="stat-suffix">{item.suffix}</span>
              </div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
