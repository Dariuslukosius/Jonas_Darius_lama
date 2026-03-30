import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BrandsSection from "@/components/BrandsSection";
import StatsSection from "@/components/StatsSection";
import WhiteHatSection from "@/components/WhiteHatSection";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <TestimonialsSection />
    <BrandsSection />
    <section className="pb-16 pt-2 bg-background text-center">
      <Link to="/contacts">
        <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85 shadow-lg">
          Get an Offer <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </section>
    <StatsSection />
    <WhiteHatSection />
    <FooterSection />
  </div>
);

export default Index;
