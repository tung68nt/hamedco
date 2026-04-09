"use client";

import { useLocale } from "../LocaleProvider";

/**
 * OpenLetter — Thư ngỏ từ Ban Lãnh đạo
 */
export default function OpenLetter() {
  const { t } = useLocale();

  return (
    <section className="open-letter-section section bg-white">
      <div className="container" style={{ maxWidth: "900px" }}>
        <div className="open-letter-content fade-in-up" style={{ textAlign: "center" }}>
          <span className="overline">{t("Thư ngỏ", "Open Letter")}</span>
          <h2 style={{ marginBottom: "32px" }}>{t("Kính gửi Quý đối tác và Quý khách hàng", "Dear Partners and Customers")}</h2>

          <div className="open-letter-body" style={{ textAlign: "left", fontSize: "1.125rem", color: "var(--color-gray-700)" }}>
            <p>
              {t(
                "Công ty Cổ phần Trang thiết bị và Vật tư Y tế Hà Nội (HAMEDCO) xin trân trọng gửi tới Quý Khách hàng lời chào, lời chúc sức khỏe, an khang và thịnh vượng.",
                "Hanoi Medical Equipment and Supplies Joint Stock Company (HAMEDCO) sincerely sends our warmest greetings, wishing you health, peace and prosperity."
              )}
            </p>
            <p>
              {t(
                "Với hơn 20 năm hình thành và phát triển trong lĩnh vực y tế, Hamedco luôn mang đến các sản phẩm và dịch vụ đạt chuẩn quốc tế, không chỉ đáp ứng yêu cầu chuyên môn mà còn đảm bảo độ chính xác, góp phần mang lại hy vọng cho người bệnh và hỗ trợ hiệu quả cho đội ngũ y bác sĩ tại các cơ sở y tế từ trung ương đến địa phương.",
                "With over 20 years of establishment and development in the medical field, HAMEDCO always brings products and services meeting international standards, not only meeting professional requirements but also ensuring accuracy, contributing to bringing hope to patients and effectively supporting medical staff at healthcare facilities from central to local levels."
              )}
            </p>
            <p>
              {t(
                "Chúng tôi tự hào là cầu nối đưa công nghệ y tế tiên tiến trên thế giới đến Việt Nam. Việc trở thành Đối tác phân phối chính thức các thiết bị chẩn đoán hình ảnh như hệ thống máy siêu âm, hệ thống chụp CT-scanner, hệ thống chụp cộng hưởng từ (MRI),.. của Philips Healthcare- tập đoàn công nghệ y tế hàng đầu thế giới, hiện diện tại hơn 100 quốc gia, tiên phong trong các giải pháp chẩn đoán hình ảnh, theo dõi bệnh nhân và điều trị. Sự hợp tác này không chỉ khẳng định vị thế của Hamedco mà còn mang đến cho khách hàng tại Việt Nam cơ hội tiếp cận những công nghệ tiên tiến nhất toàn cầu.",
                "We are proud to be the bridge bringing advanced medical technology from the world to Vietnam. Becoming the official distribution partner for diagnostic imaging devices such as ultrasound systems, CT-scanners, magnetic resonance imaging (MRI) systems, etc., of Philips Healthcare - the world's leading health technology corporation, present in over 100 countries, pioneering in diagnostic imaging, patient monitoring, and treatment solutions. This partnership not only affirms HAMEDCO's position but also brings Vietnamese customers the opportunity to access the most advanced global technologies."
              )}
            </p>
            <p>
              {t(
                "Với tinh thần tiên phong, Hamedco cam kết tiếp tục đồng hành cùng Quý đối tác bằng sự tận tâm, chuyên nghiệp và trách nhiệm cao nhất.",
                "With a pioneering spirit, HAMEDCO is committed to continuing to accompany our partners with the utmost dedication, professionalism and responsibility."
              )}
            </p>
          </div>

          <div className="open-letter-signature" style={{ marginTop: "40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="signature-line" style={{ width: "60px", height: "3px", backgroundColor: "var(--color-primary)", marginBottom: "16px" }} />
            <p className="signature-text" style={{ fontSize: "1.125rem", color: "var(--color-gray-900)" }}>
              {t("Trân trọng,", "Respectfully,")}
              <br />
              <strong>{t("Công ty CP Trang thiết bị và Vật tư Y tế Hà Nội", "HAMEDCO")}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
