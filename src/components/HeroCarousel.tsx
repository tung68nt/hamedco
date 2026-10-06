"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Slide {
  src: string;
  srcMobile?: string;
  alt: string;
  badge?: string;
  title?: { vi: string; en: string };
  subtitle?: { vi: string; en: string };
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  showBadge?: boolean;
  showText?: boolean;
  showCta?: boolean;
  showGradient?: boolean;
}

interface HeroContent {
  slides: Slide[];
}

const DEFAULT_CONTENT: HeroContent = {
  slides: [
    {
      src: "/assets/images/hero/hero-banner-new.png",
      alt: "HAMEDCO - Đối tác phân phối chiến lược thiết bị siêu âm Philips",
      badge: "Nhà phân phối chính thức Philips Healthcare tại Việt Nam",
      title: { vi: "Giải pháp Y tế\nđỉnh cao từ Philips", en: "Peak Healthcare Solutions\nfrom Philips" },
      subtitle: { vi: "Tiên phong công nghệ chẩn đoán hình ảnh và theo dõi lâm sàng thông minh. HAMEDCO tự hào là đại diện độc quyền mang hệ sinh thái Connected Care của Philips đến hàng trăm bệnh viện trên toàn quốc.", en: "Pioneering intelligent diagnostic imaging and clinical monitoring technology. HAMEDCO is proud to be the exclusive representative bringing Philips Connected Care ecosystem to hundreds of hospitals nationwide." },
      ctaPrimary: { label: "Khám phá sản phẩm", href: "/san-pham" },
      ctaSecondary: { label: "Yêu cầu tư vấn", href: "/bao-gia" },
      showBadge: true,
      showText: true,
      showCta: true,
      showGradient: true,
    },
  ],
};

const INTERVAL = 5000;

export default function HeroCarousel({ data }: { data?: any }) {
  const [content, setContent] = useState<HeroContent | null>(data?.slides ? data : DEFAULT_CONTENT);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const prev = useCallback(() => {
    if (!content?.slides.length) return;
    setCurrent((prev) => (prev - 1 + content.slides.length) % content.slides.length);
  }, [content?.slides.length]);

  const next = useCallback(() => {
    if (!content?.slides.length) return;
    setCurrent((prev) => (prev + 1) % content.slides.length);
  }, [content?.slides.length]);

  useEffect(() => {
    if (data?.slides?.length > 0) {
      setContent(data);
    } else {
      setContent(DEFAULT_CONTENT);
    }
  }, [data]);

  useEffect(() => {
    if (paused || !content?.slides.length) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % content.slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [paused, content?.slides.length]);



  if (!content) return null;
  const slide = content.slides[current];
  const showBadge = slide.showBadge !== false && slide.badge;
  const showText = slide.showText !== false && (slide.title?.vi || slide.subtitle?.vi);
  const showCta = slide.showCta !== false && (slide.ctaPrimary?.label || slide.ctaSecondary?.label);
  const showGradient = slide.showGradient !== false;
  const hasAnyContent = showBadge || showText || showCta;

  return (
    <section
      className={`hero${!hasAnyContent ? " no-content" : ""}${!showGradient ? " no-gradient" : ""}`}
      aria-label="Banner chính"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-carousel">
        {content.slides.map((s, i) => (
          <div
            className={`hero-slide${i === current ? " active" : ""}`}
            key={i}
            aria-hidden={i !== current}
          >
            <img
              src={isMobile && s.srcMobile ? s.srcMobile : s.src}
              alt={s.alt}
              width="1920"
              height="1080"
              loading={i === 0 ? undefined : "lazy"}
            />
          </div>
        ))}
      </div>

      {hasAnyContent && (
        <div className="container">
          <div className="hero-content">
            {showBadge && (
              <div className="hero-badge">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>{slide.badge}</span>
              </div>
            )}
            {showText && (
              <>
                {slide.title?.vi && (
                  <h1 className="display-xl">
                    {slide.title.vi.split("\n").map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </h1>
                )}
                {slide.subtitle?.vi && (
                  <p>{slide.subtitle.vi}</p>
                )}
              </>
            )}
            {showCta && (
              <div className="hero-actions">
                {slide.ctaPrimary?.label && (
                  <Link href={slide.ctaPrimary.href || "#"} className="btn btn-accent btn-xl">
                    {slide.ctaPrimary.label}
                  </Link>
                )}
                {slide.ctaSecondary?.label && (
                  <Link href={slide.ctaSecondary.href || "#"} className="btn btn-outline-white btn-xl">
                    {slide.ctaSecondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {content.slides.length > 1 && (
        <>
          <button
            className="hero-nav hero-nav-prev"
            onClick={prev}
            aria-label="Slide trước"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="hero-nav hero-nav-next"
            onClick={next}
            aria-label="Slide tiếp theo"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="hero-dots">
            {content.slides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot${i === current ? " active" : ""}`}
                aria-label={`Slide ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}