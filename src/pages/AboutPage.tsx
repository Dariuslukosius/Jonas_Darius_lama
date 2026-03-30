import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Target, TrendingUp, Map, BarChart3, Users, Award, Clock, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    desc: "Every strategy we implement is measured against real business outcomes — more calls, more visits, more revenue.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    desc: "We treat your business as our own. Transparent communication and dedicated account management come standard.",
  },
  {
    icon: Award,
    title: "Proven Expertise",
    desc: "With 200+ local businesses ranked in the top 3, our track record speaks for itself.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Most clients see measurable improvements within 6-8 weeks. We move fast without cutting corners.",
  },
];

const team = [
  {
    icon: Globe,
    title: "Local SEO Specialists",
    desc: "Our team lives and breathes local search. We stay ahead of every Google algorithm update so you don't have to.",
  },
  {
    icon: Map,
    title: "Google Maps Experts",
    desc: "We know exactly what it takes to dominate the local pack and keep your business visible to nearby customers.",
  },
  {
    icon: TrendingUp,
    title: "Data Analysts",
    desc: "Every decision is backed by data. We track, analyze, and optimize continuously to maximize your ROI.",
  },
  {
    icon: BarChart3,
    title: "Content Strategists",
    desc: "Compelling local content that resonates with your audience and signals relevance to search engines.",
  },
];

const AboutPage = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="hero-bg pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 mb-6">
            The Local SEO Agency That Delivers Real Results
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Llamamaps was founded with a single mission: help local businesses dominate their market on Google. We combine deep expertise, ethical strategies, and relentless optimization to get you to the top — and keep you there.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
              Putting Local Businesses on the Map
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe every local business deserves to be found by the customers who need them most. Too many businesses lose out to competitors simply because they're invisible online. That's where we come in.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team specializes exclusively in local SEO — no distractions, no generalist approaches. This singular focus means deeper expertise, faster results, and strategies tailored specifically for local search dominance.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaborating on local SEO strategy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Values</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">What Sets Us Apart</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-card border border-border p-6 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <v.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team expertise */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Specialists in Every Discipline</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Our multidisciplinary team brings together the expertise needed to dominate local search from every angle.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-card border border-border p-6 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <t.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
);

export default AboutPage;
