"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const header = document.getElementById("header");
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <button
        className={`nav-toggle${menuOpen ? " active" : ""}`}
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-mobile${menuOpen ? " open" : ""}`} aria-label="Mobile navigation">
        <Link href="/" className="nav-mobile-link" onClick={closeMenu}>Trang chủ</Link>
        <Link href="/gioi-thieu" className="nav-mobile-link" onClick={closeMenu}>Giới thiệu</Link>
        <Link href="/san-pham" className="nav-mobile-link" onClick={closeMenu}>Sản phẩm</Link>
        <Link href="/dich-vu" className="nav-mobile-link" onClick={closeMenu}>Dịch vụ</Link>
        <Link href="/doi-tac" className="nav-mobile-link" onClick={closeMenu}>Đối tác</Link>
        <Link href="/tin-tuc" className="nav-mobile-link" onClick={closeMenu}>Tin tức</Link>
        <Link href="/lien-he" className="nav-mobile-link" onClick={closeMenu}>Liên hệ</Link>
      </nav>
    </>
  );
}
