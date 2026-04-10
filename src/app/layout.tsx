import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollAnimator from "../components/ScrollAnimator";
import FloatingContact from "../components/FloatingContact";
import { LocaleProvider } from "../components/LocaleProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hamedco.com.vn'),
  title: "HAMEDCO — Thiết Bị Y Tế Chất Lượng Cao",
  description: "Nhà cung cấp vật tư và thiết bị y tế hàng đầu Việt Nam với hơn 20 năm kinh nghiệm. Đối tác chiến lược của Philips.",
  alternates: {
    canonical: '/',
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
