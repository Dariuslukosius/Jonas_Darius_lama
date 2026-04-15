import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SeoCourseArtwork from "@/components/seo/SeoCourseArtwork";
import SeoHead from "@/components/seo/SeoHead";
import {
  getLessonPath,
  orderedLessonSlugs,
  seoLessonsBySlug,
  seoSections,
} from "@/lib/seoCourseData";

const standards = [
  {
    title: "People-first turinys",
    text: "Kursas akcentuoja realią naudą skaitytojui, ne mechaninį raktažodžių kartojimą. Tai tiesiogiai atitinka dabartinę Google helpful content kryptį.",
  },
  {
    title: "AI paieškos realybė",
    text: "Pamokose įtrauktos AI Overviews, snippet logika, teminis aiškumas ir turinio struktūra, kuri padeda išlikti naudingu šaltiniu ir generatyvinėje paieškoje.",
  },
  {
    title: "Mobile-first indeksavimas",
    text: "Visi sprendimai vertinami per mobilios versijos kokybę, greitį, skaitomumą ir realų vartotojo kelią telefone.",
  },
  {
    title: "E-E-A-T signalai",
    text: "Turinys dėliojamas taip, kad būtų aišku, kas kalba, kokia patirtis atsinešama ir kuo galima pasitikėti ilgalaikėje SEO strategijoje.",
  },
  {
    title: "Vidinė architektūra",
    text: "Hub puslapis ir atskiros pamokos sujungti į nuoseklų klasterį, kad augtų ne vien pavieniai URL, o visa temos autoriteto sistema.",
  },
];

const totalLessons = seoSections.reduce((sum, section) => sum + section.lessonSlugs.length, 0);

const keywordPaths = [
  {
    query: "SEO patarimai pradedantiesiems",
    slug: "meta-pavadinimai",
    text: "Pirmas žingsnis, jei norite suprasti, kaip atrodyti stipriau Google rezultatuose ir kaip pradėti nuo title bei meta description bazės.",
  },
  {
    query: "vidinis SEO ir topical clusters",
    slug: "vidinis-seo-klasteriai",
    text: "Tema verslams, kurie nori auginti ne vieną straipsnį, o visą teminį autoritetą su pillar puslapiais ir klasteriais.",
  },
  {
    query: "Google AI Overview SEO",
    slug: "google-ai-overviews",
    text: "Ši pamoka padeda susigaudyti, kaip AI atsakymai keičia paspaudimus, šaltinių atranką ir turinio struktūros reikalavimus.",
  },
  {
    query: "featured snippet ir position zero",
    slug: "position-zero",
    text: "Skirta atsakymų blokams, klausimų struktūrai, trumpiems aiškiems atsakymams ir snippet logikai.",
  },
  {
    query: "kodėl nerodo Google paieškoje",
    slug: "kodel-manes-neranda-google",
    text: "Greita diagnostika, kai puslapis neindeksuojamas, neatitinka intencijos arba lokalūs signalai nepakankami.",
  },
  {
    query: "Search Console ir SEO analizė",
    slug: "webmaster-irankiai",
    text: "Praktinė pamoka apie tai, kuriuos signalus sekti, kaip ieškoti problemų ir kokius sprendimus prioritetizuoti pirmiausia.",
  },
];

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "SEO patarimai ir SEO gidas",
      description:
        "Išsamus SEO mokymų puslapis su moduliais apie meta pavadinimus, svetainės struktūrą, turinio optimizavimą, mobile SEO ir Google Search Console praktiką.",
      url: "https://lamalocal.com/seo-patarimai",
    },
    {
      "@type": "ItemList",
      name: "SEO pamokos",
      itemListElement: orderedLessonSlugs.map((slug, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://lamalocal.com${getLessonPath(slug)}`,
        name: seoLessonsBySlug[slug].title,
      })),
    },
  ],
};

const SeoTipsPage = () => (
  <div className="min-h-screen bg-[#f5f8fc]">
    <SeoHead
      title="SEO patarimai, SEO gidas ir SEO mokymai verslui | LamaLocal"
      description="Moderni SEO mokymų biblioteka lietuvių kalba: SEO patarimai, SEO gidas, meta title, meta description, mobile SEO, robots.txt, Search Console ir daugiau."
      canonicalPath="/seo-patarimai"
      ogType="website"
      jsonLd={collectionJsonLd}
    />
    <Navbar />

    <main className="pt-24 md:pt-28">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),_transparent_28%)]" />
        <div className="container relative mx-auto px-4 py-16 md:px-8 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="inline-flex rounded-full border border-[#d9e6f5] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#5a6d8b]">
                SEO mokymai verslui
              </div>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.02] text-[#0f172a] md:text-6xl">
                SEO patarimai ir SEO gidas, sukurtas kaip realus mokymų kursas
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526277]">
                Čia sudėta ne paviršinė teorija, o struktūruota mokomoji medžiaga apie
                meta pavadinimus, meta description, svetainės struktūrą, on-page SEO,
                mobile-first indexing, robots.txt, vidines nuorodas ir SEO analizę.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border border-[#dbe5f0] bg-white/88 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                  <p className="text-3xl font-bold text-[#0f172a]">{seoSections.length}</p>
                  <p className="mt-1 text-sm text-[#617287]">mokymų moduliai</p>
                </div>
                <div className="rounded-[1.75rem] border border-[#dbe5f0] bg-white/88 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                  <p className="text-3xl font-bold text-[#0f172a]">{totalLessons}</p>
                  <p className="mt-1 text-sm text-[#617287]">gilios pamokos</p>
                </div>
                <div className="rounded-[1.75rem] border border-[#dbe5f0] bg-white/88 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                  <p className="text-3xl font-bold text-[#0f172a]">2026</p>
                  <p className="mt-1 text-sm text-[#617287]">atnaujinti standartai</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={getLessonPath(seoSections[0].lessonSlugs[0])}
                  className="inline-flex items-center rounded-2xl bg-[#0f172a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#162033]"
                >
                  Pradėti kursą <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="#moduliai"
                  className="inline-flex items-center rounded-2xl border border-[#d8e3ef] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1d4ed8] transition hover:bg-[#eef5ff]"
                >
                  Peržiūrėti modulius
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <SeoCourseArtwork variant="tools" title="SEO mokymų sistema" />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="moduliai" className="container mx-auto px-4 py-16 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#5a6d8b]">Pamokų architektūra</p>
            <h2 className="mt-3 text-3xl font-bold text-[#0f172a] md:text-5xl">
              Visi SEO moduliai ir pamokos
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#5e7086]">
            Modulių tvarka išlaikyta pagal referencinio gido logiką, bet kiekviena
            tema perrašyta giliau ir papildyta aktualiais Google Search standartais.
          </p>
        </div>

        <div className="space-y-10">
          {seoSections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.45, delay: sectionIndex * 0.04 }}
              className="scroll-mt-32 rounded-[2rem] border border-[#dbe5f0] bg-white/92 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.07)] md:p-8"
            >
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef5ff] text-lg font-bold text-[#1d4ed8]">
                  {String(section.order).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-[#0f172a] md:text-3xl">{section.title}</h2>
                  <p className="mt-2 max-w-3xl text-base leading-7 text-[#617287]">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {section.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-[#dce7f2] bg-[#f7fbff] px-3 py-1 text-xs font-medium text-[#53657e]"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="grid gap-5 xl:grid-cols-2">
                {section.lessonSlugs.map((slug) => {
                  const lesson = seoLessonsBySlug[slug];

                  return (
                    <Link
                      key={slug}
                      to={getLessonPath(slug)}
                      className="group rounded-[1.7rem] border border-[#dbe5f0] bg-[linear-gradient(180deg,#ffffff_0%,#f9fbff_100%)] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(15,23,42,0.09)]"
                    >
                      <div className="mb-4">
                        <SeoCourseArtwork
                          variant={lesson.illustration}
                          title={lesson.shortTitle}
                          lessonSlug={lesson.slug}
                        />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#6a7b90]">
                        {lesson.heroEyebrow}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold leading-8 text-[#0f172a]">
                        {lesson.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-7 text-[#5f7188]">
                        {lesson.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {lesson.keywords.slice(0, 3).map((keyword) => (
                          <span
                            key={keyword}
                            className="rounded-full bg-[#eef5ff] px-3 py-1 text-xs font-medium text-[#2459e0]"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 inline-flex items-center text-sm font-semibold text-[#1d4ed8]">
                        Atidaryti pamoką <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-4 md:px-8 md:py-8">
        <div className="rounded-[2rem] border border-[#dbe5f0] bg-[linear-gradient(135deg,#fffdf7_0%,#ffffff_40%,#f3f9ff_100%)] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-8">
          <div className="mb-8 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-[#1d4ed8]" />
            <h2 className="text-2xl font-semibold text-[#0f172a] md:text-3xl">
              Ką dar būtina daryti pagal naujausius standartus
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {standards.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-[#e2eaf4] bg-white/88 p-5"
              >
                <h3 className="text-lg font-semibold text-[#0f172a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5e7086]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-8">
        <div className="mb-8 flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-[#1d4ed8]" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#5a6d8b]">Keyword kryptys</p>
            <h2 className="mt-2 text-3xl font-bold text-[#0f172a] md:text-4xl">
              Dažniausiai ieškomos SEO temos šiame kurse
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {keywordPaths.map((topic) => {
            const lesson = seoLessonsBySlug[topic.slug];

            return (
              <Link
                key={topic.slug}
                to={getLessonPath(topic.slug)}
                className="group rounded-[1.7rem] border border-[#dbe5f0] bg-white/92 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(15,23,42,0.09)]"
              >
                <div className="mb-5">
                  <SeoCourseArtwork
                    variant={lesson.illustration}
                    title={lesson.shortTitle}
                    lessonSlug={lesson.slug}
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#67798f]">
                  {topic.query}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#0f172a]">{lesson.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#5f7188]">{topic.text}</p>
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
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 py-2 md:px-8 md:py-6">
        <div className="rounded-[2rem] border border-[#dbe5f0] bg-[linear-gradient(135deg,#f7fbff_0%,#ffffff_42%,#fff7ed_100%)] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#5a6d8b]">Kas atnaujinta</p>
              <h2 className="mt-3 text-3xl font-bold text-[#0f172a] md:text-4xl">
                Ko šiandien nebeužtenka sename SEO pradžiamokslyje
              </h2>
              <p className="mt-4 text-base leading-8 text-[#5e7086]">
                Vien bazinių title, description ir robots.txt žinių jau nepakanka. Šiame
                kurse papildomai integruoti AI Overviews, people-first content, topical
                authority, snippet kontrolė, mobilus UX, Search Console diagnostika ir
                lokaliems verslams aktualūs Google Maps signalai.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {[
                "AI paieškos atsakymai keičia CTR ir informacinių užklausų elgseną.",
                "E-E-A-T signalai ir tikras ekspertinis kontekstas tapo dar svarbesni.",
                "Topical clusters padeda laimėti ne vieną URL, o visą temos lauką.",
                "Techninė diagnostika turi apimti ir indeksavimą, ir intencijos atitikimą.",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-[1.5rem] border border-[#dce7f2] bg-white/88 px-4 py-4 text-sm leading-7 text-[#5d6f85]"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 md:px-8">
        <div className="rounded-[2.2rem] border border-[#dbe5f0] bg-[#0f172a] p-8 text-white shadow-[0_28px_90px_rgba(15,23,42,0.22)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Tolimesnis žingsnis</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                Norite šitą SEO kursą paversti ir jūsų verslo augimo planu?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                Šalia teorijos svarbiausia yra pritaikymas. Galime padėti šiuos modulius
                perkelti į jūsų svetainės struktūrą, lokalų SEO, paslaugų puslapius ir
                turinio klasterius.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-white/12 bg-white/6 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#7dd3fc]" />
                  <p className="text-sm leading-7 text-white/78">
                    Tinka kaip SEO mokymų biblioteka, lead magnet arba ekspertinis turinio hubas.
                  </p>
                </div>
              </div>
              <Link
                to="/contacts"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#0f172a] transition hover:bg-[#eef5ff]"
              >
                Gauti SEO konsultaciją <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default SeoTipsPage;
