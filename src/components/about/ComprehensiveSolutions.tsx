"use client";

import { useLocale } from "../LocaleProvider";

/**
 * ComprehensiveSolutions — Giải pháp toàn diện của HAMEDCO
 */
export default function ComprehensiveSolutions() {
  const { t } = useLocale();

  const solutions = [
    {
      number: "01",
      title: { vi: "Chẩn đoán hình ảnh cao cấp", en: "Premium Medical Imaging" },
      desc: {
        vi: "Cung cấp đồng bộ các hệ thống của Philips Healthcare như siêu âm, MRI, CT, DSA và các thiết bị chẩn đoán hình ảnh tiên tiến.",
        en: "Providing complete systems from Philips Healthcare including ultrasound, MRI, CT, DSA and advanced diagnostic imaging equipment."
      },
      tags: ["Siêu âm", "MRI", "CT-Scanner", "DSA", "X-quang"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
        </svg>
      )
    },
    {
      number: "02",
      title: { vi: "Giải pháp phòng mổ & hồi sức cấp cứu", en: "Operating Room & Critical Care Solutions" },
      desc: {
        vi: "Triển khai trọn gói hệ thống đèn mổ, bàn mổ đa năng, máy thở và monitor theo dõi bệnh nhân từ các thương hiệu uy tín toàn cầu.",
        en: "Full package deployment of surgical lights, multi-purpose operating tables, ventilators and patient monitors from globally trusted brands."
      },
      tags: ["Đèn mổ", "Bàn mổ", "Máy thở", "Monitor theo dõi"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      number: "03",
      title: { vi: "Tư vấn & triển khai giải pháp", en: "Consulting & Solution Implementation" },
      desc: {
        vi: "Khảo sát thực tế, đánh giá hạ tầng và nhu cầu sử dụng tại từng cơ sở y tế để đề xuất cấu hình phù hợp, tối ưu hiệu quả đầu tư. Đồng hành xuyên suốt từ tư vấn giải pháp, lắp đặt, vận hành đến đào tạo và chuyển giao công nghệ, đảm bảo hệ thống được khai thác hiệu quả và bền vững.",
        en: "On-site surveys, infrastructure assessment and usage needs evaluation at each medical facility to propose appropriate configurations, optimizing investment efficiency. Accompanying throughout from solution consulting, installation, operation to training and technology transfer, ensuring the system is exploited effectively and sustainably."
      },
      tags: ["Khảo sát", "Lắp đặt", "Đào tạo", "Chuyển giao công nghệ"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="solutions-section section bg-white">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <span className="overline">{t("Dịch vụ cốt lõi", "Core Services")}</span>
          <h2>{t("Giải pháp toàn diện của HAMEDCO", "HAMEDCO's Comprehensive Solutions")}</h2>
          <p>
            {t(
              "Thấu hiểu đặc thù và yêu cầu khắt khe của ngành y tế, HAMEDCO không chỉ cung cấp thiết bị mà còn mang đến giải pháp tổng thể, đồng bộ và tối ưu.",
              "Understanding the unique characteristics and strict requirements of the healthcare industry, HAMEDCO not only provides equipment but also delivers comprehensive, synchronized and optimal solutions."
            )}
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((sol, idx) => (
            <div
              className="solution-card fade-in-up"
              key={idx}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="solution-number">{sol.number}</div>
              <div className="solution-icon">{sol.icon}</div>
              <h3 className="solution-title">{sol.title.vi}</h3>
              <p className="solution-desc">{sol.desc.vi}</p>
              <div className="solution-tags">
                {sol.tags.map(tag => (
                  <span className="solution-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="solutions-cta fade-in-up">
          <div className="solutions-cta-inner">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 3" />
            </svg>
            <div>
              <strong>{t("Hỗ trợ kỹ thuật 24/7", "24/7 Technical Support")}</strong>
              <span>{t("Đảm bảo thiết bị vận hành liên tục", "Ensuring continuous equipment operation")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
