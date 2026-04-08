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
      title: { vi: "Bề dày kinh nghiệm & Năng lực được kiểm chứng", en: "Extensive Experience & Proven Capability" },
      desc: {
        vi: "Hơn 20 năm kinh nghiệm thực tiễn: Am hiểu thấu đáo quy trình vận hành và các tiêu chuẩn khắt khe nhất của ngành y tế tại Việt Nam. Hiện diện tại các cơ sở y tế trọng điểm: Năng lực tư vấn và triển khai đã được khẳng định qua hàng loạt dự án lớn tại các bệnh viện tuyến trung ương, tuyến tỉnh và hệ thống y tế tư nhân cao cấp.",
        en: "Over 20 years of practical experience: Deep understanding of operating procedures and the strictest standards of the healthcare industry in Vietnam. Presence in key medical facilities: Consulting and implementation capacity has been affirmed through a series of large projects at central, provincial hospitals and high-end private healthcare systems."
      }
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: { vi: "Chuẩn mực công nghệ & Pháp lý minh bạch", en: "Technology Standards & Transparent Legality" },
      desc: {
        vi: "Thiết bị chính hãng, đẳng cấp toàn cầu: Phân phối các thiết bị chẩn đoán hình ảnh tiên tiến nhất từ các thương hiệu hàng đầu thế giới như Philips. Hồ sơ pháp lý chuẩn chỉnh: Cung cấp minh bạch và đầy đủ các giấy tờ chứng nhận (CO, CQ) cùng bộ hồ sơ trang thiết bị y tế (TTBYT) theo đúng quy chuẩn cao nhất của Bộ Y tế.",
        en: "Genuine, world-class equipment: Distributing the most advanced diagnostic imaging equipment from world-leading brands like Philips. Standard legal documents: Transparently providing complete certification documents (CO, CQ) alongside the medical equipment dossier meeting the highest standards of the Ministry of Health."
      }
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: { vi: "Giải pháp vận hành & Đồng hành trọn đời", en: "Operational Solutions & Lifetime Accompaniment" },
      desc: {
        vi: "Đội ngũ kỹ sư tinh nhuệ, phản ứng 24/7: Được đào tạo bài bản trực tiếp từ hãng. Bảo trì chủ động định kỳ với 100% linh kiện chính hãng. Tổ chức đào tạo chuyên sâu và liên tục, giúp đội ngũ y bác sĩ khai thác triệt để hiệu năng máy móc.",
        en: "Elite engineering team, 24/7 response: Systematically trained directly by the manufacturer. Proactive scheduled maintenance with 100% genuine parts. Organizing intensive and continuous training, helping doctors fully utilize machine performance."
      }
    }
  ];

  return (
    <section className="why-hamedco-section section bg-primary-soft">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <span className="overline">{t("Lý do tin chọn", "Reasons to Trust")}</span>
          <h2>{t("Vì sao các bệnh viện hàng đầu lựa chọn HAMEDCO?", "Why Leading Hospitals Choose HAMEDCO?")}</h2>
          <p>
            {t(
              "Không chỉ cung cấp thiết bị, HAMEDCO được lựa chọn bởi năng lực bảo chứng cho sự vận hành ổn định, an toàn và xuyên suốt của toàn bộ hệ thống y tế.",
              "More than just an equipment supplier, HAMEDCO is chosen for our guaranteed capacity for stable, safe, and continuous operation of the entire healthcare system."
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

        {/* Highlight quote */}
        <div className="why-quote fade-in-up text-center" style={{ marginTop: "40px", marginBottom: "40px", fontStyle: "italic", fontWeight: 500, color: "var(--color-primary-dark)", fontSize: "1.125rem" }}>
          <p>"{t("HAMEDCO không chỉ bán thiết bị — chúng tôi chịu trách nhiệm cho hiệu quả vận hành của toàn bộ hệ thống.", "HAMEDCO does not just sell equipment — we take responsibility for the operational effectiveness of the entire system.")}"</p>
        </div>

        {/* Philips badge */}
        <div className="why-philips-badge fade-in-up">
          <img src="https://medicaldialogues.in/wp-content/uploads/2015/08/Philips_Logo_09.png" alt="Philips Healthcare" className="why-philips-logo" />
          <div className="why-philips-text">
            <strong>{t("Nhà phân phối chính thức Philips Healthcare", "Official Philips Healthcare Distributor")}</strong>
            <span>{t("Đại diện phân phối sản phẩm siêu âm Philips tại Việt Nam", "Distributor of Philips ultrasound products in Vietnam")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
