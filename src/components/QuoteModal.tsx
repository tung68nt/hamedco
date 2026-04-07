"use client";

import { useEffect, useState } from "react";
import { useLocale } from "./LocaleProvider";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const { t } = useLocale();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => setSuccess(false), 300); // Reset after close
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1200);
  };

  return (
    <div className="quote-modal-overlay fadeIn" role="dialog" aria-modal="true" aria-labelledby="quote-title">
      <div className="quote-modal-backdrop" onClick={onClose}></div>
      
      <div className="quote-modal-container slideUp">
        <button className="quote-modal-close" onClick={onClose} aria-label="Đóng popup">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="quote-modal-content">
          <div className="quote-modal-header">
            <h2 id="quote-title">{t("Yêu cầu báo giá", "Request a Quote")}</h2>
            <p>
              {t(
                "Để lại thông tin, chuyên viên tư vấn của HAMEDCO sẽ liên hệ lại với bạn trong thời gian sớm nhất.",
                "Leave your details and a HAMEDCO consultant will contact you as soon as possible."
              )}
            </p>
          </div>

          {success ? (
            <div className="quote-modal-success fadeIn">
              <svg className="success-icon" width="60" height="60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3>{t("Gửi yêu cầu thành công!", "Request sent successfully!")}</h3>
              <p>{t("Cảm ơn bạn. Chúng tôi sẽ liên hệ lại sớm nhất.", "Thank you. We will get back to you shortly.")}</p>
            </div>
          ) : (
            <form className="quote-modal-form" onSubmit={handleSubmit}>
              <div className="form-group grid-2">
                <div className="form-field">
                  <label htmlFor="quote-name">{t("Họ và tên *", "Full Name *")}</label>
                  <input type="text" id="quote-name" className="form-input" required />
                </div>
                <div className="form-field">
                  <label htmlFor="quote-phone">{t("Số điện thoại *", "Phone Number *")}</label>
                  <input type="tel" id="quote-phone" className="form-input" required />
                </div>
              </div>

              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="quote-email">{t("Email", "Email")}</label>
                  <input type="email" id="quote-email" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="quote-hospital">{t("Bệnh viện / Cơ sở y tế *", "Hospital / Clinic *")}</label>
                  <input type="text" id="quote-hospital" className="form-input" required />
                </div>
              </div>

              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="quote-product">{t("Sản phẩm quan tâm", "Product of interest")}</label>
                  <select id="quote-product" className="form-input select-input">
                    <option value="">{t("-- Chọn danh mục siêu âm --", "-- Select ultrasound category --")}</option>
                    <option value="di-dong">{t("Siêu âm di động (Portable)", "Portable Ultrasound")}</option>
                    <option value="tam-trung">{t("Siêu âm tầm trung (Mid-range)", "Mid-range Ultrasound")}</option>
                    <option value="cao-cap">{t("Siêu âm cao cấp (Premium)", "Premium Ultrasound")}</option>
                    <option value="khac">{t("Khác", "Other")}</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="quote-message">{t("Ghi chú thêm", "Additional notes")}</label>
                  <textarea id="quote-message" className="form-input" rows={3}></textarea>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                  {loading ? (
                    <span className="spinner"></span>
                  ) : (
                    t("Gửi yêu cầu báo giá", "Send Quote Request")
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
