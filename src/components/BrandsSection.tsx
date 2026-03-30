import { motion } from "framer-motion";

const brands = [
  "Google Partner",
  "SEMrush",
  "Moz",
  "Ahrefs",
  "BrightLocal",
  "Yext",
];

const BrandsSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4 md:px-8">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10"
      >
        Tools & Partners We Work With
      </motion.p>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
        {brands.map((brand, i) => (
          <motion.div
            key={brand}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-xl md:text-2xl font-heading font-bold text-foreground/20 hover:text-foreground/40 transition-colors select-none"
          >
            {brand}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsSection;
