import DeviceCategoryPage from "../DeviceCategoryPage";

export const metadata = {
  title: "Máy MRI Cộng Hưởng Từ Philips - Chất lượng hình ảnh đỉnh cao | HAMEDCO",
  description: "Cung cấp máy MRI Philips với nam châm BlueSeal không helium, tăng tốc độ quét và mang lại sự chính xác tuyệt đối.",
};

export default function MRIPage() {
  return <DeviceCategoryPage deviceType="mri" />;
}
