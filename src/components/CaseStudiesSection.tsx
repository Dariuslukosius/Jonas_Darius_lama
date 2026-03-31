import { motion } from "framer-motion";
import casesCoffee from "@/assets/case-coffee-shop.png";
import casesGym from "@/assets/case-gym.png";
import casesRestaurant from "@/assets/case-restaurant.png";
import accountingStatistic from "@/assets/results-home/accounting-gmb-statistic.png";
import dantistStatistic from "@/assets/results-home/dantist-gmb-statistic.png";
import ClientReviewsSection from "@/components/ClientReviewsSection";

const cases = [
  { image: casesCoffee, alt: "Coffee Shop with WiFi - Before and After Rankings" },
  { image: casesGym, alt: "Best Yoga Studio Trophy Club - Before and After Rankings" },
  { image: casesRestaurant, alt: "Smoothie Pacific Beach - Before and After Rankings" },
];

const resultsExamples = [
  {
    image: dantistStatistic,
    alt: "Dantist GMB Statistic",
  },
  {
    image: accountingStatistic,
    alt: "Accounting GMB Statistic",
  },
];

const CaseStudiesSection = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Our results
          <br />
          speak for themselves.
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {cases.map((cs, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <img src={cs.image} alt={cs.alt} className="h-auto w-full" />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {resultsExamples.map((example, i) => (
          <motion.div
            key={example.alt}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm"
          >
            <img src={example.image} alt={example.alt} className="h-auto w-full" />
          </motion.div>
        ))}
      </div>
    </div>

    <ClientReviewsSection />
  </section>
);

export default CaseStudiesSection;
