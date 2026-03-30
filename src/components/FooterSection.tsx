import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/llama-logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Services", to: "/services" },
  { label: "Contacts", to: "/contacts" },
];

const FooterSection = () => (
  <footer className="hero-bg py-16">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src={logoImg} alt="Llamamaps" className="h-12 w-auto mb-4 brightness-0 invert" />
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            Expert local SEO services that put your business on the map. Guaranteed results or your money back.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="font-semibold text-primary-foreground mb-4">Quick Links</h3>
          <div className="space-y-2">
            {quickLinks.map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-semibold text-primary-foreground mb-4">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Los Angeles, CA</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
              <Phone className="w-4 h-4 shrink-0" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
              <Mail className="w-4 h-4 shrink-0" />
              <span>hello@llamamaps.com</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Llamamaps. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
