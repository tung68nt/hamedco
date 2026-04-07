export interface Category {
  id: string;
  slug: string;
  name: { vi: string; en: string };
  description: { vi: string; en: string };
  type: "main" | "segment"; // helps distinguish top-level categories vs specific subgroups
}

export const CATEGORIES: Category[] = [
  {
    id: "chan-doan-hinh-anh",
    slug: "chan-doan-hinh-anh",
    name: { vi: "Chẩn đoán hình ảnh (MRI, CT)", en: "Medical Imaging (MRI, CT)" },
    description: {
      vi: "Hệ thống chẩn đoán hình ảnh cao cấp bao gồm Cộng hưởng từ (MRI) và Cắt lớp vi tính (CT).",
      en: "Advanced medical imaging systems including Magnetic Resonance Imaging (MRI) and Computed Tomography (CT).",
    },
    type: "main",
  },
  {
    id: "sieu-am-y-te",
    slug: "sieu-am-y-te",
    name: { vi: "Siêu âm y tế", en: "Ultrasound" },
    description: {
      vi: "Các giải pháp siêu âm hiện đại, từ thiết bị xách tay đến hệ thống chuyên dụng cho tim mạch và sản khoa.",
      en: "Modern ultrasound solutions, from portable devices to specialized systems for cardiology and obstetrics.",
    },
    type: "main",
  },
  {
    id: "theo-doi-benh-nhan",
    slug: "theo-doi-benh-nhan",
    name: { vi: "Theo dõi bệnh nhân (ICU)", en: "Patient Monitoring (ICU)" },
    description: {
      vi: "Giải pháp theo dõi bệnh nhân toàn diện tại giường và khu vực hồi sức cấp cứu.",
      en: "Comprehensive patient monitoring solutions at the bedside and in the intensive care unit.",
    },
    type: "main",
  },
  {
    id: "giai-phap-tin-hoc",
    slug: "giai-phap-tin-hoc",
    name: { vi: "Giải pháp Tin học Y tế", en: "Healthcare Informatics" },
    description: {
      vi: "Kết nối dữ liệu y khoa, quản lý hình ảnh PACS, tối ưu hoá quy trình làm việc lâm sàng.",
      en: "Connecting medical data, PACS imaging management, and optimizing clinical workflows.",
    },
    type: "main",
  },

  /* ─── PHÂN KHÚC (SEGMENTS) DÀNH CHO SIÊU ÂM ─── */
  {
    id: "di-dong",
    slug: "di-dong",
    name: { vi: "Siêu âm di động", en: "Portable Ultrasound" },
    description: {
      vi: "Các thiết bị siêu âm nhỏ gọn, linh hoạt, phù hợp thăm khám tại giường và cấp cứu.",
      en: "Compact, flexible ultrasound devices suitable for bedside examinations and emergencies.",
    },
    type: "segment",
  },
  {
    id: "tam-trung",
    slug: "tam-trung",
    name: { vi: "Phân khúc Tầm trung", en: "Mid-range Segment" },
    description: {
      vi: "Hệ thống siêu âm mang lại hiệu suất đáng tin cậy phục vụ khối lượng bệnh nhân lớn mỗi ngày.",
      en: "Ultrasound systems delivering reliable performance for high daily patient throughput.",
    },
    type: "segment",
  },
  {
    id: "cao-cap",
    slug: "cao-cap",
    name: { vi: "Phân khúc Cao cấp", en: "Premium Segment" },
    description: {
      vi: "Nền tảng siêu âm tiên phong, trang bị công nghệ AI và hình ảnh vượt trội cho chẩn đoán phức tạp.",
      en: "Pioneering ultrasound platforms equipped with AI and superior imaging for complex diagnoses.",
    },
    type: "segment",
  },
];
