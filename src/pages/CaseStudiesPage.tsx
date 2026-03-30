import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { motion } from "framer-motion";
import { TrendingUp, MapPin, Star, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    business: "Mitchell's Dental Care",
    industry: "Healthcare",
    location: "Austin, TX",
    result: "Page 3 → Top 3 in 7 weeks",
    metric: "+140%",
    metricLabel: "Appointment Bookings",
    description:
      "A family dental practice struggling with online visibility. We optimized their Google Business Profile, built local citations, and implemented a review strategy that propelled them into the top 3 results.",
  },
  {
    business: "Rodriguez Plumbing",
    industry: "Home Services",
    location: "Miami, FL",
    result: "#1 for 'plumber near me'",
    metric: "+220%",
    metricLabel: "Organic Traffic",
    description:
      "A mid-sized plumbing company competing against national franchises. Through hyper-local keyword targeting and GMB optimization, they now dominate their service area.",
  },
  {
    business: "Golden Wok Restaurant",
    industry: "Food & Dining",
    location: "San Francisco, CA",
    result: "2x foot traffic in 90 days",
    metric: "+185%",
    metricLabel: "Google Maps Views",
    description:
      "A beloved local restaurant that was invisible on Google Maps. Strategic review management and local content helped them double walk-in traffic within three months.",
  },
  {
    business: "Elite Auto Repair",
    industry: "Automotive",
    location: "Denver, CO",
    result: "Top 3 for 15+ keywords",
    metric: "+310%",
    metricLabel: "Phone Calls",
    description:
      "An independent auto repair shop competing against chain mechanics. Comprehensive local SEO strategy including schema markup and citation building drove a 3x increase in call volume.",
  },
  {
    business: "Sunrise Yoga Studio",
    industry: "Fitness & Wellness",
    location: "Portland, OR",
    result: "#1 local pack position",
    metric: "+175%",
    metricLabel: "New Members",
    description:
      "A boutique yoga studio needing more local visibility. Targeted geo-specific content and optimized listings attracted a steady flow of new members from the surrounding area.",
  },
  {
    business: "Prestige Law Firm",
    industry: "Legal Services",
    location: "Chicago, IL",
    result: "Top 3 in competitive market",
    metric: "+250%",
    metricLabel: "Qualified Leads",
    description:
      "A personal injury law firm in one of the most competitive legal markets. Strategic local link building and review generation helped them break through and generate high-quality leads.",
  },
];

const CaseStudiesPage = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="hero-bg pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Case Studies</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6">
            Real Results for Real Businesses
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            See how we've helped local businesses across different industries achieve top Google rankings and significant growth.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Case study cards */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-card border border-border p-7 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                  {cs.industry}
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{cs.business}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>{cs.location}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{cs.description}</p>
              <div className="border-t border-border pt-5 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-accent">{cs.metric}</p>
                  <p className="text-xs text-muted-foreground">{cs.metricLabel}</p>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-foreground/80">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  {cs.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials slider */}
    <TestimonialsSection />

    <FooterSection />
  </div>
);

export default CaseStudiesPage;
