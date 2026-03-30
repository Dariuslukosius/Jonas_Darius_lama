import { motion } from "framer-motion";
import casesCoffee from "@/assets/case-coffee-shop.png";
import casesGym from "@/assets/case-gym.png";
import casesRestaurant from "@/assets/case-restaurant.png";

const cases = [
  { image: casesCoffee, alt: "Coffee Shop with WiFi - Before and After Rankings" },
  { image: casesGym, alt: "Best Yoga Studio Trophy Club - Before and After Rankings" },
  { image: casesRestaurant, alt: "Smoothie Pacific Beach - Before and After Rankings" },
];

const CaseStudiesSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Our results<br />speak for themselves
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((cs, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden bg-card border border-border shadow-sm"
          >
            <img src={cs.image} alt={cs.alt} className="w-full h-auto" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
