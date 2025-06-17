import CTASection from "@/components/hero/CTA";
import FeatureSection from "@/components/hero/FeatureSection";
import FooterSection from "@/components/hero/Footer";
import HeroSection from "@/components/hero/HeroSection";
import HowItWorksSection from "@/components/hero/HowItWorks";
import Navbar from "@/components/hero/Navbar";
import UseCasesSection from "@/components/hero/UseCasesSection";
import WhyChooseUsSection from "@/components/hero/WhyChooseUsSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection/>
      <UseCasesSection/>
      <HowItWorksSection/>
      <WhyChooseUsSection/>
      <CTASection/>
      <FooterSection/>
    </>
  );
}
