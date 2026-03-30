import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Mitchell's Dental Care",
    text: "In just 7 weeks, we went from page 3 to the top 3 on Google Maps. Our appointment bookings increased by 140%. Absolutely game-changing!",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "CEO, Rodriguez Plumbing",
    text: "We were skeptical at first, but Llamamaps delivered exactly what they promised. We're now ranking #1 for 'plumber near me' in our city.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Manager, Golden Wok Restaurant",
    text: "Our foot traffic doubled after working with Llamamaps. The ROI has been incredible — best marketing investment we've ever made.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="case-studies" className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
          Trusted by Local Businesses Everywhere
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Real reviews from real business owners who achieved top rankings with our proven SEO strategies.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl bg-card p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/85 mb-6 leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
