import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách bảo mật | HAMEDCO",
  description: "Trang thông tin chính sách bảo mật của HAMEDCO.",
  alternates: {
    canonical: "/chinh-sach-bao-mat",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="main-content">
      <section className="section bg-light" style={{ padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 className="h2" style={{ marginBottom: "2rem" }}>Chính sách bảo mật</h1>
          <div className="content-container">
            <p>Tại HAMEDCO, chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo mật thông tin của bạn.</p>
            <h2 className="h4" style={{ marginTop: "2rem" }}>1. Thu thập thông tin</h2>
            <p>Chúng tôi chỉ thu thập thông tin khi bạn tự nguyện gửi qua các biểu mẫu liên hệ hoặc tư vấn. Thông tin bao gồm họ tên, email, số điện thoại và nội dung yêu cầu.</p>
            <h2 className="h4" style={{ marginTop: "2rem" }}>2. Sử dụng thông tin</h2>
            <p>Thông tin của bạn được sử dụng để liên hệ tư vấn, gửi báo giá và thông báo các cập nhật mới nhất về sản phẩm cũng như dịch vụ của HAMEDCO.</p>
            <h2 className="h4" style={{ marginTop: "2rem" }}>3. Bảo mật thông tin</h2>
            <p>Hệ thống nội bộ của HAMEDCO có các quy trình bảo mật nghiêm ngặt để bảo vệ an toàn tuyệt đối dữ liệu của bạn, không chia sẻ cho bên thứ ba ngoại trừ các yêu cầu pháp lý.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
