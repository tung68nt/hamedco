"use client";

import { useLocale } from "../../components/LocaleProvider";
import Link from "next/link";
import AboutBanner from "../../components/about/AboutBanner";
import OpenLetter from "../../components/about/OpenLetter";
import CompanyJourney from "../../components/about/CompanyJourney";
import VisionMissionValues from "../../components/about/VisionMissionValues";
import BusinessPhilosophy from "../../components/about/BusinessPhilosophy";
import CorporateCulture from "../../components/about/CorporateCulture";
import ComprehensiveSolutions from "../../components/about/ComprehensiveSolutions";
import WhyChooseUs from "../../components/about/WhyChooseUs";
import ContactSection from "../../components/about/ContactSection";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <>
      {/* ═══ 1. BANNER ═══ */}
      <AboutBanner />

      {/* ═══ 2. THƯ NGỎ ═══ */}
      <OpenLetter />

      {/* ═══ 3. HÀNH TRÌNH 2 THẬP KỶ ═══ */}
      <CompanyJourney />

      {/* ═══ 4. TẦM NHÌN – SỨ MỆNH – GIÁ TRỊ CỐT LÕI ═══ */}
      <VisionMissionValues />

      {/* ═══ 5. TRIẾT LÝ KINH DOANH ═══ */}
      <BusinessPhilosophy />

      {/* ═══ 6. VĂN HOÁ DOANH NGHIỆP ═══ */}
      <CorporateCulture />

      {/* ═══ 7. GIẢI PHÁP TOÀN DIỆN ═══ */}
      <ComprehensiveSolutions />

      {/* ═══ 8. TẠI SAO CHỌN HAMEDCO ═══ */}
      <WhyChooseUs />

      {/* ═══ 9. KẾT NỐI VỚI CHÚNG TÔI ═══ */}
      <ContactSection />
    </>
  );
}
