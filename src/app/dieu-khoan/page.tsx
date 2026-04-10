import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng | HAMEDCO",
  description: "Trang thông tin điều khoản và điều kiện sử dụng của HAMEDCO.",
  alternates: {
    canonical: "/dieu-khoan",
  },
};

export default function TermsPage() {
  return (
    <main className="main-content">
      <section className="section bg-light" style={{ padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 className="h2" style={{ marginBottom: "2rem" }}>Điều khoản sử dụng</h1>
          <div className="content-container">
            <p>Vui lòng đọc kỹ các điều khoản sau trước khi sử dụng website của HAMEDCO.</p>
            <h2 className="h4" style={{ marginTop: "2rem" }}>1. Chấp nhận sử dụng</h2>
            <p>Việc truy cập và sử dụng website đồng nghĩa với việc bạn đồng ý với mọi điều khoản quy định tại đây.</p>
            <h2 className="h4" style={{ marginTop: "2rem" }}>2. Bản quyền và Sở hữu trí tuệ</h2>
            <p>Toàn bộ nội dung, hình ảnh, văn bản và thiết kế trên website đều thuộc quyền sở hữu của HAMEDCO và các đối tác. Vui lòng không sao chép khi chưa có sự đồng ý.</p>
            <h2 className="h4" style={{ marginTop: "2rem" }}>3. Trách nhiệm người dùng</h2>
            <p>Bạn không được phép thực hiện các hành động có thể gây hại, xâm nhập hoặc làm gián đoạn hệ thống website của chúng tôi.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
