import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, CircleAlert } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SeoCourseArtwork from "@/components/seo/SeoCourseArtwork";
import SeoCourseSidebar from "@/components/seo/SeoCourseSidebar";
import SeoHead from "@/components/seo/SeoHead";
import {
  getLessonBySlug,
  getLessonPath,
  getPrevNextLessons,
  getRelatedLessons,
  getSectionById,
} from "@/lib/seoCourseData";
import NotFound from "./NotFound";

const SeoLessonPage = () => {
  const { lessonSlug = "" } = useParams();
  const lesson = getLessonBySlug(lessonSlug);

  if (!lesson) {
    return <NotFound />;
  }

  const section = getSectionById(lesson.sectionId);
  const relatedLessons = getRelatedLessons(lesson.slug);
  const { prevLesson, nextLesson } = getPrevNextLessons(lesson.slug);

  const faqEntities = lesson.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  const lessonJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: lesson.title,
        description: lesson.metaDescription,
        datePublished: "2026-04-10",
        dateModified: "2026-04-10",
        author: {
          "@type": "Organization",
          name: "LamaLocal",
        },
        publisher: {
          "@type": "Organization",
          name: "LamaLocal",
        },
        mainEntityOfPage: `https://lamalocal.com${getLessonPath(lesson.slug)}`,
        keywords: lesson.keywords.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "SEO patarimai",
            item: "https://lamalocal.com/seo-patarimai",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: section.title,
            item: `https://lamalocal.com/seo-patarimai#${section.id}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: lesson.title,
            item: `https://lamalocal.com${getLessonPath(lesson.slug)}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqEntities,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f5f8fc]">
      <SeoHead
        title={lesson.metaTitle}
        description={lesson.metaDescription}
        canonicalPath={getLessonPath(lesson.slug)}
        ogType="article"
        jsonLd={lessonJsonLd}
      />
      <Navbar />

      <main className="pt-24 md:pt-28">
        <section className="container mx-auto px-4 py-10 md:px-8">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#607187]">
            <Link to="/seo-patarimai" className="hover:text-[#1d4ed8]">
              SEO patarimai
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>{section.title}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
            <SeoCourseSidebar currentSlug={lesson.slug} />

            <div className="space-y-8">
              <motion.section
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-[2.2rem] border border-[#dbe5f0] bg-white/92 shadow-[0_26px_80px_rgba(15,23,42,0.08)]"
              >
                <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5b6f8f]">
                      {lesson.heroEyebrow}
                    </p>
                    <h1 className="mt-4 text-3xl font-bold leading-tight text-[#0f172a] md:text-5xl">
                      {lesson.title}
                    </h1>
                    <p className="mt-5 max-w-3xl text-lg leading-8 text-[#596b83]">
                      {lesson.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {lesson.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-[#dce7f2] bg-[#f7fbff] px-3 py-1 text-xs font-medium text-[#53657e]"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 rounded-[1.5rem] border border-[#dce7f2] bg-[#f8fbff] p-4 text-sm leading-7 text-[#5b6d84]">
                      {lesson.updatedFor}
                    </div>
                  </div>

                  <SeoCourseArtwork
                    variant={lesson.illustration}
                    title={lesson.shortTitle}
                    lessonSlug={lesson.slug}
                  />
                </div>
              </motion.section>

              <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[2rem] border border-[#dbe5f0] bg-white/92 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)] md:p-8">
                  <h2 className="text-2xl font-semibold text-[#0f172a]">Pamokos įžanga</h2>
                  <div className="mt-4 space-y-4 text-[16px] leading-8 text-[#5a6c84]">
                    {lesson.intro.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[#dbe5f0] bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_100%)] p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)] md:p-8">
                  <h2 className="text-2xl font-semibold text-[#0f172a]">Greitas veiksmų planas</h2>
                  <div className="mt-4 space-y-3">
                    {lesson.checklist.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 text-[#16a34a]" />
                        <p className="text-sm leading-7 text-[#5c6d84]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {lesson.sections.map((contentSection, index) => (
                <motion.section
                  key={contentSection.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.38, delay: index * 0.04 }}
                  className="rounded-[2rem] border border-[#dbe5f0] bg-white/92 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)] md:p-8"
                >
                  <h2
                    id={contentSection.id}
                    className="scroll-mt-32 text-2xl font-semibold text-[#0f172a] md:text-3xl"
                  >
                    {contentSection.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-[16px] leading-8 text-[#5a6c84]">
                    {contentSection.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {contentSection.bullets ? (
                    <div className="mt-5 grid gap-3">
                      {contentSection.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-2xl border border-[#dce7f2] bg-[#f8fbff] px-4 py-3 text-sm leading-7 text-[#5d6f85]"
                        >
                          {bullet}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </motion.section>
              ))}

              <section className="rounded-[2rem] border border-[#f1d2cf] bg-[linear-gradient(180deg,#fff9f8_0%,#ffffff_100%)] p-6 shadow-[0_22px_60px_rgba(15,23,42,0.05)] md:p-8">
                <div className="flex items-center gap-3">
                  <CircleAlert className="h-5 w-5 text-[#dc2626]" />
                  <h2 className="text-2xl font-semibold text-[#0f172a]">Dažniausios klaidos</h2>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {lesson.mistakes.map((mistake) => (
                    <div
                      key={mistake}
                      className="rounded-2xl border border-[#f1d7d3] bg-white px-4 py-4 text-sm leading-7 text-[#6f5252]"
                    >
                      {mistake}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] border border-[#dbe5f0] bg-white/92 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)] md:p-8">
                <h2 className="text-2xl font-semibold text-[#0f172a]">Dažniausi klausimai</h2>
                <div className="mt-5 space-y-4">
                  {lesson.faq.map((item) => (
                    <div key={item.question} className="rounded-2xl border border-[#dce7f2] bg-[#f8fbff] p-5">
                      <h3 className="text-lg font-semibold text-[#0f172a]">{item.question}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#5d6f85]">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {relatedLessons.length > 0 ? (
                <section className="rounded-[2rem] border border-[#dbe5f0] bg-white/92 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)] md:p-8">
                  <h2 className="text-2xl font-semibold text-[#0f172a]">Susijusios pamokos</h2>
                  <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {relatedLessons.map((relatedLesson) => (
                      <Link
                        key={relatedLesson.slug}
                        to={getLessonPath(relatedLesson.slug)}
                        className="rounded-[1.5rem] border border-[#dce7f2] bg-[#f8fbff] p-5 transition hover:border-[#aac3f7] hover:bg-white"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#67798f]">
                          {relatedLesson.heroEyebrow}
                        </p>
                        <h3 className="mt-3 text-lg font-semibold text-[#0f172a]">
                          {relatedLesson.shortTitle}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[#5f7188]">
                          {relatedLesson.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="grid gap-4 md:grid-cols-2">
                {prevLesson ? (
                  <Link
                    to={getLessonPath(prevLesson.slug)}
                    className="rounded-[1.7rem] border border-[#dbe5f0] bg-white/92 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition hover:bg-[#f8fbff]"
                  >
                    <p className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.24em] text-[#67798f]">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Ankstesnė pamoka
                    </p>
                    <h2 className="mt-3 text-xl font-semibold text-[#0f172a]">{prevLesson.title}</h2>
                  </Link>
                ) : (
                  <div className="hidden md:block" />
                )}

                {nextLesson ? (
                  <Link
                    to={getLessonPath(nextLesson.slug)}
                    className="rounded-[1.7rem] border border-[#dbe5f0] bg-[#0f172a] p-5 text-white shadow-[0_22px_60px_rgba(15,23,42,0.18)] transition hover:bg-[#162033]"
                  >
                    <p className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.24em] text-white/62">
                      Kita pamoka <ArrowRight className="ml-2 h-4 w-4" />
                    </p>
                    <h2 className="mt-3 text-xl font-semibold">{nextLesson.title}</h2>
                  </Link>
                ) : null}
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SeoLessonPage;
