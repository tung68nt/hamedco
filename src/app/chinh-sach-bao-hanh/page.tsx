import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import "@/app/css/article.css";

export const metadata: Metadata = {
  title: "Chính sách bảo hành | HAMEDCO",
  description: "Chính sách bảo hành và hậu mãi toàn diện của HAMEDCO - Đảm bảo sự an tâm tuyệt đối cho quý bệnh viện và phòng khám.",
  alternates: {
    canonical: "/chinh-sach-bao-hanh",
  },
};

export default function WarrantyPolicyPage() {
  return (
    <>
      <PageHero
        title="Chính sách bảo hành"
        description="Tại HAMEDCO, chúng tôi thấu hiểu rằng mỗi phút giây thiết bị y tế ngưng hoạt động đều ảnh hưởng trực tiếp đến sức khỏe bệnh nhân."
        breadcrumbs={[{ label: "Chính sách bảo hành" }]}
      />
      <main className="main-content">
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="article-content">
              <p className="lead">
                Tại <strong>HAMEDCO</strong>, chúng tôi thấu hiểu rằng mỗi phút giây thiết bị y tế ngưng hoạt động đều ảnh hưởng trực tiếp đến sức khỏe bệnh nhân. Vì vậy, chính sách bảo hành của chúng tôi được xây dựng dựa trên tiêu chuẩn khắt khe nhất của <strong>Philips Healthcare</strong>, đảm bảo sự an tâm tuyệt đối cho quý bệnh viện và phòng khám.
              </p>

              <h2>1. Thời hạn bảo hành</h2>
              <ul>
                <li><strong>Thiết bị chính:</strong> Bảo hành từ <strong>12 – 24 tháng</strong> theo tiêu chuẩn của nhà sản xuất (tùy dòng máy).</li>
                <li><strong>Phụ kiện & Đầu dò:</strong> Bảo hành theo quy định cụ thể của từng chủng loại (thường từ 06 – 12 tháng).</li>
                <li><strong>Thời điểm bắt đầu:</strong> Tính từ ngày hai bên ký Biên bản nghiệm thu và bàn giao thiết bị.</li>
              </ul>

              <h2>2. Cam kết thời gian phản hồi (SLA)</h2>
              <p>Đây là cam kết vàng về chất lượng dịch vụ của HAMEDCO:</p>
              <ul>
                <li><strong>Hỗ trợ kỹ thuật 24/7:</strong> Tiếp nhận thông báo sự cố qua Hotline kỹ thuật bất kể ngày nghỉ hay lễ Tết.</li>
                <li><strong>Tư vấn từ xa:</strong> Trong vòng <strong>30 phút</strong>, chuyên gia kỹ thuật sẽ liên hệ để hướng dẫn xử lý các lỗi phần mềm hoặc vận hành cơ bản.</li>
                <li><strong>Xử lý tại chỗ:</strong> Trong vòng <strong>04 – 08 giờ làm việc</strong> (tại Hà Nội & TP.HCM) và trong vòng <strong>24 giờ</strong> (tại các tỉnh thành khác), kỹ sư của HAMEDCO sẽ có mặt trực tiếp để kiểm tra và sửa chữa.</li>
              </ul>

              <h2>3. Đội ngũ kỹ thuật chuyên sâu</h2>
              <ul>
                <li><strong>Chứng nhận chính hãng:</strong> 100% kỹ sư tại HAMEDCO được đào tạo bài bản và cấp chứng chỉ chuyên môn bởi Philips và các hãng sản xuất quốc tế.</li>
                <li><strong>Trình độ cao:</strong> Đội ngũ kỹ sư giàu kinh nghiệm, am hiểu sâu sắc về cả phần cứng lẫn các thuật toán phần mềm của hệ thống siêu âm, hồi sức cấp cứu.</li>
              </ul>

              <h2>4. Phạm vi bảo hành</h2>
              <ul>
                <li><strong>Hạng mục bảo hành:</strong> Khắc phục mọi lỗi kỹ thuật, hư hỏng do linh kiện hoặc lỗi trong quá trình sản xuất.</li>
                <li><strong>Hình thức bảo hành:</strong> Thay thế linh kiện mới chính hãng hoặc sửa chữa miễn phí hoàn toàn trong thời gian bảo hành.</li>
                <li><strong>Kiểm tra định kỳ:</strong> Trong thời gian bảo hành, HAMEDCO thực hiện bảo trì, bảo dưỡng định kỳ <strong>03 – 06 tháng/lần</strong> để đảm bảo máy luôn hoạt động ở trạng thái tối ưu.</li>
              </ul>

              <h2>5. Hỗ trợ thiết bị thay thế (Dành cho dự án trọng điểm)</h2>
              <p>Trong trường hợp sự cố phức tạp cần thời gian sửa chữa kéo dài, HAMEDCO có chính sách <strong>cho mượn thiết bị tương đương</strong> để bệnh viện duy trì hoạt động thăm khám, đảm bảo không làm gián đoạn quy trình phục vụ bệnh nhân.</p>

              <h2>6. Các trường hợp không thuộc phạm vi bảo hành</h2>
              <ul>
                <li>Thiết bị hỏng hóc do thiên tai, hỏa hoạn, lũ lụt hoặc do nguồn điện không ổn định vượt quá tiêu chuẩn cho phép.</li>
                <li>Sử dụng không đúng theo hướng dẫn vận hành của nhà sản xuất hoặc tự ý tháo dỡ, sửa chữa bởi các đơn vị không được HAMEDCO ủy quyền.</li>
                <li>Các vật tư tiêu hao trong quá trình sử dụng.</li>
              </ul>

              <h2>7. Dịch vụ sau bảo hành (Dành cho khách hàng thân thiết)</h2>
              <p>Sau khi kết thúc thời hạn bảo hành chính hãng, HAMEDCO cung cấp các gói <strong>Hợp đồng bảo trì dài hạn (Service Contract)</strong> với chi phí ưu đãi, bao gồm:</p>
              <ul>
                <li>Cung cấp linh kiện chính hãng giá gốc.</li>
                <li>Nâng cấp phần mềm hệ thống định kỳ.</li>
                <li>Hỗ trợ kỹ thuật ưu tiên hàng đầu.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}