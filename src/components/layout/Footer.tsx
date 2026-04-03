"use client";

import Link from "next/link";
import { useLocale } from "../LocaleProvider";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="footer" role="contentinfo">
      {/* Footer CTA Bar */}
      <div className="footer-cta-bar">
        <div className="container">
          <div className="footer-cta-inner">
            <div>
              <h3>{t("Sẵn sàng nâng cấp thiết bị y tế?", "Ready to upgrade your medical equipment?")}</h3>
              <p>{t(
                "Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết từ đội ngũ chuyên gia HAMEDCO.",
                "Contact us now for a free consultation and detailed quote from our HAMEDCO expert team."
              )}</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link href="/bao-gia" className="btn btn-accent btn-lg">{t("Yêu cầu báo giá", "Request Quote")}</Link>
              <a href="tel:+84869009486" className="btn btn-outline-white btn-lg">📞 086 900 9486</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <img src="/assets/logo-hamedco.png" alt="HAMEDCO" width="140" height="40" loading="lazy" />
              <p>{t(
                "Công ty Cổ phần Vật tư và Thiết bị Y tế Hà Nội — Đối tác tin cậy trong lĩnh vực thiết bị y tế từ năm 2005. Đại diện phân phối chính thức KLS Martin, Philips, JVM tại Việt Nam.",
                "Hanoi Medical Equipment and Supplies Joint Stock Company — A trusted partner in the medical equipment field since 2005. Official distributor of KLS Martin, Philips, JVM in Vietnam."
              )}</p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg></a>
                <a href="#" aria-label="LinkedIn"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" /></svg></a>
                <a href="#" aria-label="YouTube"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff" /></svg></a>
                <a href="mailto:info@hamedco.vn" aria-label="Email"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></a>
              </div>
              <div className="footer-newsletter">
                <p>{t("Đăng ký nhận tin tức và khuyến mãi mới nhất", "Subscribe for the latest news and promotions")}</p>
                <form className="footer-newsletter-form">
                  <input type="email" placeholder={t("Email của bạn", "Your email address")} aria-label="Email" />
                  <button type="submit">{t("Đăng ký", "Subscribe")}</button>
                </form>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="footer-heading">{t("Sản phẩm", "Products")}</h4>
              <div className="footer-links">
                <Link href="/san-pham#medical-imaging">{t("Chẩn đoán hình ảnh", "Medical Imaging")}</Link>
                <Link href="/san-pham#surgical">{t("Dụng cụ phẫu thuật", "Surgical Instruments")}</Link>
                <Link href="/san-pham#automation">{t("Tự động hóa dược phẩm", "Pharmacy Automation")}</Link>
                <Link href="/san-pham#others">{t("Thiết bị khác", "Other Equipments")}</Link>
                <Link href="/san-pham">{t("Tất cả sản phẩm", "All Products")}</Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="footer-heading">{t("Dịch vụ", "Services")}</h4>
              <div className="footer-links">
                <Link href="/dich-vu">{t("Tư vấn giải pháp", "Solution Consulting")}</Link>
                <Link href="/dich-vu">{t("Triển khai & Cài đặt", "Implementation & Setup")}</Link>
                <Link href="/dich-vu">{t("Bảo trì & Bảo hành", "Maintenance & Warranty")}</Link>
                <Link href="/dich-vu">{t("Đào tạo sử dụng", "Training")}</Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="footer-heading">{t("Công ty", "Company")}</h4>
              <div className="footer-links">
                <Link href="/gioi-thieu">{t("Giới thiệu", "About Us")}</Link>
                <Link href="/doi-tac">{t("Đối tác chiến lược", "Strategic Partners")}</Link>
                <Link href="/tuyen-dung">{t("Tuyển dụng", "Careers")}</Link>
                <Link href="/lien-he">{t("Liên hệ", "Contact Us")}</Link>
                <Link href="/bao-gia">{t("Yêu cầu báo giá", "Request Quote")}</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer-heading">{t("Liên hệ", "Contact")}</h4>
              <div className="footer-contact-item">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>{t("Tầng 5, Tòa nhà Vimeco, Lô E9, Phạm Hùng, Cầu Giấy, Hà Nội", "Floor 5, Vimeco Building, Lot E9, Pham Hung, Cau Giay, Hanoi")}</span>
              </div>
              <div className="footer-contact-item">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>436B/22, Đường 3/2, P.12, Q.10, TP.HCM</span>
              </div>
              <div className="footer-contact-item">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+84869009486" style={{ color: 'inherit' }}>+84 86 9009 486</a>
              </div>
              <div className="footer-contact-item">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@hamedco.vn" style={{ color: 'inherit' }}>info@hamedco.vn</a>
              </div>
              <div className="footer-contact-item" style={{ alignItems: "flex-start" }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginTop: "4px" }}><path strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>
                  {t("T2 – T6: 08:00 – 17:00", "Mon – Fri: 08:00 – 17:00")}<br />
                  {t("T7: 08:00 – 11:45", "Sat: 08:00 – 11:45")}
                </span>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="footer-badges">
            <div className="footer-badge">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span>{t("Sản phẩm chính hãng 100%", "100% Authentic Products")}</span>
            </div>
            <div className="footer-badge">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span>{t("Bảo hành chính hãng 12–24 tháng", "12–24 Month Genuine Warranty")}</span>
            </div>
            <div className="footer-badge">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span>{t("Hỗ trợ nhanh chóng 24/7", "24/7 Fast Support")}</span>
            </div>
            <div className="footer-badge">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span>Chứng nhận ISO 13485</span>
            </div>
            <div className="footer-badge">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span>{t("Giấy phép TTBYT Bộ Y tế", "MOH Medical Device License")}</span>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <span>© 2026 HAMEDCO — {t("Công ty CP Vật tư và Thiết bị Y tế Hà Nội", "Hanoi Medical Equipment and Supplies JSC.")} ĐKKD: 0101437977. {t("Tất cả quyền được bảo lưu", "All rights reserved.")} | {t("Thiết kế bởi", "Designed by")} <a href="https://tulie.agency" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'underline' }}>Tulie Agency</a></span>
            <div className="footer-bottom-links">
              <Link href="#">{t("Chính sách bảo mật", "Privacy Policy")}</Link>
              <Link href="#">{t("Điều khoản sử dụng", "Terms of Use")}</Link>
              <Link href="#">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
