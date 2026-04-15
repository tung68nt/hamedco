"use client";

import { useLocale } from "@/components/LocaleProvider";

export default function CTASection() {
  const { t } = useLocale();

  return (
    <section className="cta-section section-lg">
      <div className="container">
        <div className="split">
          <div className="cta-content fade-in-up">
            <span className="overline" style={{ color: "var(--color-accent)" }}>{t("Liên hệ ngay", "Contact Us")}</span>
            <h2>{t("Bạn cần tư vấn giải pháp thiết bị y tế?", "Need consultation for medical equipment solutions?")}</h2>
            <p>{t(
              "Hãy để lại thông tin, đội ngũ chuyên gia của HAMEDCO sẽ liên hệ tư vấn miễn phí trong vòng 24 giờ.",
              "Leave your information, and HAMEDCO's expert team will contact you for a free consultation within 24 hours."
            )}</p>
            <div className="flex gap-4 flex-wrap" style={{ marginTop: "12px" }}>
              <div className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +84 86 9009 486
              </div>
              <div className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                info@hamedco.vn
              </div>
            </div>
          </div>
          <div className="inquiry-form fade-in-up stagger-2">
            <h3 style={{ color: "var(--color-white)", marginBottom: "20px", fontSize: "1.25rem" }}>{t("Yêu cầu tư vấn nhanh", "Quick Consultation Request")}</h3>
            <form>
              <div className="form-group">
                <label className="form-label" htmlFor="cta-name">{t("Họ và tên *", "Full Name *")}</label>
                <input type="text" id="cta-name" className="form-input" placeholder="Nguyễn Văn A" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cta-phone">{t("Số điện thoại *", "Phone Number *")}</label>
                <input type="tel" id="cta-phone" className="form-input" placeholder="0912 345 678" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cta-email">Email</label>
                <input type="email" id="cta-email" className="form-input" placeholder="email@company.com" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cta-message">{t("Nội dung quan tâm", "Area of Interest")}</label>
                <textarea id="cta-message" className="form-input form-textarea" placeholder={t("Thiết bị cần tư vấn, số lượng, thời gian...", "Equipment needed, quantity, timeline...")} rows={3}></textarea>
              </div>
              <button type="submit" className="btn btn-accent btn-lg" style={{ width: "100%" }}>{t("Gửi yêu cầu tư vấn", "Submit Request")}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
