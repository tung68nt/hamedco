"use client";

import { useLocale } from "../LocaleProvider";

/**
 * About — Historical Timeline of HAMEDCO
 */
const milestones = [
  {
    year: "2005",
    title: {
      vi: "Thành lập công ty",
      en: "Company Founded"
    },
    desc: {
      vi: "Công ty Cổ phần Vật tư và Thiết bị Y tế Hà Nội (HAMEDCO) được thành lập với mục tiêu cung cấp thiết bị y tế tiên tiến cho thị trường Việt Nam.",
      en: "Hanoi Medical Supplies and Equipment Joint Stock Company (HAMEDCO) was established with the goal of providing advanced medical equipment to the Vietnam market."
    }
  },
  {
    year: "2006",
    title: {
      vi: "Đối tác chính thức của Philips",
      en: "Official Philips Partner"
    },
    desc: {
      vi: "Trở thành Nhà phân phối chính thức các dòng máy siêu âm và theo dõi bệnh nhân của Philips tại Việt Nam.",
      en: "Became the official distributor of Philips ultrasound and patient monitoring systems in Vietnam."
    }
  },
  {
    year: "2010",
    title: {
      vi: "Mở rộng dải sản phẩm",
      en: "Expanding Product Range"
    },
    desc: {
      vi: "Hợp tác thêm với các đối tác quốc tế hàng đầu (KLS Martin, Siemens...) nhằm cung cấp giải pháp toàn diện cho phòng mổ.",
      en: "Partnered with leading international partners (KLS Martin, Siemens...) to provide comprehensive operating room solutions."
    }
  },
  {
    year: "2015",
    title: {
      vi: "10 Năm khẳng định vị thế",
      en: "10 Years of Leadership"
    },
    desc: {
      vi: "Hiện diện tại hơn 200 bệnh viện và cơ sở y tế trên toàn quốc. Đạt chứng chỉ ISO 13485:2016.",
      en: "Present in over 200 hospitals and medical facilities nationwide. Achieved ISO 13485:2016 certification."
    }
  },
  {
    year: "2020",
    title: {
      vi: "Chuyển đổi số Y tế",
      en: "Digital Health Transformation"
    },
    desc: {
      vi: "Triển khai các hệ thống chẩn đoán hình ảnh thông minh dựa trên AI và giải pháp Connected Care của Philips.",
      en: "Implemented smart AI-based diagnostic imaging systems and Philips' Connected Care solutions."
    }
  },
  {
    year: "2026",
    title: {
      vi: "Tầm nhìn mới",
      en: "New Vision"
    },
    desc: {
      vi: "Với 20 năm kinh nghiệm, HAMEDCO đặt mục tiêu trở thành đơn vị cung cấp giải pháp y tế số hàng đầu, đồng hành cùng sự phát triển bền vững của nền y tế Việt Nam.",
      en: "With 20 years of experience, HAMEDCO aims to become the leading digital healthcare solution provider, accompanying the sustainable development of Vietnam's healthcare."
    }
  }
];

export default function HistoryTimeline() {
  const { locale } = useLocale();

  return (
    <div className="history-timeline">
      {milestones.map((item, idx) => (
        <div className="history-item fade-in-up" key={item.year} style={{ animationDelay: `${idx * 0.15}s` }}>
          <div className="history-marker">
            <div className="history-year">{item.year}</div>
            <div className="history-dot" />
          </div>
          <div className="history-content">
            <h4 className="history-title">{item.title[locale]}</h4>
            <p className="history-desc">{item.desc[locale]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
