import { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import "@/app/css/article.css";

export const metadata: Metadata = {
  title: "Chính sách bảo mật | HAMEDCO",
  description: "Chính sách bảo mật và quyền riêng tư của HAMEDCO - Công ty CP Vật tư và Thiết bị Y tế Hà Nội.",
  alternates: {
    canonical: "/chinh-sach-bao-mat",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Chính sách bảo mật"
        description="Cam kết bảo vệ tuyệt đối quyền riêng tư và thông tin cá nhân của quý khách hàng, đối tác."
        breadcrumbs={[{ label: "Chính sách bảo mật" }]}
      />
      <main className="main-content">
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="article-content">
              <p className="lead">
                <strong>Công ty Cổ phần Vật tư và Thiết bị Y tế Hà Nội (HAMEDCO)</strong> cam kết bảo vệ tuyệt đối quyền riêng tư và thông tin cá nhân của quý khách hàng, đối tác.
              </p>
              <p>Chính sách này mô tả cách thức chúng tôi thu thập, sử dụng và bảo vệ thông tin khi quý khách tương tác với hệ thống website và dịch vụ của chúng tôi.</p>

              <h2>1. Mục đích thu thập thông tin</h2>
              <p>HAMEDCO thu thập thông tin nhằm mục đích:</p>
              <ul>
                <li><strong>Tư vấn giải pháp:</strong> Cung cấp thông tin chi tiết về thiết bị và giải pháp y tế phù hợp với nhu cầu của cơ sở y tế.</li>
                <li><strong>Hỗ trợ kỹ thuật:</strong> Thực hiện các yêu cầu bảo trì, bảo hành và hướng dẫn vận hành thiết bị Philips chính hãng.</li>
                <li><strong>Giao dịch & Hợp đồng:</strong> Xử lý các thủ tục báo giá, ký kết hợp tác và triển khai dự án.</li>
                <li><strong>Nâng cao trải nghiệm:</strong> Cập nhật các công nghệ y tế mới nhất và các chương trình ưu đãi dành riêng cho đối tác.</li>
              </ul>

              <h2>2. Phạm vi thu thập thông tin</h2>
              <p>Các thông tin chúng tôi thu thập bao gồm:</p>
              <ul>
                <li>Họ và tên cá nhân/người đại diện.</li>
                <li>Tên cơ sở y tế/Bệnh viện/Tổ chức.</li>
                <li>Thông tin liên hệ: Số điện thoại, Email, Địa chỉ công tác.</li>
                <li>Nội dung yêu cầu tư vấn hoặc thông tin về dòng thiết bị đang quan tâm.</li>
              </ul>

              <h2>3. Thời gian lưu trữ thông tin</h2>
              <p>Thông tin cá nhân của khách hàng sẽ được lưu trữ và bảo mật trên hệ thống của HAMEDCO cho đến khi có yêu cầu hủy bỏ từ phía khách hàng hoặc theo quy định của pháp luật.</p>
              <p>Trong mọi trường hợp, thông tin sẽ được lưu giữ để đảm bảo quyền lợi bảo hành và bảo trì trọn đời cho các thiết bị y tế đã cung cấp.</p>

              <h2>4. Cam kết bảo mật thông tin</h2>
              <ul>
                <li><strong>Không chia sẻ cho bên thứ ba:</strong> HAMEDCO cam kết không bán, cho thuê hoặc chia sẻ thông tin cá nhân cho bất kỳ bên thứ ba nào khi chưa có sự đồng ý của khách hàng, ngoại trừ trường hợp cung cấp cho nhà sản xuất (như Philips) để đăng ký bảo hành chính hãng toàn cầu.</li>
                <li><strong>An toàn dữ liệu:</strong> Chúng tôi áp dụng các biện pháp kỹ thuật và an ninh tiên tiến nhất để bảo vệ thông tin khỏi sự truy cập, thay đổi hoặc phá hoại trái phép.</li>
                <li><strong>Tuân thủ pháp luật:</strong> Việc thu thập và sử dụng thông tin tuân thủ nghiêm ngặt các quy định về bảo vệ dữ liệu cá nhân theo pháp luật Việt Nam.</li>
              </ul>

              <h2>5. Quyền của khách hàng</h2>
              <p>Quý khách có quyền:</p>
              <ul>
                <li>Yêu cầu truy cập, sửa đổi hoặc xóa bỏ thông tin cá nhân đã cung cấp.</li>
                <li>Từ chối nhận các thông tin quảng cáo hoặc bản tin công nghệ y tế từ chúng tôi bất kỳ lúc nào.</li>
                <li>Yêu cầu giải trình về cách thức thông tin được sử dụng.</li>
              </ul>

              <h2>6. Thông tin liên hệ hỗ trợ</h2>
              <p>Mọi thắc mắc hoặc yêu cầu liên quan đến chính sách bảo mật, quý khách vui lòng liên hệ:</p>
              <blockquote>
                <p><strong>CÔNG TY CỔ PHẦN VẬT TƯ VÀ THIẾT BỊ Y TẾ HÀ NỘI (HAMEDCO)</strong></p>
                <p><strong>Địa chỉ:</strong> Tầng 5, Tòa nhà Vimeco, Lô E9, Phạm Hùng, Cầu Giấy, Hà Nội.</p>
                <p><strong>Hotline:</strong> +84 86 9009 486</p>
                <p><strong>Email:</strong> info@hamedco.vn</p>
              </blockquote>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}