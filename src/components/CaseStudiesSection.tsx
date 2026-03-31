import { motion } from "framer-motion";
import bruchFulhamBefore from "@/assets/results-home/new-cases/bruch-fulham-before.png";
import bruchFulhamAfter from "@/assets/results-home/new-cases/bruch-fulham-after.png";
import dantuProtezavimasUtenaBefore from "@/assets/results-home/new-cases/dantu-protezavimas-utena-before.png";
import dantuProtezavimasUtenaAfter from "@/assets/results-home/new-cases/dantu-protezavimas-utena-after.png";
import pompanoBeachTruckParkingBefore from "@/assets/results-home/new-cases/pompano-beach-truck-parking-before.png";
import pompanoBeachTruckParkingAfter from "@/assets/results-home/new-cases/pompano-beach-truck-parking-after.png";
import accountingStatistic from "@/assets/results-home/accounting-gmb-statistic.png";
import dantistStatistic from "@/assets/results-home/dantist-gmb-statistic.png";
import ClientReviewsSection from "@/components/ClientReviewsSection";

const cases = [
  {
    keyword: "bruch fulham",
    location: "Brunch Fulham",
    beforeDate: "3 February 2026",
    afterDate: "16 February 2026",
    beforeLabel: "Before (Feb 3rd - Rank 13)",
    afterLabel: "After (Feb 16th - Rank 3)",
    beforeMetric: "",
    afterMetric: "",
    beforeImage: bruchFulhamBefore,
    afterImage: bruchFulhamAfter,
  },
  {
    keyword: "dantu protezavimas utena",
    location: "Utena",
    beforeDate: "21 April 2025",
    afterDate: "3 November 2025",
    beforeLabel: "Before (Apr 21st - Rank 7)",
    afterLabel: "After (Nov 3rd - Rank 1)",
    beforeMetric: "",
    afterMetric: "",
    beforeImage: dantuProtezavimasUtenaBefore,
    afterImage: dantuProtezavimasUtenaAfter,
  },
  {
    keyword: "pompano beach truck parking",
    location: "Pompano Beach",
    beforeDate: "18 August 2025",
    afterDate: "8 January 2026",
    beforeLabel: "Before (Aug 18th - Rank 21)",
    afterLabel: "After (Jan 8th - Rank 1)",
    beforeMetric: "",
    afterMetric: "",
    beforeImage: pompanoBeachTruckParkingBefore,
    afterImage: pompanoBeachTruckParkingAfter,
  },
] as const;

const resultsExamples = [
  {
    image: dantistStatistic,
    alt: "Dantist GMB Statistic",
  },
  {
    image: accountingStatistic,
    alt: "Accounting GMB Statistic",
  },
] as const;

const CaseStudiesSection = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Our results
          <br />
          speak for themselves.
        </h2>
      </motion.div>

      <div className="grid gap-8 xl:grid-cols-3">
        {cases.map((cs, i) => (
          <motion.div
            key={cs.keyword}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="overflow-hidden rounded-[1.9rem] border border-[#dfe7f2] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          >
            <div className="px-5 pb-4 pt-6 text-center md:px-7 md:pt-7">
              <p className="text-[1rem] font-normal leading-none text-[#1c1c1c] sm:text-[1.2rem]">
                Keyword: <span className="font-semibold">{cs.keyword}</span>
              </p>
              <p className="mt-4 text-[1rem] font-normal leading-none text-[#1c1c1c] sm:text-[1.2rem]">
                Location: <span className="font-semibold">{cs.location}</span>
              </p>
            </div>

            <div className="grid gap-5 px-2 pb-5 pt-2 sm:px-5 md:grid-cols-2 md:px-7">
              <div className="rounded-[0.9rem] border border-[#e7edf5] bg-white p-1 shadow-sm">
                <img src={cs.beforeImage} alt={`${cs.keyword} before`} className="w-full rounded-[0.7rem]" />
              </div>

              <div className="rounded-[0.9rem] border border-[#e7edf5] bg-white p-1 shadow-sm">
                <img src={cs.afterImage} alt={`${cs.keyword} after`} className="w-full rounded-[0.7rem]" />
              </div>
            </div>

            <div className="px-5 pb-6 pt-1 md:px-7">
              <div className="grid justify-items-center gap-4 md:grid-cols-2 md:justify-items-start">
                <div className="w-fit rounded-[0.9rem] bg-[#eef5ff] px-4 py-3 text-center">
                  <p className="text-[0.8rem] font-normal leading-tight text-[#2563eb] sm:text-[0.88rem]">
                    {cs.beforeLabel}
                  </p>
                  {cs.beforeMetric ? (
                    <p className="mt-1 text-[0.8rem] font-semibold leading-tight text-[#2563eb] sm:text-[0.88rem]">
                      {cs.beforeMetric}
                    </p>
                  ) : null}
                </div>

                <div className="w-fit rounded-[0.9rem] bg-[#eef5ff] px-4 py-3 text-center">
                  <p className="text-[0.8rem] font-normal leading-tight text-[#2563eb] sm:text-[0.88rem]">
                    {cs.afterLabel}
                  </p>
                  {cs.afterMetric ? (
                    <p className="mt-1 text-[0.8rem] font-semibold leading-tight text-[#2563eb] sm:text-[0.88rem]">
                      {cs.afterMetric}
                    </p>
                  ) : null}
                </div>
              </div>

              <p className="mt-7 text-center text-[1.1rem] font-normal leading-none text-[#1c1c1c] sm:text-[1.28rem]">
                More <span className="font-semibold text-[#269246]">Green</span> Means Higher Ranking!
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {resultsExamples.map((example, i) => (
          <motion.div
            key={example.alt}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm"
          >
            <img src={example.image} alt={example.alt} className="h-auto w-full" />
          </motion.div>
        ))}
      </div>
    </div>

    <ClientReviewsSection />
  </section>
);

export default CaseStudiesSection;
