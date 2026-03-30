import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Map, Target, TrendingUp, BarChart3, Shield, Search, Star, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Map,
    title: "Google Maps Optimization",
    desc: "Dominate the local map pack with a fully optimized Google Business Profile, strategic category selection, and geo-targeted content that puts you in front of nearby customers.",
    features: ["GBP audit & optimization", "Category & attribute strategy", "Photo & post management", "Q&A optimization"],
  },
  {
    icon: Target,
    title: "Local Keyword Research",
    desc: "Uncover high-intent, geo-specific keywords that your ideal customers are searching for. We target terms that drive real foot traffic and phone calls.",
    features: ["Competitor keyword analysis", "Search intent mapping", "Long-tail local terms", "Seasonal trend tracking"],
  },
  {
    icon: TrendingUp,
    title: "Review Management",
    desc: "Build trust and social proof with a systematic review acquisition strategy. We help you generate, respond to, and leverage reviews for better rankings.",
    features: ["Review generation campaigns", "Response templates & strategy", "Review monitoring", "Sentiment analysis"],
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    desc: "Full transparency with detailed monthly reports. Track your rankings, traffic, calls, and ROI with clear, actionable data.",
    features: ["Monthly ranking reports", "Call & lead tracking", "Traffic analytics", "ROI measurement"],
  },
  {
    icon: Globe,
    title: "Local Citation Building",
    desc: "Ensure your business information is consistent across all major directories, data aggregators, and industry-specific platforms.",
    features: ["NAP consistency audit", "Directory submissions", "Data aggregator syndication", "Duplicate cleanup"],
  },
  {
    icon: Search,
    title: "On-Page Local SEO",
    desc: "Optimize your website's structure, content, and technical elements to signal local relevance to search engines.",
    features: ["Local schema markup", "Location page optimization", "Internal linking strategy", "Mobile optimization"],
  },
  {
    icon: Shield,
    title: "Link Building",
    desc: "Earn high-quality, locally relevant backlinks through ethical outreach, partnerships, and community engagement.",
    features: ["Manual outreach campaigns", "Local sponsorship links", "Guest posting", "Community engagement"],
  },
  {
    icon: Star,
    title: "Competitor Analysis",
    desc: "Understand exactly what your top-ranking competitors are doing and develop strategies to outperform them.",
    features: ["Competitor ranking tracking", "Backlink gap analysis", "Content gap identification", "Strategy benchmarking"],
  },
];

const process = [
  { step: "01", title: "Audit", desc: "We analyze your current local presence, identify gaps, and benchmark against competitors." },
  { step: "02", title: "Strategy", desc: "We build a custom roadmap tailored to your market, goals, and competitive landscape." },
  { step: "03", title: "Execute", desc: "Our team implements every optimization — from GBP to citations to content — with precision." },
  { step: "04", title: "Measure", desc: "Monthly reports show exactly how your rankings, traffic, and leads are improving." },
];

const ServicesPage = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="hero-bg pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6">
            Everything You Need to Dominate Local Search
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Comprehensive local SEO services designed to put your business at the top of Google Maps and local search results.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services grid */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl bg-card border border-border p-6 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <s.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground/75">
                    <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">How We Get You to the Top</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-accent/20 mb-3">{p.step}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Dominate Local Search?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get a free SEO audit and discover exactly what it takes to get your business to the top of Google Maps.
          </p>
          <Link to="/contacts">
            <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85 shadow-lg">
              Get Your Free Audit <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>

    <FooterSection />
  </div>
);

export default ServicesPage;
