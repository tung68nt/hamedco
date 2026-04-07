"use client";

import { useState } from "react";
import { useLocale } from "../components/LocaleProvider";

interface FaqItem {
  question: { vi: string; en: string };
  answer: { vi: string; en: string };
}

const FAQ_DATA: FaqItem[] = [
  {
    question: {
      vi: "HAMEDCO đang phân phối sản phẩm của thương hiệu nào?",
      en: "Which brands does HAMEDCO distribute?"
    },
    answer: {
      vi: "HAMEDCO tự hào là đối tác chiến lược và nhà phân phối độc quyền các giải pháp thiết bị y tế của <strong>Philips Healthcare (Hà Lan)</strong> tại Việt Nam. Toàn bộ thiết bị do chúng tôi cung cấp đều là hàng nhập khẩu chính hãng 100%, đi kèm đầy đủ chứng nhận chất lượng quốc tế và được bảo hành theo tiêu chuẩn toàn cầu của Philips.",
      en: "HAMEDCO is proud to be a strategic partner and exclusive distributor of <strong>Philips Healthcare (Netherlands)</strong> medical equipment solutions in Vietnam. All equipment we supply is 100% genuine imported goods, comes with full international quality certifications, and is covered by Philips' global warranty standards."
    }
  },
  {
    question: {
      vi: "Chế độ bảo hành và bảo trì như thế nào?",
      en: "What are the warranty and maintenance policies?"
    },
    answer: {
      vi: "Tất cả sản phẩm được bảo hành chính hãng từ 12–24 tháng. HAMEDCO cung cấp dịch vụ bảo trì định kỳ theo lịch, kho linh kiện dự phòng tại Hà Nội và TP.HCM, và cam kết phản hồi yêu cầu kỹ thuật trong vòng 4 giờ làm việc.",
      en: "All products come with a manufacturer's warranty of 12–24 months. HAMEDCO provides scheduled maintenance services, spare parts stock in Hanoi and Ho Chi Minh City, and is committed to responding to technical requests within 4 business hours."
    }
  },
  {
    question: {
      vi: "HAMEDCO có hỗ trợ đào tạo sử dụng thiết bị không?",
      en: "Does HAMEDCO provide training on equipment usage?"
    },
    answer: {
      vi: "Có. HAMEDCO cung cấp chương trình đào tạo toàn diện cho đội ngũ y bác sĩ và kỹ thuật viên, bao gồm đào tạo tại chỗ, tài liệu hướng dẫn sử dụng tiếng Việt, video hướng dẫn, và cấp chứng nhận hoàn thành khóa học.",
      en: "Yes. HAMEDCO provides a comprehensive training program for medical staff and technicians, including on-site training, Vietnamese-language instruction manuals, instructional videos, and certification upon completion."
    }
  },
  {
    question: {
      vi: "Làm thế nào để yêu cầu báo giá?",
      en: "How do I request a quote?"
    },
    answer: {
      vi: "Quý khách có thể yêu cầu báo giá qua form trên website, gọi hotline 086 900 9486, hoặc gửi email đến info@hamedco.vn. Đội ngũ HAMEDCO sẽ phản hồi trong vòng 24 giờ làm việc với báo giá chi tiết và tư vấn giải pháp phù hợp.",
      en: "You can request a quote via the form on our website, call our hotline at 086 900 9486, or send an email to info@hamedco.vn. The HAMEDCO team will respond within 24 business hours with a detailed quote and advice on the most suitable solution."
    }
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0); 
  const { locale } = useLocale();

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="faq-list fade-in-up">
      {FAQ_DATA.map((faq, i) => (
        <div className={`faq-item${openIndex === i ? " open" : ""}`} key={i}>
          <button
            className="faq-question"
            aria-expanded={openIndex === i}
            aria-controls={`faq-${i}`}
            id={`faq-${i}-btn`}
            onClick={() => toggle(i)}
          >
            {faq.question[locale]}
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className="faq-answer-wrapper"
            id={`faq-${i}`}
            role="region"
            aria-labelledby={`faq-${i}-btn`}
          >
            <div 
              className="faq-answer-content"
              dangerouslySetInnerHTML={{ __html: faq.answer[locale] }} 
            />
          </div>
        </div>
      ))}
    </div>
  );
}
