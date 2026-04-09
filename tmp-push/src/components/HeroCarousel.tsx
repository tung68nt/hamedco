"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const SLIDES = [
  { src: "/assets/images/hero/slide-1.webp", alt: "Phòng phẫu thuật hiện đại với thiết bị y tế tiên tiến" },
  { src: "https://yviet.com.vn/wp-content/uploads/2025/11/Bannerwebtrangchitiet_DV.jpg", alt: "Đội ngũ y bác sĩ sử dụng thiết bị chẩn đoán hình ảnh siêu âm chuyên nghiệp" },
  { src: "/assets/images/hero/slide-3.webp", alt: "Hệ thống thiết bị y tế trong bệnh viện hiện đại" },
];

const INTERVAL = 5000; // 5 seconds

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="hero"
      aria-label="Banner chính"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-carousel">
        {SLIDES.map((slide, i) => (
          <div className={`hero-slide${i === current ? " active" : ""}`} key={i} aria-hidden={i !== current}>
            <img
              src={slide.src}
              alt={slide.alt}
              width="1920"
              height="1080"
              loading={i === 0 ? undefined : "lazy"}
            />
          </div>
        ))}
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Nhà phân phối chính thức Philips Healthcare tại Việt Nam</span>
          </div>
          <h1 className="display-xl">Giải pháp Y tế<br/>đỉnh cao từ Philips</h1>
          <p>Tiên phong công nghệ chẩn đoán hình ảnh và theo dõi lâm sàng thông minh. HAMEDCO tự hào là đại diện độc quyền mang hệ sinh thái Connected Care của Philips đến hàng trăm bệnh viện trên toàn quốc.</p>
          <div className="hero-actions">
            <Link href="/san-pham" className="btn btn-accent btn-xl">Khám phá sản phẩm</Link>
            <Link href="/bao-gia" className="btn btn-outline-white btn-xl">Yêu cầu tư vấn</Link>
          </div>
        </div>
      </div>
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? " active" : ""}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
