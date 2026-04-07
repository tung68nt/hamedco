"use client";

import Link from "next/link";
import MobileHeader from "./MobileHeader";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLocale } from "../LocaleProvider";

export default function Header() {
  const { t } = useLocale();

  return (
    <>
      {/* ═══ TOP BAR ═══ */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{t("Tầng 5, Vimeco, Phạm Hùng, Cầu Giấy, Hà Nội", "Floor 5, Vimeco, Pham Hung, Cau Giay, Hanoi")}</span>
            </span>
            <span className="top-bar-item">
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t("T2 – T6: 08:00 – 17:00 | T7: 08:00 – 11:45", "Mon – Fri: 08:00 – 17:00 | Sat: 08:00 – 11:45")}</span>
            </span>
          </div>
          <div className="top-bar-right">
            <a href="tel:+84869009486" className="top-bar-item">
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +84 86 9009 486
            </a>
            <a href="mailto:info@hamedco.vn" className="top-bar-item">
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@hamedco.vn
            </a>
          </div>
        </div>
      </div>

      {/* ═══ HEADER ═══ */}
      <header className="header" id="header">
        <div className="container">
          <Link href="/" className="header-logo">
            <img src="/assets/logo-hamedco.png" alt="HAMEDCO Logo" width="160" height="44" />
          </Link>

          <nav className="nav-desktop" aria-label="Main navigation">
            <Link href="/" className="nav-link active" aria-current="page">{t("Trang chủ", "Home")}</Link>
            <Link href="/gioi-thieu" className="nav-link">{t("Giới thiệu", "About")}</Link>
            <div className="nav-dropdown">
              <Link href="/san-pham" className="nav-link">
                {t("Sản phẩm", "Products")} <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </Link>
              <div className="nav-dropdown-menu">
                <Link href="/san-pham/danh-muc/di-dong" className="nav-dropdown-item">{t("Siêu âm di động", "Portable Ultrasound")}</Link>
                <Link href="/san-pham/danh-muc/tam-trung" className="nav-dropdown-item">{t("Phân khúc Tầm trung", "Mid-range Segment")}</Link>
                <Link href="/san-pham/danh-muc/cao-cap" className="nav-dropdown-item">{t("Phân khúc Cao cấp", "Premium Segment")}</Link>
              </div>
            </div>
            <Link href="/dich-vu" className="nav-link">{t("Dịch vụ", "Services")}</Link>
            <Link href="/doi-tac" className="nav-link">{t("Đối tác", "Partners")}</Link>
            <Link href="/tin-tuc" className="nav-link">{t("Tin tức", "News")}</Link>
            <Link href="/lien-he" className="nav-link">{t("Liên hệ", "Contact")}</Link>
          </nav>

          <div className="header-actions">
            <LanguageSwitcher />
            <Link href="/bao-gia" className="btn btn-accent btn-md">{t("Yêu cầu báo giá", "Request Quote")}</Link>
          </div>

          <MobileHeader />
        </div>
      </header>
    </>
  );
}
