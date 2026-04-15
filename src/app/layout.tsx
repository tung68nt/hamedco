import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollAnimator from "../components/ScrollAnimator";
import FloatingContact from "../components/FloatingContact";
import { LocaleProvider } from "../components/LocaleProvider";
import JsonLd from "../components/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HAMEDCO",
  "url": "https://hamedco.com.vn",
  "logo": "https://hamedco.com.vn/assets/images/logo.png",
  "description": "Nhà cung cấp vật tư và thiết bị y tế hàng đầu Việt Nam với hơn 20 năm kinh nghiệm. Đối tác chiến lược của Philips Healthcare.",
  "foundingDate": "2005",
  "slogan": "Đối tác tin cậy trong Thiết bị Y tế",
  "knowsAbout": ["Thiết bị y tế", "Chẩn đoán hình ảnh", "Philips Healthcare", "CT Scanner", "MRI", "Siêu âm", "X-quang"],
  "areaServed": {
    "@type": "Country",
    "name": "Vietnam"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+84-86-900-9486",
    "contactType": "customer service",
    "availableLanguage": ["Vietnamese", "English", "Japanese", "Korean", "German"]
  },
  "sameAs": [
    "https://www.facebook.com/hamedco.vn",
    "https://www.linkedin.com/company/hamedco"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "HAMEDCO - Công ty TNHH Thiết bị Y tế",
  "image": "https://hamedco.com.vn/assets/images/logo.png",
  "url": "https://hamedco.com.vn",
  "telephone": "+84-86-900-9486",
  "email": "contact@hamedco.com.vn",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tầng 15, Tòa nhà Bitexco Financial Tower",
    "addressLocality": "Quận 1",
    "addressRegion": "TP. Hồ Chí Minh",
    "postalCode": "700000",
    "addressCountry": "VN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "10.7720",
    "longitude": "106.7045"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$$$",
  "currenciesAccepted": "VND, USD",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "areaServed": {
    "@type": "Country",
    "name": "Vietnam"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HAMEDCO - Thiết Bị Y Tế Chất Lượng Cao",
  "url": "https://hamedco.com.vn",
  "description": "Nhà cung cấp vật tư và thiết bị y tế hàng đầu Việt Nam",
  "publisher": {
    "@type": "Organization",
    "name": "HAMEDCO",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hamedco.com.vn/assets/images/logo.png"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://hamedco.com.vn/tim-kiem?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hamedco.com.vn'),
  title: {
    default: "HAMEDCO — Thiết Bị Y Tế Chất Lượng Cao",
    template: "%s | HAMEDCO"
  },
  description: "Nhà cung cấp vật tư và thiết bị y tế hàng đầu Việt Nam với hơn 20 năm kinh nghiệm. Đối tác chiến lược của Philips Healthcare.",
  keywords: ["thiết bị y tế", "philips healthcare", "CT scanner", "MRI", "siêu âm", "X-quang", "chẩn đoán hình ảnh", "bệnh viện", "phòng khám", "HAMEDCO"],
  authors: [{ name: "HAMEDCO" }],
  creator: "HAMEDCO",
  publisher: "HAMEDCO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'vi': '/',
      'en': '/en',
      'ja': '/ja',
      'ko': '/ko',
      'de': '/de',
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://hamedco.com.vn",
    siteName: "HAMEDCO",
    title: "HAMEDCO — Thiết Bị Y Tế Chất Lượng Cao",
    description: "Nhà cung cấp vật tư và thiết bị y tế hàng đầu Việt Nam. Đối tác chiến lược của Philips Healthcare.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HAMEDCO - Thiết bị y tế Philips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAMEDCO — Thiết Bị Y Tế Chất Lượng Cao",
    description: "Nhà cung cấp vật tư và thiết bị y tế hàng đầu Việt Nam",
    images: ["/assets/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

import { ThemeProvider } from "../components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body>
        <ThemeProvider>
          <LocaleProvider>
            <Header />
            <main id="main">
              {children}
            </main>
            <Footer />
            <ScrollAnimator />
            <FloatingContact />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
