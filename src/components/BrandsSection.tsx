import { motion } from "framer-motion";

import agrija from "@/assets/brands/agrija-logotipas.svg";
import alfadenta from "@/assets/brands/alfadenta-logotipas.webp";
import amadenta from "@/assets/brands/amadenta-horizontal-logo.svg";
import autoglass from "@/assets/brands/autoglass.png";
import britannia from "@/assets/brands/pending/britannia.png";
import gpDentistry from "@/assets/brands/pending/gp-dentistry.png";
import hanseTrailer from "@/assets/brands/pending/hanse-trailer.svg";
import joMiTattoo from "@/assets/brands/pending/jomi-tattoo.png";
import kurtasService from "@/assets/brands/pending/kurtas-service.png";
import romtesa from "@/assets/brands/pending/romtesa.png";
import visuSventuTattoo from "@/assets/brands/pending/visu-sventu-tattoo.png";
// Archived logos kept here for easy restore if needed later:
// import artfiksa from "@/assets/brands/artfiksa.png";
// import autoVela from "@/assets/brands/auto-vela.png";
// import clinicDpc from "@/assets/brands/clinic-dpc.png";
// import ecoResort from "@/assets/brands/eco-resort.png";
// import fastCar from "@/assets/brands/fast-car.png";

const brands = [
  { id: "agrija", src: agrija, alt: "Agrija" },
  { id: "alfadenta", src: alfadenta, alt: "Alfadenta Dental", className: "h-[4.5rem] md:h-20" },
  { id: "amadenta", src: amadenta, alt: "Amadenta Dental" },
  { id: "autoglass", src: autoglass, alt: "Autoglass.lt", className: "h-12 md:h-14" },
  { id: "romtesa", src: romtesa, alt: "Romtesa" },
  { id: "hanse-trailer", src: hanseTrailer, alt: "Hanse Trailer" },
  {
    id: "jo-mi-tattoo",
    src: joMiTattoo,
    alt: "Jo Mi Tattoo",
    className: "h-[4.5rem] md:h-20 invert mix-blend-multiply",
  },
  {
    id: "visu-sventu-tattoo",
    src: visuSventuTattoo,
    alt: "Visu Sventu Tattoo",
    className: "h-20 md:h-[5.25rem]",
  },
  {
    id: "kurtas-service",
    src: kurtasService,
    alt: "Kurtas Service",
    className: "h-12 md:h-14",
  },
  { id: "gp-dentistry", src: gpDentistry, alt: "GP Dentistry", className: "h-16 md:h-[4.5rem]" },
  {
    id: "britannia",
    src: britannia,
    alt: "Britannia Accountancy Services",
    className: "h-20 md:h-24 mix-blend-multiply",
  },
];

// Removed logos archive for quick restore:
// const archivedBrands = [
//   { id: "artfiksa", src: artfiksa, alt: "Artfiksa" },
//   { id: "auto-vela", src: autoVela, alt: "Auto Vela", className: "h-8 md:h-9" },
//   { id: "clinic-dpc", src: clinicDpc, alt: "Clinic DPC" },
//   { id: "eco-resort", src: ecoResort, alt: "Eco Resort" },
//   { id: "fast-car", src: fastCar, alt: "Fast Car" },
// ];

const BrandsSection = () => (
  <section className="pt-2 pb-14 bg-background">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
        {brands.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <img
              src={b.src}
              alt={b.alt}
              loading="lazy"
              className={`w-auto object-contain ${b.className ?? "h-14 md:h-16"}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsSection;
