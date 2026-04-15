import { motion } from "framer-motion";
import avatarDavid from "@/assets/avatar-david.jpg";
import avatarJennifer from "@/assets/avatar-jennifer.jpg";
import avatarMarcus from "@/assets/avatar-marcus.jpg";
import avatarMichelle from "@/assets/avatar-michelle.jpg";
import avatarRobert from "@/assets/avatar-robert.jpg";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import mapsRankMovement from "@/assets/hero-maps-rank-location.gif";
import accountingStatistic from "@/assets/results-home/accounting-gmb-statistic.png";
import dantistStatistic from "@/assets/results-home/dantist-gmb-statistic.png";
import googlePositionGif from "@/assets/services/google-position.gif";
import coffeShopResult from "@/assets/services-results/coffe-shop.png";
import gymResult from "@/assets/services-results/gym.png";

const clientReviews = [
  {
    name: "Mindaugas Petrauskas",
    avatar: avatarDavid,
    text: "After partnering with LamaLocal, our local visibility improved significantly. We started ranking in the Top 3, and our phone hasn't stopped ringing since. The team is knowledgeable, proactive, and truly cares about delivering results. Highly recommended for any local business.",
    photo: dantistStatistic,
    photoAlt: "Dantist result image",
  },
  {
    name: "Ingrida Jankauskaitė",
    avatar: avatarMichelle,
    text: "What stood out most was how clearly the LamaLocal team connected strategy with real movement in Google Maps. We could actually see visibility expanding across our target area, and that made the progress easy to trust.",
    photo: mapsRankMovement,
    photoAlt: "Animated Google Maps ranking movement",
    proofLabel: "Animated ranking proof",
  },
  {
    name: "Rasa Kazlauskaitė",
    avatar: avatarJennifer,
    text: "Since working with LamaLocal, our business has seen a noticeable increase in phone calls and inquiries. Within a few months, we started appearing in Google's top results, which made a huge difference for us. The team is incredibly helpful, always responsive, and genuinely cares about our growth. Highly recommend!",
    photo: accountingStatistic,
    photoAlt: "Accounting result image",
  },
  {
    name: "Karolis Mockus",
    avatar: avatarRobert,
    text: "We had tried a few different agencies before, but this was the first time we saw a process that was both structured and measurable. Rankings improved, profile activity looked healthier, and lead quality got better as well.",
    photo: googlePositionGif,
    photoAlt: "Animated Google position growth",
    proofLabel: "Search visibility snapshot",
  },
  {
    name: "Gintaras Žaliauskas",
    avatar: avatarMarcus,
    text: "We were struggling to get consistent leads before, but LamaLocal completely changed that. Now we're receiving regular calls and inquiries every week. Their approach is very structured, and the team is always ready to help and answer questions. Definitely recommend their services.",
    photo: coffeShopResult,
    photoAlt: "Coffee shop result image",
  },
  {
    name: "Aistė Stankevičienė",
    avatar: avatarSarah,
    text: "What I appreciate most about LamaLocal is how easy they make everything. They handled our Google Business Profile and SEO, and we quickly saw improvements. More visibility, more calls, and better quality leads. The team is super supportive and always available when needed.",
    photo: gymResult,
    photoAlt: "Gym result image",
  },
];

const ClientReviewsSection = () => (
  <section className="bg-background py-20 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <h3 className="text-3xl font-bold text-foreground md:text-4xl">Client reviews</h3>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {clientReviews.map((review, index) => (
          <motion.div
            key={`${review.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 shadow-sm"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/25"
                />
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">Verified client review</p>
                </div>
              </div>

              <p className="text-[15px] leading-7 text-muted-foreground">{review.text}</p>

              {review.proofLabel ? (
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  {review.proofLabel}
                </p>
              ) : null}

              <img
                src={review.photo}
                alt={review.photoAlt}
                loading="lazy"
                className="mt-3 h-auto w-full rounded-2xl border border-border object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientReviewsSection;
