"use client";

import { useLocale } from "@/components/LocaleProvider";

export default function Testimonials() {
  const { t } = useLocale();

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="section-header fade-in-up">
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
  );
}
