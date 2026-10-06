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
    },
    about: {
      hero_title: "Hơn 20 năm đồng hành cùng nền y tế Việt Nam",
      hero_desc: "Từ một đơn vị cung cấp thiết bị nhỏ lẻ, HAMEDCO đã vươn mình trở thành đối tác chiến lược của Philips và nhiều thương hiệu y tế hàng đầu thế giới, mang lại những giải pháp cứu sống tính mạng hàng triệu người.",
      stats_years: "Năm kinh nghiệm",
      stats_partners: "Đối tác quốc tế",
      stats_products: "Sản phẩm",
      stats_projects: "Dự án triển khai"
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
    },
    about: {
      hero_title: "Over 20 Years of Partnership with Vietnam's Healthcare",
      hero_desc: "From a small equipment supplier, HAMEDCO has grown into a strategic partner of Philips and many world-leading medical brands, bringing life-saving solutions to millions.",
      stats_years: "Years of Experience",
      stats_partners: "International Partners",
      stats_products: "Products",
      stats_projects: "Project Implementations"
    }
  }
};

export type Locale = keyof typeof dictionaries;

// This would typically read a cookie or URL param in a real Next.js server setup
export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries.vi;
}
