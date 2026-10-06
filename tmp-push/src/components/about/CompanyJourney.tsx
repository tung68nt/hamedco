"use client";

import { useLocale } from "../LocaleProvider";

/**
 * CompanyJourney — Hành trình hơn 2 thập kỷ khẳng định vị thế dẫn đầu
 */
export default function CompanyJourney() {
  const { t, locale } = useLocale();

  const milestones = [
    {
      year: "2005",
      title: { vi: "Khởi nguồn sứ mệnh", en: "Origins of the Mission" },
      desc: {
        vi: "Thành lập HAMEDCO, đặt những viên gạch đầu tiên trong lĩnh vực vật tư y tế và dịch vụ kỹ thuật. Đây là giai đoạn xây dựng nền tảng chuyên môn vững chắc và thấu hiểu sâu sắc nhu cầu thực tế của ngành y tế Việt Nam.",
        en: "Established HAMEDCO, laying the first bricks in the field of medical supplies and technical services. This was the stage of building a solid professional foundation and deeply understanding the practical needs of the Vietnamese healthcare sector."
      }
    },
    {
      year: "2013",
      title: { vi: "Chuyển mình chiến lược", en: "Strategic Transformation" },
      desc: {
        vi: "Năm 2013 - Hamedco quyết định tái cấu trúc hoạt động, xây dựng lại nền tảng chiến lược và phát triển, chuyển hướng mô hình kinh doanh sang mảng thiết bị y tế",
        en: "In 2013, HAMEDCO decided to restructure its operations, rebuild its strategic foundation and development, and shift its business model to the medical equipment sector."
      }
    },
    {
      year: "2016",
      title: { vi: "Mở rộng danh mục sản phẩm", en: "Expanding Product Portfolio" },
      desc: {
        vi: "Hợp tác với các đối tác quốc tế hàng đầu từ Châu Âu, Mỹ và Nhật Bản để cung cấp giải pháp toàn diện cho các bệnh viện và cơ sở y tế đầu ngành.",
        en: "Collaborated with leading international partners from Europe, the US, and Japan to provide comprehensive solutions for top hospitals and medical facilities."
      }
    },
    {
      year: "2020",
      title: { vi: "Mở rộng quy mô kinh doanh", en: "Business Expansion" },
      desc: {
        vi: "Công ty chính thức mở rộng thị trường hoạt động vào phía nam, mở thêm chi nhánh tại HCM khẳng định năng lực triển khai dự án và hỗ trợ kỹ thuật thần tốc trên phạm vi toàn quốc, xóa bỏ mọi rào cản về địa lý trong phục vụ khách hàng.",
        en: "The company officially expanded its operations to the south, opening a new branch in HCMC, affirming its project implementation and rapid technical support capabilities nationwide, eliminating all geographical barriers in serving customers."
      }
    },
    {
      year: "2022",
      title: { vi: "Khẳng định vị thế Đối tác chiến lược", en: "Affirming Strategic Partner Position" },
      desc: {
        vi: "Trở thành nhà phân phối chính thức của Philips Healthcare. Cột mốc vàng khẳng định uy tín tuyệt đối về tiêu chuẩn kỹ thuật, năng lực vận hành và sự tin tưởng từ tập đoàn công nghệ y tế hàng đầu thế giới trong phân khúc cao cấp.",
        en: "Became the official distributor of Philips Healthcare. A golden milestone affirming absolute prestige in technical standards, operational capacity, and the trust from the world's leading health technology corporation in the high-end segment."
      }
    },
    {
      year: "2025+",
      title: { vi: "Tầm nhìn vươn tầm khu vực", en: "Regional Vision" },
      desc: {
        vi: "Hướng đến trở thành tập đoàn giải pháp y tế đa ngành hàng đầu tại Việt Nam và khu vực Đông Nam Á.",
        en: "Aiming to become the leading multi-sector healthcare solutions group in Vietnam and Southeast Asia."
      }
    }
  ];

  const capabilities = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: { vi: "Kinh nghiệm", en: "Experience" },
      desc: {
        vi: "Am hiểu sâu sắc luật đấu thầu, quy trình triển khai dự án và các tiêu chuẩn khắt khe trong lắp đặt, vận hành thiết bị y tế chuyên sâu.",
        en: "Deep expertise in procurement law, project implementation processes and strict standards for medical equipment installation and operation."
      }
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: { vi: "Mạng lưới", en: "Network" },
      desc: {
        vi: "Đối tác phân phối chiến lược của nhiều thương hiệu thiết bị y tế hàng đầu đến từ Châu Âu, Mỹ và Nhật Bản.",
        en: "Strategic distribution partner of leading medical equipment brands from Europe, USA and Japan."
      }
    }
  ];

  return (
    <section className="journey-section section bg-gray-50">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <span className="overline">{t("Hành trình phát triển", "Our Journey")}</span>
          <h2>{t("Hành trình hơn 2 thập kỷ: Khẳng định vị thế dẫn đầu", "Over 2 Decades: Establishing Our Leadership Position")}</h2>
          <p className="journey-intro">
            {t(
              "Thành lập ngày 05/09/2005, HAMEDCO đã có hơn 20 năm kiên định với sứ mệnh mang những công nghệ y tế tiên tiến đến hệ thống chăm sóc sức khỏe Việt Nam.",
              "Established on September 5, 2005, HAMEDCO has been steadfast for over 20 years in its mission to bring advanced medical technology to Vietnam's healthcare system."
            )}
          </p>
        </div>

        {/* Timeline */}
        <div className="journey-timeline">
          {milestones.map((item, idx) => (
            <div className="journey-item fade-in-up" key={item.year} style={{ animationDelay: `${idx * 0.12}s` }}>
              <div className="journey-year-wrap">
                <div className="journey-year">{item.year}</div>
                <div className="journey-connector" />
              </div>
              <div className="journey-card">
                <h4 className="journey-title">{item.title[locale]}</h4>
                <p className="journey-desc">{item.desc[locale]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="journey-capabilities fade-in-up">
          <h3 className="journey-capabilities-title">{t("Năng lực cốt lõi", "Core Capabilities")}</h3>
          <div className="journey-capabilities-grid">
            {capabilities.map((cap, idx) => (
              <div className="journey-cap-card" key={idx}>
                <div className="journey-cap-icon">{cap.icon}</div>
                <h4>{cap.title[locale]}</h4>
                <p>{cap.desc[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
