export const dictionaries = {
  vi: {
    hero: {
      badge: "Nhà phân phối chính thức Philips Healthcare tại Việt Nam",
      title: "Giải pháp Y tế<br/>đỉnh cao từ Philips",
      desc: "Tiên phong công nghệ chẩn đoán hình ảnh và theo dõi lâm sàng thông minh. HAMEDCO tự hào là đại diện độc quyền mang hệ sinh thái Connected Care của Philips đến hàng trăm bệnh viện trên toàn quốc."
    },
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      products: "Sản phẩm",
      services: "Dịch vụ",
      partners: "Đối tác",
      news: "Tin tức",
      contact: "Liên hệ",
      quote: "Yêu cầu báo giá"
    }
  },
  en: {
    hero: {
      badge: "Official Philips Healthcare Distributor in Vietnam",
      title: "Pinnacle Healthcare<br/>Solutions from Philips",
      desc: "Pioneering intelligent medical imaging and clinical monitoring. HAMEDCO is proud to be the exclusive representative bringing Philips' Connected Care ecosystem to hundreds of hospitals nationwide."
    },
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      services: "Services",
      partners: "Partners",
      news: "News",
      contact: "Contact",
      quote: "Request Quote"
    }
  }
};

export type Locale = keyof typeof dictionaries;

// This would typically read a cookie or URL param in a real Next.js server setup
export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries.vi;
}
