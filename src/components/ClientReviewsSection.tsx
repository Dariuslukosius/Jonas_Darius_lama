import { motion } from "framer-motion";
import { Play } from "lucide-react";
import avatarLina from "@/assets/avatar-lina.jpg";
import avatarGiedre from "@/assets/avatar-giedre.jpg";
import avatarOmar from "@/assets/avatar-omar.jpg";
import avatarAhmed from "@/assets/avatar-ahmed.jpg";
import avatarSara from "@/assets/avatar-sara.jpg";
import avatarTomas from "@/assets/avatar-tomas.jpg";
import avatarEmily from "@/assets/avatar-emily.jpg";
import accountingStatistic from "@/assets/results-home/accounting-gmb-statistic.png";
import dantistStatistic from "@/assets/results-home/dantist-gmb-statistic.png";
import coffeShopResult from "@/assets/services-results/coffe-shop.png";
import gymResult from "@/assets/services-results/gym.png";

const clientReviews = [
  {
    type: "text-with-photo" as const,
    name: "Lina Petrova",
    avatar: avatarLina,
    text: "We are very satisfied with the work delivered. Communication was smooth, with clear monthly reports and detailed explanations. We achieved the promised results within 3 months, even sooner than expected.",
    photo: dantistStatistic,
    photoAlt: "Dantist result image",
  },
  {
    type: "video" as const,
    title: "video 1.mp4",
    description: "Client video testimonial slot",
  },
  {
    type: "text-with-photo" as const,
    name: "Giedrė Bagdonavičienė",
    avatar: avatarGiedre,
    text: "For a long time, our business was difficult to find on Google. After starting with Lama Local, everything changed and within 3 months we reached TOP 5 positions for our main keywords.",
    photo: accountingStatistic,
    photoAlt: "Accounting result image",
  },
  {
    type: "video" as const,
    title: "video 2.mp4",
    description: "Client video testimonial slot",
  },
  {
    type: "text-with-photo" as const,
    name: "Omar Farouq",
    avatar: avatarOmar,
    text: "The Lama Local team exceeded our expectations. In a short time, they pushed our rankings into the TOP 5 and maintained them consistently throughout our collaboration.",
    photo: coffeShopResult,
    photoAlt: "Coffee shop result image",
  },
  {
    type: "text-with-photo" as const,
    name: "Ahmed Hassan",
    avatar: avatarAhmed,
    text: "Great team and very professional approach. They were always responsive, offered clear solutions, and delivered measurable results. Our online visibility improved significantly.",
    photo: gymResult,
    photoAlt: "Gym result image",
  },
  {
    type: "text-with-photo" as const,
    name: "Sara Mansouri",
    avatar: avatarSara,
    text: "We truly appreciate their dedication and attention to detail. From the very beginning, there was a clear strategy, and results started showing faster than we anticipated.",
    photo: dantistStatistic,
    photoAlt: "Dantist result image",
  },
  {
    type: "text-with-photo" as const,
    name: "Tomas Valaitis",
    avatar: avatarTomas,
    text: "The results speak for themselves. Within a few months, our website traffic increased multiple times and the team kept us informed throughout the whole process.",
    photo: accountingStatistic,
    photoAlt: "Accounting result image",
  },
  {
    type: "text-with-photo" as const,
    name: "Emily Carter",
    avatar: avatarEmily,
    text: "Professional, transparent, and focused on outcomes. We saw stronger rankings, more inquiries, and a very clear improvement in how customers discovered our business online.",
    photo: coffeShopResult,
    photoAlt: "Coffee shop result image",
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
            key={`${review.type}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 shadow-sm"
          >
            {review.type === "video" ? (
              <div className="flex h-full min-h-[320px] flex-col justify-between rounded-[1.25rem] bg-[#111214] p-6 text-white">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/45">Video review</p>
                  <h4 className="mt-3 text-2xl font-semibold text-white">{review.title}</h4>
                  <p className="mt-3 text-base leading-7 text-white/60">{review.description}</p>
                </div>

                <div className="flex items-center justify-center py-10">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                    <Play className="h-8 w-8 fill-current text-white" />
                  </div>
                </div>

                <div className="rounded-2xl border border-dashed border-white/15 px-4 py-3 text-sm text-white/45">
                  Drop in the real file to replace this placeholder.
                </div>
              </div>
            ) : (
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

                {"photo" in review && review.photo ? (
                  <img
                    src={review.photo}
                    alt={review.photoAlt}
                    className="mt-5 h-auto w-full rounded-2xl border border-border object-cover"
                  />
                ) : null}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientReviewsSection;
