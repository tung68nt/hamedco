"use client";

import { useLocale } from "../LocaleProvider";

/**
 * AboutBanner — Hero banner định vị HAMEDCO
 */
export default function AboutBanner() {
  const { t } = useLocale();

  return (
    <section className="about-banner">
      <div className="about-banner-bg">
        <img src="/assets/images/hero/hero-banner.webp" alt="HAMEDCO" />
        <div className="about-banner-overlay" />
      </div>
      <div className="container">
        <div className="about-banner-content fade-in-up">
          <div className="about-banner-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>{t("Nhà phân phối chính thức Philips Healthcare", "Official Philips Healthcare Distributor")}</span>
          </div>
          <h1 className="about-banner-title">
            {t("HAMEDCO", "HAMEDCO")}
            <span className="about-banner-highlight">
              {t(" 20 NĂM ", " 20 YEARS ")}
            </span>
            {t("KINH NGHIỆM UY TÍN", "OF TRUSTED EXPERTISE")}
          </h1>
          <p className="about-banner-sub">
            {t(
              "Nhà phân phối chính thức thiết bị siêu âm của Philips Healthcare tại Việt Nam",
              "Official distributor of Philips Healthcare ultrasound equipment in Vietnam"
            )}
          </p>
          <div className="about-banner-stats">
            <div className="about-banner-stat">
              <span className="stat-big">20+</span>
              <span className="stat-lbl">{t("Năm kinh nghiệm", "Years of experience")}</span>
            </div>
            <div className="about-banner-stat-divider" />
            <div className="about-banner-stat">
              <span className="stat-big">100+</span>
              <span className="stat-lbl">{t("Bệnh viện đối tác", "Hospital partners")}</span>
            </div>
            <div className="about-banner-stat-divider" />
            <div className="about-banner-stat">
              <span className="stat-big">100+</span>
              <span className="stat-lbl">{t("Quốc gia Philips hiện diện", "Countries Philips operates in")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
