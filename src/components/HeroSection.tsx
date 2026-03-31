import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroPhone from "@/assets/hero-phone.webp";

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden hero-bg pt-28 pb-20 md:pt-36 md:pb-28">
    {/* Decorative circles */}
    <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground/90 mb-6">
            🏆 #1 Local SEO Agency
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
            We boost your visibility on Google
          </h1>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-lg">
            Our SEO strategies help your business climb search rankings and attract more customers.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/contacts">
              <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85 shadow-lg">
                Get Your Free SEO Audit <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="hero-outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                View Case Studies
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right - phone mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75" />
            <img
              src={heroPhone}
              alt="Google Maps ranking showing top 3 position for local business"
              className="relative z-10 w-full max-w-sm rounded-3xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
