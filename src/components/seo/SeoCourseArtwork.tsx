import { useEffect, useState } from "react";
import { seoCourseArtworkImages } from "@/lib/seoCourseArtworkImages";

type SeoCourseArtworkProps = {
  variant: string;
  title: string;
  lessonSlug?: string;
};

const baseCard = "fill-white/80 stroke-[#d6dde8] stroke-[1.5]";
const softLine = "stroke-[#b8c5d8] stroke-[1.5]";

const SeoCourseArtwork = ({ variant, title, lessonSlug }: SeoCourseArtworkProps) => {
  const imageSrc = lessonSlug ? seoCourseArtworkImages[lessonSlug] : undefined;
  const [showFallback, setShowFallback] = useState(!imageSrc);

  useEffect(() => {
    setShowFallback(!imageSrc);
  }, [imageSrc]);

  const renderVariant = () => {
    switch (variant) {
      case "title":
        return (
          <>
            <rect x="36" y="46" width="408" height="242" rx="28" className={baseCard} />
            <rect x="66" y="78" width="348" height="62" rx="18" fill="#e8f0ff" stroke="#87a8ff" strokeWidth="1.5" />
            <rect x="84" y="96" width="164" height="11" rx="5.5" fill="#2a5bd7" />
            <rect x="84" y="115" width="210" height="8" rx="4" fill="#7c93c7" />
            <rect x="66" y="162" width="348" height="82" rx="18" fill="#f7fafe" stroke="#d6dde8" strokeWidth="1.5" />
            <rect x="84" y="182" width="236" height="10" rx="5" fill="#1f2937" />
            <rect x="84" y="202" width="164" height="8" rx="4" fill="#8aa0c4" />
            <circle cx="374" cy="107" r="28" fill="#2459e0" />
            <path d="M360 107h28M374 93v28" stroke="white" strokeWidth="4" strokeLinecap="round" />
          </>
        );
      case "description":
        return (
          <>
            <rect x="40" y="48" width="400" height="232" rx="30" className={baseCard} />
            <rect x="70" y="78" width="340" height="46" rx="16" fill="#f4f8ff" stroke="#d6dde8" strokeWidth="1.5" />
            <rect x="88" y="92" width="198" height="10" rx="5" fill="#1d4ed8" />
            <rect x="88" y="110" width="102" height="7" rx="3.5" fill="#94a3b8" />
            <rect x="70" y="142" width="340" height="108" rx="18" fill="#ffffff" stroke="#d6dde8" strokeWidth="1.5" />
            <rect x="88" y="164" width="288" height="9" rx="4.5" fill="#6b7280" />
            <rect x="88" y="182" width="302" height="9" rx="4.5" fill="#8794aa" />
            <rect x="88" y="200" width="264" height="9" rx="4.5" fill="#9aa7bb" />
            <path d="M338 94c12 0 20 8 20 18s-8 18-20 18" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" fill="none" />
            <circle cx="356" cy="112" r="8" fill="#3b82f6" />
          </>
        );
      case "url":
        return (
          <>
            <rect x="44" y="44" width="392" height="248" rx="30" className={baseCard} />
            <rect x="72" y="76" width="336" height="44" rx="16" fill="#eef5ff" stroke="#d6dde8" strokeWidth="1.5" />
            <path d="M92 98h54" className={softLine} />
            <path d="M158 98h44" className={softLine} />
            <path d="M214 98h68" className={softLine} />
            <path d="M294 98h66" className={softLine} />
            <circle cx="92" cy="170" r="20" fill="#1d4ed8" />
            <circle cx="170" cy="170" r="20" fill="#3b82f6" />
            <circle cx="248" cy="170" r="20" fill="#60a5fa" />
            <circle cx="326" cy="170" r="20" fill="#93c5fd" />
            <path d="M112 170h38M190 170h38M268 170h38" stroke="#7c93c7" strokeWidth="4" strokeLinecap="round" />
            <rect x="92" y="212" width="132" height="34" rx="14" fill="#f8fbff" stroke="#d6dde8" strokeWidth="1.5" />
            <rect x="256" y="212" width="118" height="34" rx="14" fill="#f8fbff" stroke="#d6dde8" strokeWidth="1.5" />
          </>
        );
      case "navigation":
        return (
          <>
            <rect x="44" y="44" width="392" height="248" rx="30" className={baseCard} />
            <rect x="72" y="72" width="124" height="190" rx="22" fill="#f7fbff" stroke="#d6dde8" strokeWidth="1.5" />
            <rect x="90" y="94" width="88" height="12" rx="6" fill="#2a5bd7" />
            <rect x="90" y="122" width="72" height="8" rx="4" fill="#94a3b8" />
            <rect x="90" y="144" width="60" height="8" rx="4" fill="#94a3b8" />
            <rect x="90" y="166" width="78" height="8" rx="4" fill="#94a3b8" />
            <rect x="226" y="72" width="182" height="74" rx="22" fill="#eef5ff" stroke="#87a8ff" strokeWidth="1.5" />
            <rect x="248" y="96" width="120" height="10" rx="5" fill="#1d4ed8" />
            <rect x="248" y="116" width="96" height="8" rx="4" fill="#90a3bf" />
            <rect x="226" y="164" width="182" height="98" rx="22" fill="#ffffff" stroke="#d6dde8" strokeWidth="1.5" />
            <path d="M244 194h146M244 216h122M244 238h90" className={softLine} />
            <path d="M194 158c24 0 42 18 42 42" stroke="#3b82f6" strokeWidth="4" fill="none" strokeLinecap="round" />
          </>
        );
      case "content":
        return (
          <>
            <rect x="36" y="46" width="408" height="242" rx="28" className={baseCard} />
            <rect x="64" y="74" width="164" height="186" rx="22" fill="#fffdf9" stroke="#f1cf82" strokeWidth="1.5" />
            <circle cx="146" cy="124" r="36" fill="#f7d78b" />
            <rect x="90" y="178" width="112" height="10" rx="5" fill="#6a5a32" />
            <rect x="82" y="198" width="128" height="8" rx="4" fill="#9f8c5f" />
            <rect x="252" y="74" width="164" height="84" rx="22" fill="#eef5ff" stroke="#a4bfff" strokeWidth="1.5" />
            <rect x="272" y="96" width="116" height="10" rx="5" fill="#2459e0" />
            <rect x="272" y="116" width="86" height="8" rx="4" fill="#8ea1bf" />
            <rect x="252" y="176" width="164" height="84" rx="22" fill="#effcf4" stroke="#97d6b1" strokeWidth="1.5" />
            <rect x="272" y="198" width="102" height="10" rx="5" fill="#15803d" />
            <rect x="272" y="218" width="120" height="8" rx="4" fill="#7aa68b" />
          </>
        );
      case "anchor":
        return (
          <>
            <rect x="40" y="44" width="400" height="248" rx="30" className={baseCard} />
            <rect x="68" y="84" width="136" height="48" rx="18" fill="#eef5ff" stroke="#87a8ff" strokeWidth="1.5" />
            <rect x="276" y="84" width="136" height="48" rx="18" fill="#eef5ff" stroke="#87a8ff" strokeWidth="1.5" />
            <path d="M204 108h72" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" />
            <circle cx="222" cy="108" r="18" fill="#dbeafe" stroke="#3b82f6" strokeWidth="5" />
            <circle cx="258" cy="108" r="18" fill="#dbeafe" stroke="#3b82f6" strokeWidth="5" />
            <rect x="68" y="170" width="344" height="82" rx="20" fill="#f9fbff" stroke="#d6dde8" strokeWidth="1.5" />
            <path d="M94 194h196M94 214h164M94 234h120" className={softLine} />
            <rect x="298" y="190" width="88" height="42" rx="18" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          </>
        );
      case "images":
        return (
          <>
            <rect x="36" y="44" width="408" height="248" rx="28" className={baseCard} />
            <rect x="62" y="74" width="196" height="164" rx="24" fill="#f7fbff" stroke="#d6dde8" strokeWidth="1.5" />
            <circle cx="112" cy="122" r="18" fill="#ffd166" />
            <path d="M84 212l46-52 34 38 24-22 42 36" stroke="#3b82f6" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="282" y="92" width="130" height="34" rx="14" fill="#eef5ff" stroke="#87a8ff" strokeWidth="1.5" />
            <rect x="282" y="148" width="130" height="34" rx="14" fill="#effcf4" stroke="#98d4b0" strokeWidth="1.5" />
            <rect x="282" y="204" width="130" height="34" rx="14" fill="#fff8ed" stroke="#f1c56c" strokeWidth="1.5" />
            <path d="M306 110h74M306 166h58M306 222h48" className={softLine} />
          </>
        );
      case "headings":
        return (
          <>
            <rect x="42" y="42" width="396" height="250" rx="30" className={baseCard} />
            <rect x="72" y="74" width="294" height="24" rx="12" fill="#1d4ed8" />
            <rect x="72" y="126" width="240" height="18" rx="9" fill="#3b82f6" />
            <path d="M72 160h286M72 182h250" className={softLine} />
            <rect x="108" y="216" width="204" height="16" rx="8" fill="#93c5fd" />
            <path d="M108 244h232" className={softLine} />
            <rect x="336" y="120" width="70" height="122" rx="18" fill="#f7fbff" stroke="#d6dde8" strokeWidth="1.5" />
            <path d="M356 146h30M356 170h24M356 194h30" className={softLine} />
          </>
        );
      case "robots":
        return (
          <>
            <rect x="44" y="44" width="392" height="248" rx="30" className={baseCard} />
            <rect x="72" y="74" width="168" height="188" rx="24" fill="#f7fbff" stroke="#d6dde8" strokeWidth="1.5" />
            <circle cx="156" cy="116" r="26" fill="#dbeafe" stroke="#3b82f6" strokeWidth="4" />
            <rect x="126" y="146" width="60" height="48" rx="14" fill="#1d4ed8" />
            <circle cx="142" cy="114" r="4" fill="#1d4ed8" />
            <circle cx="170" cy="114" r="4" fill="#1d4ed8" />
            <path d="M94 224h104" className={softLine} />
            <rect x="268" y="88" width="140" height="44" rx="16" fill="#effcf4" stroke="#96d4af" strokeWidth="1.5" />
            <rect x="268" y="154" width="140" height="44" rx="16" fill="#fff1f2" stroke="#f4a3b4" strokeWidth="1.5" />
            <rect x="268" y="220" width="140" height="26" rx="13" fill="#eef5ff" stroke="#d6dde8" strokeWidth="1.5" />
          </>
        );
      case "nofollow":
        return (
          <>
            <rect x="40" y="44" width="400" height="248" rx="30" className={baseCard} />
            <rect x="68" y="88" width="124" height="38" rx="18" fill="#eef5ff" stroke="#87a8ff" strokeWidth="1.5" />
            <rect x="220" y="88" width="124" height="38" rx="18" fill="#effcf4" stroke="#97d6b1" strokeWidth="1.5" />
            <rect x="144" y="170" width="192" height="58" rx="22" fill="#ffffff" stroke="#d6dde8" strokeWidth="1.5" />
            <path d="M92 107h76M244 107h74" className={softLine} />
            <path d="M130 198l60-58M192 140l64 64" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
            <circle cx="240" cy="198" r="18" fill="#dbeafe" stroke="#3b82f6" strokeWidth="5" />
          </>
        );
      case "mobile-index":
      case "mobile-ux":
        return (
          <>
            <rect x="92" y="34" width="296" height="268" rx="36" fill="#0f172a" />
            <rect x="106" y="50" width="268" height="236" rx="28" fill="#f8fbff" />
            <rect x="166" y="62" width="148" height="24" rx="12" fill="#e2e8f0" />
            <rect x="126" y="106" width="228" height="46" rx="18" fill="#eef5ff" stroke="#9dbbff" strokeWidth="1.5" />
            <rect x="126" y="168" width="228" height="40" rx="16" fill="#ffffff" stroke="#d6dde8" strokeWidth="1.5" />
            <rect x="126" y="220" width="100" height="36" rx="14" fill="#1d4ed8" />
            <rect x="238" y="220" width="116" height="36" rx="14" fill="#effcf4" stroke="#9bd6b3" strokeWidth="1.5" />
            <path d="M146 125h118M146 186h152" className={softLine} />
          </>
        );
      case "promotion":
        return (
          <>
            <rect x="40" y="44" width="400" height="248" rx="30" className={baseCard} />
            <path d="M98 202l44-90 34 26 40-40 72 28 62 74" stroke="#3b82f6" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="98" cy="202" r="10" fill="#1d4ed8" />
            <circle cx="142" cy="112" r="10" fill="#60a5fa" />
            <circle cx="216" cy="98" r="10" fill="#3b82f6" />
            <circle cx="288" cy="126" r="10" fill="#1d4ed8" />
            <circle cx="350" cy="200" r="10" fill="#60a5fa" />
            <rect x="62" y="72" width="116" height="30" rx="15" fill="#eef5ff" stroke="#87a8ff" strokeWidth="1.5" />
          </>
        );
      case "tools":
        return (
          <>
            <rect x="38" y="44" width="404" height="248" rx="30" className={baseCard} />
            <rect x="66" y="76" width="348" height="168" rx="24" fill="#f7fbff" stroke="#d6dde8" strokeWidth="1.5" />
            <rect x="90" y="100" width="96" height="96" rx="18" fill="#eef5ff" stroke="#98b6ff" strokeWidth="1.5" />
            <path d="M108 170l20-24 18 12 20-28" stroke="#1d4ed8" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="212" y="100" width="176" height="18" rx="9" fill="#1d4ed8" />
            <rect x="212" y="132" width="150" height="10" rx="5" fill="#94a3b8" />
            <rect x="212" y="156" width="140" height="10" rx="5" fill="#94a3b8" />
            <rect x="212" y="180" width="122" height="10" rx="5" fill="#94a3b8" />
          </>
        );
      case "ai-overview":
        return (
          <>
            <rect x="34" y="42" width="412" height="252" rx="30" className={baseCard} />
            <rect x="62" y="74" width="356" height="42" rx="16" fill="#eef5ff" stroke="#9cb9ff" strokeWidth="1.5" />
            <circle cx="88" cy="95" r="8" fill="#2563eb" />
            <path d="M108 95h146" className={softLine} />
            <rect x="62" y="134" width="356" height="92" rx="24" fill="#ffffff" stroke="#d6dde8" strokeWidth="1.5" />
            <rect x="84" y="154" width="110" height="28" rx="14" fill="#dbeafe" />
            <text x="103" y="172" fill="#1d4ed8" fontSize="12" fontWeight="700">AI</text>
            <path d="M84 198h256M84 218h220" className={softLine} />
            <rect x="62" y="244" width="112" height="26" rx="13" fill="#effcf4" stroke="#9bd6b3" strokeWidth="1.5" />
            <rect x="188" y="244" width="112" height="26" rx="13" fill="#eef5ff" stroke="#9cb9ff" strokeWidth="1.5" />
            <rect x="314" y="244" width="104" height="26" rx="13" fill="#fff7ed" stroke="#f3c56d" strokeWidth="1.5" />
          </>
        );
      case "snippet":
        return (
          <>
            <rect x="38" y="42" width="404" height="252" rx="30" className={baseCard} />
            <rect x="66" y="72" width="348" height="52" rx="18" fill="#eef5ff" stroke="#9cb9ff" strokeWidth="1.5" />
            <rect x="88" y="90" width="188" height="10" rx="5" fill="#1d4ed8" />
            <rect x="88" y="108" width="128" height="8" rx="4" fill="#93a4bf" />
            <rect x="66" y="140" width="348" height="80" rx="20" fill="#fffdf7" stroke="#f0cf85" strokeWidth="1.5" />
            <text x="88" y="166" fill="#0f172a" fontSize="14" fontWeight="700">Position Zero</text>
            <path d="M88 184h218M88 202h170" className={softLine} />
            <rect x="66" y="236" width="348" height="34" rx="17" fill="#ffffff" stroke="#d6dde8" strokeWidth="1.5" />
            <path d="M92 253h102M220 253h78M322 253h52" className={softLine} />
          </>
        );
      case "backlinks":
        return (
          <>
            <rect x="36" y="42" width="408" height="252" rx="30" className={baseCard} />
            <rect x="172" y="112" width="136" height="112" rx="24" fill="#eef5ff" stroke="#9cb9ff" strokeWidth="1.5" />
            <text x="198" y="148" fill="#1d4ed8" fontSize="14" fontWeight="700">Authority</text>
            <path d="M208 182h64" className={softLine} />
            <rect x="64" y="76" width="76" height="46" rx="18" fill="#effcf4" stroke="#9bd6b3" strokeWidth="1.5" />
            <rect x="342" y="76" width="76" height="46" rx="18" fill="#effcf4" stroke="#9bd6b3" strokeWidth="1.5" />
            <rect x="70" y="238" width="84" height="34" rx="17" fill="#fff1f2" stroke="#f4a3b4" strokeWidth="1.5" />
            <path d="M140 110l40 28M340 110l-32 26" stroke="#22c55e" strokeWidth="7" strokeLinecap="round" />
            <path d="M154 240l34-30" stroke="#ef4444" strokeWidth="7" strokeLinecap="round" />
            <circle cx="188" cy="138" r="8" fill="#22c55e" />
            <circle cx="308" cy="136" r="8" fill="#22c55e" />
            <circle cx="188" cy="210" r="8" fill="#ef4444" />
          </>
        );
      case "competitors":
        return (
          <>
            <rect x="36" y="42" width="408" height="252" rx="30" className={baseCard} />
            <rect x="64" y="74" width="160" height="182" rx="24" fill="#f7fbff" stroke="#d6dde8" strokeWidth="1.5" />
            <text x="88" y="102" fill="#0f172a" fontSize="13" fontWeight="700">SERP</text>
            <rect x="88" y="124" width="112" height="34" rx="17" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5" />
            <rect x="88" y="170" width="96" height="30" rx="15" fill="#ffffff" stroke="#d6dde8" strokeWidth="1.5" />
            <rect x="88" y="212" width="84" height="26" rx="13" fill="#ffffff" stroke="#d6dde8" strokeWidth="1.5" />
            <rect x="250" y="92" width="150" height="148" rx="24" fill="#ffffff" stroke="#d6dde8" strokeWidth="1.5" />
            <path d="M282 210V130M322 210V112M362 210V154" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
            <path d="M282 210V148M322 210V88M362 210V128" stroke="#2563eb" strokeWidth="10" strokeLinecap="round" />
            <path d="M270 248h106" className={softLine} />
          </>
        );
      case "clusters":
        return (
          <>
            <rect x="36" y="42" width="408" height="252" rx="30" className={baseCard} />
            <circle cx="240" cy="168" r="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="5" />
            <text x="213" y="173" fill="#1d4ed8" fontSize="14" fontWeight="700">Pillar</text>
            <circle cx="132" cy="104" r="24" fill="#eef5ff" stroke="#9cb9ff" strokeWidth="4" />
            <circle cx="348" cy="104" r="24" fill="#eef5ff" stroke="#9cb9ff" strokeWidth="4" />
            <circle cx="132" cy="236" r="24" fill="#effcf4" stroke="#9bd6b3" strokeWidth="4" />
            <circle cx="348" cy="236" r="24" fill="#fff7ed" stroke="#f3c56d" strokeWidth="4" />
            <path d="M154 118l54 30M326 118l-54 30M154 222l54-30M326 222l-54-30" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" />
            <path d="M132 128v84M348 128v84" stroke="#c6d2e2" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />
          </>
        );
      case "diagnostics":
        return (
          <>
            <rect x="36" y="42" width="408" height="252" rx="30" className={baseCard} />
            <rect x="64" y="74" width="208" height="188" rx="24" fill="#ffffff" stroke="#d6dde8" strokeWidth="1.5" />
            <text x="88" y="106" fill="#0f172a" fontSize="13" fontWeight="700">SEO Audit</text>
            <rect x="88" y="126" width="128" height="24" rx="12" fill="#effcf4" stroke="#9bd6b3" strokeWidth="1.5" />
            <rect x="88" y="164" width="112" height="24" rx="12" fill="#fff7ed" stroke="#f3c56d" strokeWidth="1.5" />
            <rect x="88" y="202" width="144" height="24" rx="12" fill="#fff1f2" stroke="#f4a3b4" strokeWidth="1.5" />
            <circle cx="346" cy="152" r="48" fill="#eef5ff" stroke="#9cb9ff" strokeWidth="5" />
            <circle cx="346" cy="152" r="18" fill="#ffffff" stroke="#2563eb" strokeWidth="4" />
            <path d="M378 186l24 24" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" />
            <path d="M334 152h24M346 140v24" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
          </>
        );
      default:
        return (
          <>
            <rect x="36" y="44" width="408" height="248" rx="28" className={baseCard} />
            <rect x="76" y="86" width="328" height="44" rx="18" fill="#eef5ff" stroke="#87a8ff" strokeWidth="1.5" />
            <rect x="76" y="152" width="328" height="96" rx="22" fill="#ffffff" stroke="#d6dde8" strokeWidth="1.5" />
            <path d="M102 178h204M102 198h246M102 218h168" className={softLine} />
          </>
        );
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(235,244,255,0.8)_55%,_rgba(227,250,237,0.65))] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.06),rgba(34,197,94,0.04))]" />
      <div className="relative">
        <div className="mb-3 inline-flex rounded-full border border-[#d9e2ef] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5b6f8f]">
          {title}
        </div>
        {imageSrc && !showFallback ? (
          <img
            src={imageSrc}
            alt={title}
            className="h-auto w-full rounded-[1.5rem] object-cover"
            loading="lazy"
            onError={() => setShowFallback(true)}
          />
        ) : (
          <svg viewBox="0 0 480 340" className="h-auto w-full" aria-hidden="true">
            {renderVariant()}
          </svg>
        )}
      </div>
    </div>
  );
};

export default SeoCourseArtwork;
