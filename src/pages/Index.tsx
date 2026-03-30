import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BrandsSection from "@/components/BrandsSection";
import WhiteHatSection from "@/components/WhiteHatSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <TestimonialsSection />
    <BrandsSection />
    <WhiteHatSection />
    <FooterSection />
  </div>
);

export default Index;
