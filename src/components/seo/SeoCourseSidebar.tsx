import { Link } from "react-router-dom";
import { getLessonPath, seoSections, seoLessonsBySlug } from "@/lib/seoCourseData";

type SeoCourseSidebarProps = {
  currentSlug?: string;
};

const SeoCourseSidebar = ({ currentSlug }: SeoCourseSidebarProps) => (
  <aside className="lg:sticky lg:top-28 lg:self-start">
    <div className="rounded-[2rem] border border-[#dbe5f0] bg-white/92 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6d7d92]">Pamokų žemėlapis</p>
      <div className="mt-5 space-y-5">
        {seoSections.map((section) => (
          <div key={section.id}>
            <p className="text-sm font-semibold text-[#0f172a]">{section.title}</p>
            <div className="mt-2 grid gap-2">
              {section.lessonSlugs.map((slug) => {
                const lesson = seoLessonsBySlug[slug];
                const isActive = slug === currentSlug;

                return (
                  <Link
                    key={slug}
                    to={getLessonPath(slug)}
                    className={`rounded-2xl px-3 py-2 text-sm transition ${
                      isActive
                        ? "bg-[#0f172a] text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)]"
                        : "bg-[#f5f8fc] text-[#506176] hover:bg-[#eaf2ff] hover:text-[#1d4ed8]"
                    }`}
                  >
                    {lesson.shortTitle}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </aside>
);

export default SeoCourseSidebar;
