import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "8x", label: "Average client growth" },
  { value: "7+", label: "Years expertise in Google marketing" },
  { value: "Europe", label: "We work with clients across Europe" },
  { value: "Our core focus", label: "Local service businesses and ecommerce brands" },
];

const StatsSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl bg-card border border-border p-6 md:p-8 text-center"
          >
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{s.value}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.label}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
        >
          More about us <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default StatsSection;
