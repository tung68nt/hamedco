import DeviceCategoryPage from "../DeviceCategoryPage";

export const metadata = {
  title: "Máy X-quang Kỹ Thuật Số Philips | HAMEDCO",
  description: "Hệ thống X-quang và soi huỳnh quang Philips đa chức năng. Quy trình không lưới SkyFlow và chất lượng hình ảnh vượt trội.",
};

export default function XrayPage() {
  return <DeviceCategoryPage deviceType="x-quang" />;
}
