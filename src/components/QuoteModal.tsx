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

        <div className="quote-modal-header">
          <div className="quote-modal-header-row">
            <div className="quote-modal-header-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>
            <h2 id="quote-title">{t("Yêu cầu báo giá", "Request a Quote")}</h2>
          </div>
          <p>
            {t(
              "Để lại thông tin, chuyên viên tư vấn của HAMEDCO sẽ liên hệ lại ngay lập tức.",
              "Leave your details and a HAMEDCO consultant will contact you immediately."
            )}
          </p>
        </div>

        <div className="quote-modal-content" style={{ padding: "2rem" }}>
          {success ? (
            <div className="quote-modal-success fadeIn" style={{ textAlign: "center", padding: "3rem 1rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "80px", height: "80px", background: "#e8f7f0", color: "#10b981", borderRadius: "50%", marginBottom: "1.5rem" }}>
                <svg className="success-icon" width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--color-neutral-dark)" }}>{t("Gửi yêu cầu thành công!", "Request sent successfully!")}</h3>
              <p style={{ color: "var(--color-neutral)" }}>{t("Cảm ơn bạn. Chúng tôi sẽ liên hệ lại sớm nhất.", "Thank you. We will get back to you shortly.")}</p>
            </div>
          ) : (
            <form className="quote-modal-form" onSubmit={handleSubmit}>
              <div className="form-group grid-2">
                <div className="form-field">
                  <label htmlFor="quote-name">{t("Họ và tên *", "Full Name *")}</label>
                  <input type="text" id="quote-name" className="form-input" placeholder="VD: Nguyễn Văn A" required />
                </div>
                <div className="form-field">
                  <label htmlFor="quote-phone">{t("Số điện thoại *", "Phone Number *")}</label>
                  <input type="tel" id="quote-phone" className="form-input" placeholder="VD: 09xx xxx xxx" required />
                </div>
              </div>

              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="quote-email">{t("Email", "Email")}</label>
                  <input type="email" id="quote-email" className="form-input" placeholder="VD: email@hospital.com" />
                </div>
              </div>

              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="quote-hospital">{t("Bệnh viện / Cơ sở y tế *", "Hospital / Clinic *")}</label>
                  <input type="text" id="quote-hospital" className="form-input" placeholder="Tên bệnh viện hoặc phòng khám..." required />
                </div>
              </div>

              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="quote-product">{t("Sản phẩm quan tâm", "Product of interest")}</label>
                  <select id="quote-product" className="form-input select-input">
                    <option value="">{t("-- Chọn danh mục thiết bị --", "-- Select equipment category --")}</option>
                    <option value="ct">{t("Máy chụp cắt lớp vi tính (CT)", "CT Scanner")}</option>
                    <option value="mri">{t("Hệ thống cộng hưởng từ (MRI)", "MRI System")}</option>
                    <option value="sieu-am">{t("Máy Siêu âm", "Ultrasound System")}</option>
                    <option value="x-quang">{t("Máy X-quang", "X-ray equipment")}</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="quote-message">{t("Ghi chú thêm", "Additional notes")}</label>
                  <textarea id="quote-message" className="form-input" rows={5} placeholder="Bạn có yêu cầu đặc biệt gì không..."></textarea>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={loading}>
                  {loading ? (
                    <span className="spinner"></span>
                  ) : (
                    <>
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      {t("Gửi yêu cầu báo giá", "Send Quote Request")}
                    </>
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
