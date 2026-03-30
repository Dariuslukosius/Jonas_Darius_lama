import { motion } from "framer-motion";
import { Search, MapPin, Brain, MousePointerClick } from "lucide-react";

const solutions = [
  {
    icon: <div className="flex items-center gap-3 mb-6"><Search className="w-12 h-12 text-accent" /><Brain className="w-10 h-10 text-accent/70" /></div>,
    title: "SEO + AI SEO",
    desc: "Be found on Google and AI search when customers are searching.",
  },
  {
    icon: <MapPin className="w-14 h-14 text-accent mb-6" />,
    title: "Local SEO",
    desc: "Be visible to your local customers on Google Maps.",
  },
  {
    icon: <MousePointerClick className="w-14 h-14 text-accent mb-6" />,
    title: "Google Ads",
    desc: "Drive targeted traffic and generate leads with paid search campaigns.",
  },
];

const SolutionsSection = () => (
  <section className="py-16 md:py-24 hero-bg">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
          Your Google solutions partner
        </h2>
        <p className="text-primary-foreground/60 mt-4 max-w-2xl mx-auto leading-relaxed">
          We are a results-driven marketing agency specialising in SEO, AI SEO, Google Ads, and Local SEO solutions. We provide clear, outcome-focused guarantees so our clients can confidently achieve their business goals.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {solutions.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-8 md:p-10 text-center hover:bg-primary-foreground/10 transition-colors"
          >
            <div className="flex justify-center">{s.icon}</div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">{s.title}</h3>
            <p className="text-primary-foreground/50 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
