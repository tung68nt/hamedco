"use client";

import HeroCarousel from "../components/HeroCarousel";
import FaqAccordion from "../components/FaqAccordion";
import JsonLd from "../components/JsonLd";
import AboutIntro from "../components/home/AboutIntro";
import FeaturedProducts from "../components/home/FeaturedProducts";
import ServicesSection from "../components/home/ServicesSection";
import PhilipsShowcase from "../components/home/PhilipsShowcase";
import CertificationsSection from "../components/home/CertificationsSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CooperationProcess from "../components/home/CooperationProcess";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <AboutIntro />
      <FeaturedProducts />
      <ServicesSection />
      <PhilipsShowcase />
      <CertificationsSection />
      <WhyChooseUs />
      <CooperationProcess />
      <Testimonials />

      <section className="section bg-white">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="overline">Câu hỏi thường gặp</span>
            <h2>Giải đáp thắc mắc</h2>
            <p>Những câu hỏi phổ biến nhất về sản phẩm và dịch vụ của HAMEDCO</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <CTASection />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "HAMEDCO",
          "url": "https://hamedco.com.vn",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://hamedco.com.vn/san-pham?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "HAMEDCO",
          "url": "https://hamedco.com.vn",
          "logo": "https://hamedco.com.vn/assets/images/logo.png",
          "description": "Nhà cung cấp thiết bị y tế hàng đầu Việt Nam, đối tác của Philips Healthcare.",
          "telephone": "+84-86-900-9486",
          "email": "info@hamedco.vn",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ha Noi",
            "addressCountry": "VN"
          }
        }}
      />
    </>
  );
}
