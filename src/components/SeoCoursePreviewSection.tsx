import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SeoCourseArtwork from "@/components/seo/SeoCourseArtwork";
import { getLessonPath, seoLessonsBySlug, seoSections } from "@/lib/seoCourseData";

const featuredLessonSlugs = [
  "meta-pavadinimai",
  "kokybiskas-turinys",
  "google-ai-overviews",
];

const totalLessons = seoSections.reduce((sum, section) => sum + section.lessonSlugs.length, 0);

const SeoCoursePreviewSection = () => (
  <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] py-20">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.1),_transparent_28%)]" />
    <div className="container relative mx-auto px-4 md:px-8">
      <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
        <div>
          <div className="inline-flex items-center rounded-full border border-[#d8e3ef] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#5a6d8b]">
            <BookOpen className="mr-2 h-4 w-4 text-[#1d4ed8]" />
            SEO patarimai
          </div>
          <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-[#0f172a] md:text-5xl">
            Nauja mokymų skiltis apie SEO, AI paiešką ir Google matomumą
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#586a82]">
            Sukūrėme atskirą SEO mokymosi hub&apos;ą su giliomis pamokomis apie meta
            title, turinio optimizavimą, topical clusters, Google AI Overviews,
            robots.txt, Search Console ir lokalų matomumą.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.6rem] border border-[#dbe5f0] bg-white/92 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <p className="text-3xl font-bold text-[#0f172a]">{seoSections.length}</p>
              <p className="mt-1 text-sm text-[#617287]">moduliai</p>
            </div>
            <div className="rounded-[1.6rem] border border-[#dbe5f0] bg-white/92 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <p className="text-3xl font-bold text-[#0f172a]">{totalLessons}</p>
              <p className="mt-1 text-sm text-[#617287]">SEO pamokų</p>
            </div>
            <div className="rounded-[1.6rem] border border-[#dbe5f0] bg-white/92 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <p className="text-3xl font-bold text-[#0f172a]">2026</p>
              <p className="mt-1 text-sm text-[#617287]">nauji standartai</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/seo-patarimai"
              className="inline-flex items-center rounded-2xl bg-[#0f172a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#162033]"
            >
              Atidaryti kursą <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to={getLessonPath("google-ai-overviews")}
              className="inline-flex items-center rounded-2xl border border-[#d8e3ef] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1d4ed8] transition hover:bg-[#eef5ff]"
            >
              AI Overviews pamoka
            </Link>
          </div>
        </div>

        <div className="grid gap-5">
          {featuredLessonSlugs.map((slug) => {
            const lesson = seoLessonsBySlug[slug];

            return (
              <Link
                key={slug}
                to={getLessonPath(slug)}
                className="group rounded-[2rem] border border-[#dbe5f0] bg-white/92 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.11)]"
              >
                <div className="grid gap-5 lg:grid-cols-[220px_1fr] lg:items-center">
                  <SeoCourseArtwork variant={lesson.illustration} title={lesson.shortTitle} />
                  <div>
                    <div className="inline-flex items-center rounded-full bg-[#eef5ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#2854d8]">
                      <Sparkles className="mr-2 h-3.5 w-3.5" />
                      {lesson.heroEyebrow}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#0f172a]">
                      {lesson.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#5f7188]">
                      {lesson.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {lesson.keywords.slice(0, 3).map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-[#dce7f2] bg-[#f7fbff] px-3 py-1 text-xs font-medium text-[#53657e]"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 inline-flex items-center text-sm font-semibold text-[#1d4ed8]">
                      Skaityti pamoką <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default SeoCoursePreviewSection;
