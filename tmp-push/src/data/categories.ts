export interface Category {
  id: string;
  slug: string;
  name: { vi: string; en: string };
  description: { vi: string; en: string };
  icon?: string; // SVG path for navbar mega-menu
  type: "device-type" | "price-tier";
}

/* ═══ LOẠI THIẾT BỊ (Device Types) — dùng cho navbar submenu + routing ═══ */
export const DEVICE_TYPES: Category[] = [
  {
    id: "sieu-am",
    slug: "sieu-am",
    name: { vi: "Siêu âm", en: "Ultrasound" },
    description: {
      vi: "Hệ thống siêu âm từ cầm tay đến cao cấp cho mọi chuyên khoa",
      en: "Ultrasound systems from handheld to premium for all specialties",
    },
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    type: "device-type",
  },
  {
    id: "ct",
    slug: "ct",
    name: { vi: "CT Scanner", en: "CT Scanner" },
    description: {
      vi: "Hệ thống chụp cắt lớp vi tính thế hệ mới",
      en: "Next-generation computed tomography systems",
    },
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    type: "device-type",
  },
  {
    id: "mri",
    slug: "mri",
    name: { vi: "MRI", en: "MRI" },
    description: {
      vi: "Hệ thống cộng hưởng từ hiệu suất cao",
      en: "High-performance magnetic resonance imaging systems",
    },
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    type: "device-type",
  },
  {
    id: "x-quang",
    slug: "x-quang",
    name: { vi: "X-quang", en: "Radiography" },
    description: {
      vi: "Hệ thống X-quang kỹ thuật số linh hoạt",
      en: "Flexible digital radiography systems",
    },
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    type: "device-type",
  },
];

/* ═══ PHÂN KHÚC GIÁ (Price Tiers) — dùng cho filter bên trong trang ═══ */
export const PRICE_TIERS: Category[] = [
  {
    id: "pho-thong",
    slug: "pho-thong",
    name: { vi: "Phổ thông", en: "Entry-level" },
    description: {
      vi: "Giải pháp hiệu quả cho phòng khám và bệnh viện tuyến đầu",
      en: "Cost-effective solutions for clinics and frontline hospitals",
    },
    type: "price-tier",
  },
  {
    id: "tam-trung",
    slug: "tam-trung",
    name: { vi: "Tầm trung", en: "Mid-range" },
    description: {
      vi: "Cân bằng hiệu suất và giá trị cho bệnh viện đa khoa",
      en: "Balanced performance and value for general hospitals",
    },
    type: "price-tier",
  },
  {
    id: "cao-cap",
    slug: "cao-cap",
    name: { vi: "Cao cấp", en: "Premium" },
    description: {
      vi: "Công nghệ đỉnh cao cho trung tâm y tế hàng đầu",
      en: "Cutting-edge technology for leading medical centers",
    },
    type: "price-tier",
  },
];

/* ═══ TẤT CẢ CATEGORIES ═══ */
export const CATEGORIES: Category[] = [...DEVICE_TYPES, ...PRICE_TIERS];

/* Helper: tìm device type theo id */
export function getDeviceType(id: string) {
  return DEVICE_TYPES.find((d) => d.id === id);
}

/* Helper: tìm price tier theo id */
export function getPriceTier(id: string) {
  return PRICE_TIERS.find((p) => p.id === id);
}
