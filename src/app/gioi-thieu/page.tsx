"use client";

import { useLocale } from "../../components/LocaleProvider";
import Link from "next/link";
import AboutBanner from "../../components/about/AboutBanner";
import OpenLetter from "../../components/about/OpenLetter";
import CompanyJourney from "../../components/about/CompanyJourney";
import VisionMissionValues from "../../components/about/VisionMissionValues";
import BusinessPhilosophy from "../../components/about/BusinessPhilosophy";
import CorporateCulture from "../../components/about/CorporateCulture";
import ComprehensiveSolutions from "../../components/about/ComprehensiveSolutions";
import WhyChooseUs from "../../components/about/WhyChooseUs";
import ContactSection from "../../components/about/ContactSection";
import FaqAccordion from "../../components/FaqAccordion";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <>
      {/* ═══ 1. BANNER ═══ */}
      <AboutBanner />

      {/* ═══ 2. THƯ NGỎ ═══ */}
      <OpenLetter />

      {/* ═══ 3. HÀNH TRÌNH 2 THẬP KỶ ═══ */}
      <CompanyJourney />

      {/* ═══ 4. TẦM NHÌN – SỨ MỆNH – GIÁ TRỊ CỐT LÕI ═══ */}
      <VisionMissionValues />

      {/* ═══ 5. TRIẾT LÝ KINH DOANH ═══ */}
      <BusinessPhilosophy />

      {/* ═══ 6. VĂN HOÁ DOANH NGHIỆP ═══ */}
      <CorporateCulture />

      {/* ═══ 7. GIẢI PHÁP TOÀN DIỆN ═══ */}
      <ComprehensiveSolutions />

      {/* ═══ 8. TẠI SAO CHỌN HAMEDCO ═══ */}
      <WhyChooseUs />

      {/* ═══ 8.1. TIÊU CHUẨN & CHỨNG NHẬN CHẤT LƯỢNG ═══ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header fade-in-up text-center">
            <span className="overline">{t("Tiêu chuẩn & Chứng nhận", "Standards & Certifications")}</span>
            <h2>{t("Đảm bảo sự an toàn tuyệt đối và tính pháp lý minh bạch cho mọi dự án y tế", "Ensuring absolute safety and transparent legality for every medical project")}</h2>
          </div>
          <div className="cert-grid fade-in-up">
            {[
              { name: "ISO 13485", detail: t("Quản lý chất lượng TBYT", "Medical Devices QMS") },
              { name: t("CFS", "CFS"), detail: t("Giấy chứng nhận lưu hành tự do", "Certificate of Free Sale") },
              { name: "CE", detail: t("Chứng nhận Châu Âu", "European Conformity") },
              { name: t("Giấy phép TTBYT", "Medical Equipment License"), detail: t("Bộ Y tế Việt Nam", "Vietnam Ministry of Health") },
            ].map((cert) => (
              <div className="cert-item" key={cert.name}>
                <div className="cert-icon">
                  <svg width="40" height="40" fill="none" stroke="var(--color-primary)" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-detail">{cert.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. QUY TRÌNH HỢP TÁC ═══ */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header fade-in-up text-center">
            <span className="overline">{t("Quy trình hợp tác", "Collaboration Process")}</span>
            <h2>{t("4 bước để sở hữu thiết bị y tế chất lượng", "4 steps to owning quality medical equipment")}</h2>
            <p>{t(
              "Quy trình chuyên nghiệp, minh bạch — từ tư vấn đến bàn giao vận hành",
              "Professional and transparent process — from consultation to handover and operation."
            )}</p>
          </div>
          <div className="process-steps fade-in-up">
            <div className="process-step">
              <h3>{t("Tư vấn & Khảo sát", "Consulting & Surveying")}</h3>
              <p>{t(
                "Đội ngũ chuyên gia đến khảo sát thực tế, phân tích nhu cầu và đề xuất giải pháp phù hợp.",
                "Our team of experts conducts on-site surveys, analyzes needs, and proposes suitable solutions."
              )}</p>
            </div>
            <div className="process-step">
              <h3>{t("Báo giá & Hợp đồng", "Quotation & Contract")}</h3>
              <p>{t(
                "Cung cấp báo giá chi tiết, đàm phán điều khoản hợp đồng minh bạch và có lợi nhất.",
                "Provide detailed quotations and negotiate transparent and most advantageous contract terms."
              )}</p>
            </div>
            <div className="process-step">
              <h3>{t("Lắp đặt & Chuyển giao", "Installation & Training")}</h3>
              <p>{t(
                "Triển khai lắp đặt đúng tiêu chuẩn, chuyển giao, đào tạo, hướng dẫn sử dụng cho toàn bộ đội ngũ vận hành.",
                "Implement installation according to standards and provide training on usage for the entire operating team."
              )}</p>
            </div>
            <div className="process-step">
              <h3 className="h4">{t("Bảo hành & Hỗ trợ", "Warranty & Support")}</h3>
              <p>{t(
                "Bảo hành chính hãng, bảo trì định kỳ và hỗ trợ kỹ thuật xuyên suốt vòng đời thiết bị.",
                "Manufacturer's warranty, regular maintenance, and technical support throughout the equipment's lifecycle."
              )}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 10. TESTIMONIALS ═══ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header fade-in-up text-center">
            <span className="overline">{t("Khách hàng nói gì", "What Customers Say")}</span>
            <h2>{t("Được tin tưởng bởi hàng trăm bệnh viện", "Trusted by Hundreds of Hospitals")}</h2>
            <p>{t("Cảm nhận của đối tác và khách hàng đã hợp tác cùng HAMEDCO", "Feedback from partners and customers who have collaborated with HAMEDCO.")}</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card fade-in-up stagger-1">
              <blockquote>{t(
                "Hệ thống MRI 1.5T BlueSeal do HAMEDCO triển khai hoạt động rất ổn định. Công nghệ không helium giúp bệnh viện chúng tôi tiết kiệm đáng kể chi phí vận hành.",
                "The 1.5T BlueSeal MRI system deployed by HAMEDCO operates very stably. The helium-free technology helps our hospital save significantly on operating costs."
              )}</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar"><img src="/assets/images/testimonials/avatar-1.webp" alt="Author" width="48" height="48" loading="lazy" /></div>
                <div><div className="testimonial-name">TS. BS. Nguyễn Thanh H.</div><div className="testimonial-role">{t("Khoa Chẩn đoán hình ảnh — BV Đa khoa Quốc tế", "Department of Diagnostic Imaging — International General Hospital")}</div></div>
              </div>
            </div>
            <div className="testimonial-card fade-in-up stagger-2">
              <blockquote>{t(
                "Các thiết bị can thiệp mạch của Philips chất lượng vượt trội. Chúng tôi đặc biệt hài lòng với sự hỗ trợ kỹ thuật và quy trình bảo hành chính hãng từ HAMEDCO.",
                "Philips' interventional cardiology devices are of outstanding quality. We are particularly pleased with the technical support and genuine warranty service provided by HAMEDCO."
              )}</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar"><img src="/assets/images/testimonials/avatar-2.webp" alt="Author" width="48" height="48" loading="lazy" /></div>
                <div><div className="testimonial-name">PGS. TS. Phạm Văn M.</div><div className="testimonial-role">{t("Trưởng khoa Tim mạch — BV Trung ương", "Head of Cardiology Department - Central Hospital")}</div></div>
              </div>
            </div>
            <div className="testimonial-card fade-in-up stagger-3">
              <blockquote>{t(
                "Hệ thống theo dõi bệnh nhân trung tâm (Patient Monitoring) của Philips giúp khoa Hồi sức cấp cứu kiểm soát tình trạng bệnh nhân toàn diện và cảnh báo sớm cực kỳ chính xác.",
                "Philips' Patient Monitoring system enables the Intensive Care Unit to comprehensively monitor patient conditions and provide highly accurate early warning systems."
              )}</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar"><img src="/assets/images/testimonials/avatar-3.webp" alt="Author" width="48" height="48" loading="lazy" /></div>
                <div><div className="testimonial-name">BS. Lê Thị K.</div><div className="testimonial-role">{t("Trưởng khoa ICU — BV Tỉnh", "Head of ICU Department — Provincial Hospital")}</div></div>
              </div>
            </div>
            <div className="testimonial-card fade-in-up stagger-4">
              <blockquote>{t(
                "Trải nghiệm công nghệ AI SmartSpeed của Philips giúp rút ngắn thời gian chụp MRI tới 50%, giảm sự khó chịu cho bệnh nhân rõ rệt. Đội ngũ HAMEDCO đào tạo bài bản.",
                "Experience Philips' AI SmartSpeed ​​technology, which shortens MRI scan times by up to 50% and significantly reduces patient discomfort. The HAMEDCO team provided very thorough training."
              )}</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar"><img src="/assets/images/testimonials/avatar-4.webp" alt="Author" width="48" height="48" loading="lazy" /></div>
                <div><div className="testimonial-name">BSCKI. Vũ Đức A.</div><div className="testimonial-role">{t("Phó khoa CĐHA — BV Quân Y 103", "Deputy Head of Diagnostic Imaging - Military Hospital 103")}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 11. FAQ ═══ */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header fade-in-up text-center">
            <span className="overline">{t("Câu hỏi thường gặp", "Frequently Asked Questions")}</span>
            <h2>{t("Giải đáp thắc mắc", "Answering Questions")}</h2>
            <p>{t(
              "Những câu hỏi phổ biến nhất về sản phẩm và dịch vụ của HAMEDCO",
              "The most frequently asked questions about HAMEDCO's products and services."
            )}</p>
          </div>
          {/* Lazy load FAQ or import it properly soon. Need to import FaqAccordion at the top */}
          <FaqAccordion />
        </div>
      </section>

      {/* ═══ 12. KẾT NỐI VỚI CHÚNG TÔI ═══ */}
      <ContactSection />
    </>
  );
}
