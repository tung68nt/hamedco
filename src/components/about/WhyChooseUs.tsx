"use client";

import { useLocale } from "../LocaleProvider";

/**
 * WhyChooseUs — Tại sao các bệnh viện hàng đầu lựa chọn HAMEDCO?
 */
export default function WhyChooseUs() {
  const { t } = useLocale();

  const reasons = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: { vi: "Bề dày lịch sử từ năm 2005", en: "Track Record Since 2005" },
      desc: {
        vi: "Với kinh nghiệm thực chiến vững vàng, chúng tôi thấu hiểu mọi yêu cầu khắt khe của ngành y tế.",
        en: "With solid practical experience, we understand all the strict requirements of the healthcare industry."
      }
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: { vi: "Hồ sơ năng lực vượt trội", en: "Outstanding Capability Record" },
      desc: {
        vi: "Minh chứng qua hàng loạt dự án triển khai thành công tại các bệnh viện lớn tuyến trung ương cũng như cơ sở y tế tuyến tỉnh và hệ thống y tế tư nhân cao cấp.",
        en: "Evidenced through numerous successful projects at major central-level hospitals as well as provincial facilities and premium private healthcare systems."
      }
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: { vi: "Đội ngũ kỹ sư tinh nhuệ", en: "Elite Engineering Team" },
      desc: {
        vi: "Các kỹ sư được đào tạo chính quy bài bản, đúng chuyên ngành y sinh và được trực tiếp đào tạo bởi đội ngũ kỹ sư từ hãng sản xuất, có khả năng xử lý các tình huống phức tạp trong thời gian ngắn nhất.",
        en: "Engineers trained systematically in biomedical engineering and directly trained by manufacturer engineering teams, capable of handling complex situations in the shortest time."
      }
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: { vi: "Dịch vụ hậu mãi khác biệt", en: "Distinctive After-Sales Service" },
      desc: {
        vi: "Xây dựng hệ thống bảo hành, bảo trì chủ động với linh kiện chính hãng, đảm bảo thiết bị luôn sẵn sàng ở mức cao nhất.",
        en: "Building a proactive warranty and maintenance system with genuine spare parts, ensuring equipment is always at the highest readiness."
      }
    }
  ];

  return (
    <section className="why-hamedco-section section bg-primary-soft">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <span className="overline">{t("Lý do tin chọn", "Reasons to Trust")}</span>
          <h2>{t("Tại sao các bệnh viện hàng đầu lựa chọn HAMEDCO?", "Why Leading Hospitals Choose HAMEDCO?")}</h2>
          <p>
            {t(
              "Những giá trị thực sự mà HAMEDCO mang lại cho hệ thống y tế Việt Nam",
              "The real values that HAMEDCO brings to Vietnam's healthcare system"
            )}
          </p>
        </div>

        <div className="why-hamedco-grid fade-in-up stagger-1">
          {reasons.map((reason, idx) => (
            <div className="why-hamedco-card" key={idx} style={{ animationDelay: `${idx * 0.12}s` }}>
              <div className="why-hamedco-icon">{reason.icon}</div>
              <h3 className="why-hamedco-title">{reason.title.vi}</h3>
              <p className="why-hamedco-desc">{reason.desc.vi}</p>
            </div>
          ))}
        </div>

        {/* Philips badge */}
        <div className="why-philips-badge fade-in-up">
          <img src="/assets/images/philips-logo.svg" alt="Philips Healthcare" className="why-philips-logo" />
          <div className="why-philips-text">
            <strong>{t("Nhà phân phối chính thức Philips Healthcare", "Official Philips Healthcare Distributor")}</strong>
            <span>{t("Đại diện duy nhất phân phối siêu âm Philips tại Việt Nam", "Exclusive distributor of Philips ultrasound in Vietnam")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
