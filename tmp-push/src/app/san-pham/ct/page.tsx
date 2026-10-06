import DeviceCategoryPage from "../DeviceCategoryPage";

export const metadata = {
  title: "Máy CT Scanner Philips - Chụp cắt lớp vi tính | HAMEDCO",
  description: "Trang bị phòng khám và bệnh viện với máy CT Scanner Philips. Tái tạo AI Precise Image, giảm liều tia và tối ưu quy trình chẩn đoán.",
};

export default function CTPage() {
  return <DeviceCategoryPage deviceType="ct" />;
}
