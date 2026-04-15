import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import BrandsSection from "@/components/BrandsSection";
import { motion } from "framer-motion";
import { Target, Users, Award, Clock } from "lucide-react";

// Team member images
import dariusLukosius from "@/assets/members/darius_lukosius.webp";
import reginaldas from "@/assets/members/reginaldas_raila.webp";
import nerijus from "@/assets/members/nerijus_rimdzius.webp";
import justinas from "@/assets/members/justinas_meilutis.webp";
import ferida from "@/assets/members/ferida_nagijeva.webp";
import hanna from "@/assets/members/hanna_raile.png";
import jonas from "@/assets/members/jonas_pernovas.png";

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
    name: "Darius Lukosius",
    role: "Local SEO Expert & AI Developer",
    image: dariusLukosius,
    desc: "Specialist in Local SEO strategy, AI-powered automation, and backlink building",
    specialties: ["Local SEO Strategy", "AI Automation", "Backlink Building", "Technical SEO", "Algorithm Analysis", "Google Maps SEO"],
    color: "blue",
  },
  {
    name: "Reginaldas Raila",
    role: "AI & SEO Technology Specialist",
    image: reginaldas,
    desc: "AI integration expert specializing in SEO automation and data-driven strategies",
    specialties: ["AI Integration", "SEO Analytics", "Automation Development", "Data Science", "Performance Optimization", "Algorithm Design"],
    color: "purple",
  },
  {
    name: "Nerijus Rimdzius",
    role: "Digital Marketing & Reputation Manager",
    image: nerijus,
    desc: "Expert in Google Ads, Facebook Ads, and online reputation management",
    specialties: ["Google Ads", "Facebook Ads", "Reputation Management", "Social Media Marketing", "PPC Strategy", "Review Management"],
    color: "purple",
  },
  {
    name: "Justinas Meilutis",
    role: "Marketing Strategist",
    image: justinas,
    desc: "Content marketing and brand development specialist focused on customer acquisition",
    specialties: ["Content Marketing", "Brand Development", "Marketing Analytics", "Campaign Optimization", "Customer Acquisition", "ROI Analysis"],
    color: "yellow",
  },
  {
    name: "Ferida Nagijeva",
    role: "Client Relations Specialist",
    image: ferida,
    desc: "Customer service and client communication expert specializing in relationship management",
    specialties: ["Client Communication", "Outbound Calling", "Customer Service", "Relationship Management", "Lead Generation", "CRM Management"],
    color: "pink",
  },
  {
    name: "Hanna Raile",
    role: "Graphic Designer & UI/UX Specialist",
    image: hanna,
    desc: "Expert in visual identity development, print design, and web design",
    specialties: ["Visual Identity", "Print Design", "UI/UX Design", "Brand Development", "Adobe InDesign", "Web Design"],
    color: "teal",
  },
  {
    name: "Jonas Pernovas",
    role: "Local SEO Specialist",
    image: jonas,
    desc: "SEO consultant helping service businesses improve local visibility",
    specialties: ["Google Business Profile", "Technical SEO", "Local SEO", "GA4 Analytics", "Keyword Research", "Citation Management"],
    color: "orange",
  },
];

const AboutPage = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative overflow-hidden bg-[#f3f7ff] pb-14 pt-24 md:pb-16 md:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.22)_1.2px,transparent_1.2px)] [background-size:38px_38px] opacity-70" />
      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#4b83ff] shadow-[0_8px_24px_rgba(59,130,246,0.08)]">
            About Us
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold uppercase leading-[0.95] text-slate-950 md:text-6xl lg:text-[5.2rem]">
            The Local SEO Agency That
            <span className="block bg-gradient-to-b from-[#4b83ff] to-[#2f6df6] bg-clip-text text-transparent">
              Delivers Real Results
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            LamaLocal was founded with a single mission: help local businesses dominate their market on Google. We combine deep expertise, ethical strategies, and relentless optimization to get you to the top — and keep you there.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-xl font-semibold text-slate-900 md:text-2xl">
            We help businesses win locally, one campaign at a time.
          </p>

          <div className="mx-auto mt-8 max-w-[52rem] overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white/95 p-4 shadow-[0_24px_60px_rgba(30,64,175,0.12)] backdrop-blur-sm sm:p-5">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-50 shadow-[0_0_0_10px_rgba(15,23,42,0.03)]">
                  <span className="text-3xl text-emerald-500">★</span>
                </div>
                <div className="text-left">
                  <p className="text-xl font-semibold tracking-tight text-slate-900">Trustpilot Reviews</p>
                  <div className="mt-1.5 flex items-center gap-2.5">
                    <div className="rounded-xl bg-emerald-500 px-2.5 py-1.5 text-white shadow-sm">
                      <span className="text-sm tracking-[0.2em]">★★★★★</span>
                    </div>
                    <p className="text-xl font-semibold text-slate-900">
                      4.5 <span className="font-medium text-slate-400">(22)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-50 shadow-[0_0_0_10px_rgba(15,23,42,0.03)]">
                  <span className="bg-[conic-gradient(from_210deg,#4285F4_0_25%,#34A853_25%_50%,#FBBC05_50%_75%,#EA4335_75%_100%)] bg-clip-text text-3xl font-bold text-transparent">
                    G
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-xl font-semibold tracking-tight text-slate-900">Google Reviews</p>
                  <div className="mt-1.5 flex items-center gap-2.5">
                    <div className="px-1 text-xl text-amber-400">★★★★★</div>
                    <p className="text-xl font-semibold text-slate-900">
                      4.7 <span className="font-medium text-slate-400">(45)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <BrandsSection />

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
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Meet the Team</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            The people behind LamaLocal combine strategy, technical SEO, content, and client support to help businesses grow locally.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl bg-card border border-border p-6 hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="mb-5 aspect-[4/4.5] overflow-hidden rounded-xl">
                <img src={t.image} alt={t.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{t.name}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{t.role}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-grow">{t.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.specialties.slice(0, 3).map((spec, idx) => (
                  <span key={idx} className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <ContactSection />
  </div>
);

export default AboutPage;
