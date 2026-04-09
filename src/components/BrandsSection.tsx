import { motion } from "framer-motion";

import hansetrailer from "@/assets/brands/Hansetrailer logo.jpg";
import agrija from "@/assets/brands/agrija-logotipas.svg";
import alfadenta from "@/assets/brands/alfadenta-logotipas.webp";
import amadenta from "@/assets/brands/amadenta-horizontal-logo.svg";
import autoglass from "@/assets/brands/autoglass.jpg";
import basAccountant from "@/assets/brands/bas accountant logo.png";
import jomiTatto from "@/assets/brands/jomi tatto logo.jpg";
import romtesa from "@/assets/brands/romtesa logo.png";
import svytintysDantys from "@/assets/brands/svytintys dantys logo.jpg";

const brands = [
  { src: hansetrailer, alt: "Hansetrailer" },
  { src: agrija, alt: "Agrija" },
  { src: alfadenta, alt: "Alfadenta Dental" },
  { src: amadenta, alt: "Amadenta Dental" },
  { src: autoglass, alt: "Autoglass.lt" },
  { src: basAccountant, alt: "BAS Accountant" },
  { src: jomiTatto, alt: "Jomi Tatto" },
  { src: romtesa, alt: "Romtesa" },
  { src: svytintysDantys, alt: "Svytintys Dantys" },
];

const BrandsSection = () => (
  <section className="pt-2 pb-14 bg-background">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
        {brands.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <img
              src={b.src}
              alt={b.alt}
              loading="lazy"
              className="h-14 md:h-16 w-auto object-contain filter grayscale contrast-150 brightness-110"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsSection;
