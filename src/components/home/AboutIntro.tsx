"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";

export default function AboutIntro() {
  const { t } = useLocale();

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="split">
          <div className="fade-in-up">
            <span className="overline">{t("Về HAMEDCO", "About HAMEDCO")}</span>
            <h2>{t(
              "HAMEDCO – Nhà cung cấp giải pháp thiết bị y tế công nghệ cao hàng đầu Việt Nam. Đối tác chiến lược của Philips Healthcare",
              "HAMEDCO – Vietnam's Leading High-Tech Medical Equipment Solutions Provider. Strategic Partner of Philips Healthcare"
            )}</h2>
            <p className="body-lg" style={{ margin: "20px 0", color: "var(--color-gray-500)" }}>
              {t(
                "Thành lập từ năm 2005, Công ty Cổ phần Vật tư và Thiết bị Y tế Hà Nội (HAMEDCO) đã khẳng định vị thế vững chắc với hơn 20 năm kinh nghiệm trong ngành y tế. Đánh dấu bước ngoặt quan trọng vào năm 2022, chúng tôi chính thức trở thành Nhà phân phối của Philips tại Việt Nam. Sự kết hợp giữa bề dày am hiểu thị trường và công nghệ tiên tiến từ Philips giúp HAMEDCO cung cấp các hệ thống chẩn đoán hình ảnh, giải pháp hồi sức cấp cứu vượt trội. Chúng tôi tập trung vào đội ngũ kỹ sư được đào tạo bài bản và khắt khe, cam kết đồng hành cùng các bệnh viện để tối ưu vận hành, nâng cao độ chính xác trong chẩn đoán và cải thiện chất lượng điều trị.",
                "Established in 2005, Hanoi Medical Supplies and Equipment Joint Stock Company (HAMEDCO) has firmly established its position with over 20 years of experience in the healthcare industry. Marking an important milestone in 2022, we officially became the distributor of Philips in Vietnam. The combination of deep market knowledge and advanced technology from Philips enables HAMEDCO to provide outstanding imaging diagnostic systems and critical care solutions. We focus on a team of rigorously trained engineers, committed to partnering with hospitals to optimize operations, improve diagnostic accuracy and enhance treatment quality."
              )}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/gioi-thieu" className="btn btn-primary btn-md">{t("Tìm hiểu thêm", "Learn More")}</Link>
              <Link href="/doi-tac" className="btn btn-outline btn-md">{t("Đối tác của chúng tôi", "Our Partners")}</Link>
            </div>
          </div>
          <div className="about-intro-image fade-in-up stagger-2">
            <img src="/assets/images/products/epiq-elite.jpg" alt="Philips EPIQ Elite - Máy siêu âm cao cấp" width="600" height="450" loading="lazy" style={{ objectFit: "cover", borderRadius: "12px" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
