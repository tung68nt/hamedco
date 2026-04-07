"use client";

import Link from "next/link";
import { useLocale } from "../LocaleProvider";

/**
 * ContactSection — Kết nối với chúng tôi
 */
export default function ContactSection() {
  const { t } = useLocale();

  const contactInfos = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: { vi: "Hà Nội", en: "Hanoi" },
      value: "Tầng 5, Tòa nhà Vimeco, Lô E9, Phạm Hùng, Cầu Giấy"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: { vi: "TP. Hồ Chí Minh", en: "Ho Chi Minh City" },
      value: "436B/22, Đường 3/2, P.12, Q.10"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: { vi: "Điện thoại", en: "Phone" },
      value: "+84 86 9009 486",
      href: "tel:+84869009486"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: { vi: "Email", en: "Email" },
      value: "info@hamedco.vn",
      href: "mailto:info@hamedco.vn"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: { vi: "Giờ làm việc", en: "Working Hours" },
      value: "T2–T6: 08:00–17:00 | T7: 08:00–11:45"
    }
  ];

  return (
    <section className="about-contact-section section bg-white">
      <div className="container">
        <div className="about-contact-layout">
          {/* Left: heading + CTA */}
          <div className="about-contact-left fade-in-up">
            <span className="overline">{t("Liên hệ", "Get in Touch")}</span>
            <h2>{t("Kết nối với chúng tôi", "Connect With Us")}</h2>
            <p className="body-lg">
              {t(
                "HAMEDCO luôn sẵn sàng lắng nghe và tư vấn những giải pháp y tế tối ưu nhất cho dự án của bạn.",
                "HAMEDCO is always ready to listen and advise on the most optimal healthcare solutions for your project."
              )}
            </p>

            <div className="about-contact-company">
              <strong>{t("Tên giao dịch:", "Trading name:")}</strong>
              <p>CÔNG TY CP TRANG THIẾT BỊ VÀ VẬT TƯ Y TẾ HÀ NỘI</p>
            </div>

            <div className="about-contact-actions">
              <Link href="/lien-he" className="btn btn-primary btn-lg">
                {t("Liên hệ tư vấn", "Contact for Consultation")}
              </Link>
              <a href="tel:+84869009486" className="btn btn-outline-primary btn-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                086 900 9486
              </a>
            </div>
          </div>

          {/* Right: contact info cards */}
          <div className="about-contact-right fade-in-up stagger-1">
            {contactInfos.map((info, idx) => (
              <div className="contact-info-row" key={idx}>
                <div className="contact-info-icon">{info.icon}</div>
                <div className="contact-info-body">
                  <span className="contact-info-label">{info.label.vi}</span>
                  {info.href ? (
                    <a href={info.href} className="contact-info-value link">
                      {info.value}
                    </a>
                  ) : (
                    <span className="contact-info-value">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
