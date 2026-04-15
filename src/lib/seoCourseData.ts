export type SeoLessonSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoLesson = {
  slug: string;
  sectionId: string;
  title: string;
  shortTitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroEyebrow: string;
  illustration: string;
  updatedFor: string;
  intro: string[];
  sections: SeoLessonSection[];
  checklist: string[];
  mistakes: string[];
  faq: SeoFaq[];
  relatedSlugs: string[];
};

export type SeoSection = {
  id: string;
  title: string;
  description: string;
  order: number;
  keywords: string[];
  lessonSlugs: string[];
};

export const seoSections: SeoSection[] = [
  {
    id: "seo-pagrindai",
    title: "SEO pagrindai",
    description:
      "Pirmos dvi pamokos nustato, kaip jūsų puslapis atrodo paieškos rezultatuose ir kaip vartotojas nusprendžia paspausti būtent jį.",
    order: 1,
    keywords: ["seo pagrindai", "meta title", "meta description", "seo pradžiamokslis"],
    lessonSlugs: ["meta-pavadinimai", "meta-aprasymai"],
  },
  {
    id: "tinklapio-struktura",
    title: "Tinklapio struktūros tobulinimas",
    description:
      "Šis modulis padeda susitvarkyti URL logiką, puslapių hierarchiją ir naršymo aiškumą tiek vartotojui, tiek Google.",
    order: 2,
    keywords: ["url struktura", "svetaines struktura", "vidine navigacija", "breadcrumbs seo"],
    lessonSlugs: ["url-adresu-struktura", "svetaines-narsymas"],
  },
  {
    id: "turinio-optimizavimas",
    title: "Turinio optimizavimas",
    description:
      "Didžiausias kurso modulis, skirtas turiniui, vidinėms nuorodoms, paveikslėliams ir H1-H6 antraščių architektūrai.",
    order: 3,
    keywords: ["turinio optimizavimas", "on page seo", "anchor tekstai", "image seo", "heading tags"],
    lessonSlugs: [
      "kokybiskas-turinys",
      "anchor-tekstai",
      "paveiksleliu-seo",
      "heading-tags",
    ],
  },
  {
    id: "google-robotai",
    title: "Tvarkymasis su Google robotukais",
    description:
      "Pamokos apie crawl valdymą, indeksavimą ir nuorodų atributus, kurie dažnai painiojami net pažengusiuose projektuose.",
    order: 4,
    keywords: ["robots txt", "nofollow", "sponsored", "ugc", "google robotai"],
    lessonSlugs: ["robots-txt", "nofollow-nuorodos"],
  },
  {
    id: "seo-mobiliesiems",
    title: "SEO mobiliesiems telefonams",
    description:
      "Mobile-first indexing, mobilus UX ir praktiniai veiksmai, kurie tiesiogiai veikia matomumą ir konversijas.",
    order: 5,
    keywords: ["mobile seo", "mobile first indexing", "mobilus ux", "seo telefonams"],
    lessonSlugs: ["mobilioji-versija", "mobilus-narsymas"],
  },
  {
    id: "seo-reklama-analize",
    title: "SEO reklama ir analizė",
    description:
      "Pamokos apie tai, kaip auginti organinį matomumą etiška sklaida ir kaip skaityti svarbiausius SEO signalus iš nemokamų įrankių.",
    order: 6,
    keywords: ["seo analize", "search console", "seo reklama", "organinis augimas"],
    lessonSlugs: ["svetaines-reklama", "webmaster-irankiai"],
  },
  {
    id: "advanced-seo",
    title: "Pažengusios SEO temos ir 2026 atnaujinimai",
    description:
      "Papildomas modulis su AI Overviews, featured snippets, backlink kokybe, konkurentų analize, topical clusters ir matomumo problemų diagnostika.",
    order: 7,
    keywords: [
      "google ai overviews",
      "position zero",
      "backlink quality",
      "seo konkurentu analize",
      "vidinis seo",
      "kodel neranda google",
    ],
    lessonSlugs: [
      "google-ai-overviews",
      "position-zero",
      "atgaliniu-nuorodu-kokybe",
      "seo-konkurentu-analize",
      "vidinis-seo-klasteriai",
      "kodel-manes-neranda-google",
    ],
  },
];

export const seoLessons: SeoLesson[] = [
  {
    slug: "meta-pavadinimai",
    sectionId: "seo-pagrindai",
    title: "Sukurkite unikalius, tikslius puslapių pavadinimus",
    shortTitle: "Meta pavadinimai",
    description:
      "Pamoka apie meta title žymų kūrimą: raktažodžių prioritetai, CTR, puslapių intencija ir title signalai AI eros paieškoje.",
    metaTitle: "Meta pavadinimai: kaip rašyti title žymas SEO rezultatams | LamaLocal",
    metaDescription:
      "Išmokite kurti stiprius meta pavadinimus: title žymų struktūra, raktažodžiai, CTR didinimas, dažniausios klaidos ir 2026 SEO rekomendacijos.",
    keywords: [
      "meta pavadinimai",
      "title tag seo",
      "seo pavadinimai",
      "google resultatu pavadinimai",
      "kaip rasyti meta title",
    ],
    heroEyebrow: "SEO pagrindai",
    illustration: "title",
    updatedFor: "Atnaujinta pagal 2025-2026 Google title link praktiką",
    intro: [
      "Meta pavadinimas yra vienas svarbiausių on-page signalų, nes jis vienu metu padeda Google suprasti puslapio temą ir daro tiesioginę įtaką tam, ar žmogus paspaus rezultatą. Dėl šios priežasties title negali būti laikomas tik techniniu laukeliu CMS sistemoje.",
      "Moderniame SEO title žyma turi atitikti ne tik raktažodį, bet ir paieškos intenciją. Jei žmogus ieško kainos, palyginimo ar paslaugos konkrečiame mieste, pavadinime turi atsispindėti būtent tas kontekstas, o ne bendrinė frazė be naudos.",
    ],
    sections: [
      {
        id: "ka-title-veikia",
        title: "Kaip title žyma veikia reitingus ir paspaudimus",
        paragraphs: [
          "Google title žymą naudoja kaip vieną iš teminio konteksto signalų, tačiau realiame rezultate gali parodyti ir perrašytą pavadinimą. Tai reiškia, kad jūsų tikslas nėra tik įrašyti raktažodį, o sukurti pavadinimą, kuris būtų aiškus, tikslus ir vertingas vartotojui.",
          "Title žyma turi dirbti dviem lygiais: semantiškai paaiškinti puslapio turinį ir sukurti pakankamą motyvaciją paspausti. Jei ji per abstrakti, kentės CTR. Jei per daug prikimšta raktažodžių, kentės pasitikėjimas ir gali būti perrašyta.",
        ],
        bullets: [
          "Pagrindinis raktažodis turėtų būti arčiau pradžios, jei tai natūralu.",
          "Pavadinime verta išryškinti intenciją: kaina, paslaugos, gidas, palyginimas, pavyzdžiai.",
          "Brando pavadinimą dažniausiai verta dėti pabaigoje, ne pradžioje.",
        ],
      },
      {
        id: "title-struktura",
        title: "Title struktūra, kuri šiandien veikia geriausiai",
        paragraphs: [
          "Geriausiai dirba pavadinimai, kurie aiškiai sujungia temą, naudą ir kontekstą. Pavyzdžiui, vietoje bendro „SEO paslaugos“ kur kas stipriau veikia „SEO paslaugos Kaune: auditas, strategija ir augimo planas“.",
          "Jei puslapis komercinis, title turi padėti sprendimui. Jei informacinis, jis turi pažadėti aiškų rezultatą. Praktikoje verta testuoti kelias formules skirtingiems puslapių tipams ir po to žiūrėti, kurios duoda geresnį CTR Search Console ataskaitose.",
        ],
        bullets: [
          "Kategorijos puslapis: tema + lokacija + vertė.",
          "Straipsnis: klausimas arba aiški nauda + metai arba formatas.",
          "Paslaugos puslapis: paslauga + auditorija + rezultato kryptis.",
        ],
      },
      {
        id: "title-ai-era",
        title: "Kas pasikeitė AI Overviews ir generatyvinės paieškos eroje",
        paragraphs: [
          "AI Overviews ir kiti generatyviniai atsakymų blokai nepanaikino title svarbos. Priešingai, jie padidino aiškaus puslapio identiteto reikšmę. Kai sistema sprendžia, kuriuo šaltiniu pasitikėti, jai naudinga, kai puslapio tema, paskirtis ir struktūra nėra dviprasmės.",
          "Todėl šiandien title turi dirbti kartu su H1, intro tekstu, vidinėmis nuorodomis ir schema. Kuo vientisesnė semantika tarp šių elementų, tuo didesnė tikimybė, kad puslapis bus suvoktas kaip tikslus atsakymas į teminę užklausą.",
        ],
      },
      {
        id: "title-testavimas",
        title: "Kaip testuoti ir tobulinti pavadinimus",
        paragraphs: [
          "Title žymų optimizavimas neturėtų būti vienkartinis darbas. Search Console duomenys leidžia matyti, kurie puslapiai jau turi parodymus, bet nepakankamą paspaudimų rodiklį. Tai yra aiškiausia vieta title iteracijoms.",
          "Pirmiausia ieškokite puslapių, kurių vidutinė pozicija yra 3-12 intervale. Tokie puslapiai dažnai jau turi reitingo potencialą, todėl net nedidelis title pagerinimas gali greitai atnešti daugiau srauto be naujo turinio kūrimo.",
        ],
      },
    ],
    checklist: [
      "Kiekvienas indeksuojamas puslapis turi unikalų title.",
      "Pagrindinis raktažodis integruotas natūraliai, ne spaminiu būdu.",
      "Title atitinka puslapio intenciją ir H1 logiką.",
      "Svarbiausi komerciniai puslapiai peržiūrėti pagal CTR duomenis.",
    ],
    mistakes: [
      "Identiški title keliuose puslapiuose.",
      "Per ilgi ir raktažodžiais perkrauti pavadinimai.",
      "Brando pavadinimo dėjimas pradžioje ten, kur svarbiau tema.",
      "Title neatitinka realaus puslapio turinio ir žada per daug.",
    ],
    faq: [
      {
        question: "Ar title turi būti būtinai iki 60 simbolių?",
        answer:
          "Ne. Svarbiau aiškumas ir nauda. Praktikoje verta orientuotis į matomumą SERP rezultate, tačiau per trumpas ir per ilgas title gali veikti blogiau nei gerai suformuluotas vidutinio ilgio variantas.",
      },
      {
        question: "Ar galima naudoti miestų pavadinimus title žymoje?",
        answer:
          "Taip, jei puslapis iš tikrųjų orientuotas į tą lokaciją ir jo turinys tai pagrindžia. Lokacijos title žymoje padeda vietiniam SEO, kai jos naudojamos prasmingai.",
      },
    ],
    relatedSlugs: ["meta-aprasymai", "heading-tags", "svetaines-reklama"],
  },
  {
    slug: "meta-aprasymai",
    sectionId: "seo-pagrindai",
    title: "Išnaudokite meta aprašymo galimybes",
    shortTitle: "Meta aprašymai",
    description:
      "Pamoka apie meta description optimizavimą: kaip kurti snippet tekstus, didinti CTR ir valdyti SERP komunikaciją pagal naujausius Google standartus.",
    metaTitle: "Meta description optimizavimas: kaip rašyti aprašymus SEO | LamaLocal",
    metaDescription:
      "Sužinokite, kaip rašyti meta aprašymus, kurie didina paspaudimus: snippet struktūra, intencija, dažnos klaidos ir 2026 SEO rekomendacijos.",
    keywords: [
      "meta description",
      "meta aprasymai",
      "seo aprasymai",
      "snippet optimizavimas",
      "kaip rasyti meta description",
    ],
    heroEyebrow: "SEO pagrindai",
    illustration: "description",
    updatedFor: "Atnaujinta pagal 2025-2026 snippet valdymo praktiką",
    intro: [
      "Meta aprašymas nėra klasikinis reitingavimo veiksnys, tačiau jis daro didelę įtaką paspaudimų rodikliui. Praktikoje tai yra vienas greičiausių būdų pagerinti organinį srautą nekeičiant pačios pozicijos.",
      "Kai title pritraukia dėmesį, meta aprašymas turi užbaigti pardavimo argumentą. Jis turi paaiškinti, ką žmogus gaus puslapyje, kodėl tai aktualu dabar ir kuo rezultatas išsiskiria iš kitų.",
    ],
    sections: [
      {
        id: "meta-vertes-kampas",
        title: "Kaip suformuluoti aprašymą, kuris kelia CTR",
        paragraphs: [
          "Stipriausi meta aprašymai remiasi ne raktažodžių kaupimu, o verte. Jie aiškiai pasako, kas puslapyje bus išspręsta: ar tai gidas, ar paslaugos apžvalga, ar kainodara, ar konkretus veiksmų planas.",
          "Gera schema dažniausiai atrodo taip: tema + vartotojo problema + sprendimas + konkretus pažadas. Toks modelis padeda rašyti aprašymus, kurie skamba natūraliai ir kartu atliepia paieškos intenciją.",
        ],
        bullets: [
          "Rodykite naudą, o ne tik vardinkite raktinius žodžius.",
          "Naudokite kalbą, kuri atitinka puslapio etapą: informacija, pasirinkimas arba pirkimas.",
          "Jei turite, įterpkite patikimumo signalą: metai, skaičius, apimtis, rezultato laikas.",
        ],
      },
      {
        id: "snippet-kontrole",
        title: "Kada Google parodo jūsų aprašymą, o kada ne",
        paragraphs: [
          "Google gali pasirinkti parodyti jūsų parašytą meta description arba sugeneruoti savo snippet iš puslapio turinio. Tai dažniausiai priklauso nuo to, kaip gerai jūsų aprašymas atitinka konkrečią užklausą.",
          "Dėl šios priežasties svarbu ne tik rašyti gerą description, bet ir užtikrinti, kad puslapio įžanga, antraštės ir pirmosios pastraipos sustiprintų tą pačią pagrindinę žinutę. Tuomet net jei snippet bus sugeneruotas automatiškai, jis vis tiek išliks stiprus.",
        ],
      },
      {
        id: "meta-ai-snippets",
        title: "Snippet mąstymas AI ir atsakymų blokų laikais",
        paragraphs: [
          "AI atsakymų blokai nesumažina snippet svarbos klasikiniuose rezultatuose. Jie pakelia kokybės kartelę. Rezultatai, kurie aiškiai komunikuoja prasmę, dažniau laimi likusius paspaudimus iš vartotojų, kurie vis dar nori atsidaryti konkretų šaltinį.",
          "Todėl aprašyme verta naudoti aiškią, tikslią kalbą ir vengti tuščio marketinginio triukšmo. Kuo labiau aprašymas skamba kaip konkretus pažadas, tuo daugiau šansų, kad jis laimės prieš bendro pobūdžio konkurentus.",
        ],
      },
      {
        id: "meta-testai",
        title: "Kaip atlikti snippet testus be bereikalingo chaoso",
        paragraphs: [
          "Neperrašykite visų aprašymų vienu metu. Pirmiausia identifikuokite puslapius, kuriuose yra daug parodymų ir prastesnis nei tikėtasi CTR. Tada keiskite aprašymus etapais ir stebėkite 3-6 savaičių pokytį.",
          "Svarbiausia lyginti panašaus tipo puslapius. Produkto, paslaugos ir informacinio straipsnio snippet logika skiriasi, todėl geriausia juos vertinti atskiruose segmentuose.",
        ],
      },
    ],
    checklist: [
      "Meta aprašymas aiškiai paaiškina puslapio vertę.",
      "Tekstas atitinka paieškos intenciją ir puslapio tipą.",
      "Description nėra dubliuojamas kituose puslapiuose.",
      "Svarbiausių URL CTR stebimas Search Console.",
    ],
    mistakes: [
      "Description tampa tik raktažodžių sąrašu.",
      "Pažadai neatitinka realaus turinio.",
      "Tas pats aprašymas naudojamas visam kategorijos šablonui.",
      "Aprašymas rašomas ne žmogui, o vien robotui.",
    ],
    faq: [
      {
        question: "Ar meta description gali tiesiogiai pakelti pozicijas?",
        answer:
          "Tiesiogiai ne, tačiau geresnis CTR ir geresnis SERP atitikimas gali padėti išspausti daugiau naudos iš esamų pozicijų. Tai viena geriausių greitų optimizacijų.",
      },
      {
        question: "Ar verta naudoti klausimą meta aprašyme?",
        answer:
          "Taip, jei užklausa informacinė. Klausimo formatas veikia tada, kai jis tiksliai atspindi realią vartotojo problemą ir iš karto žada atsakymą.",
      },
    ],
    relatedSlugs: ["meta-pavadinimai", "kokybiskas-turinys", "webmaster-irankiai"],
  },
  {
    slug: "url-adresu-struktura",
    sectionId: "tinklapio-struktura",
    title: "Pagerinkite savo URL adresų struktūrą",
    shortTitle: "URL struktūra",
    description:
      "Pamoka apie SEO draugiškus URL adresus: trumpi, logiški, raktažodžių prasme tikslūs ir tvarkingi adresai be indeksavimo chaoso.",
    metaTitle: "URL struktūra SEO: kaip kurti aiškius svetainės adresus | LamaLocal",
    metaDescription:
      "Išmokite kurti SEO draugišką URL struktūrą: trumpi adresai, hierarchija, peradresavimai, parametrų kontrolė ir praktiniai pavyzdžiai.",
    keywords: [
      "url struktura",
      "seo url adresai",
      "puslapio url optimizavimas",
      "peradresavimai seo",
      "svetaines adresu struktura",
    ],
    heroEyebrow: "Tinklapio struktūra",
    illustration: "url",
    updatedFor: "Atnaujinta pagal modernias informacijos architektūros ir crawl logikos praktikas",
    intro: [
      "URL struktūra daro įtaką ne tik tam, kaip atrodo nuoroda, bet ir kaip lengvai paieškos sistemos bei žmonės supranta puslapio vietą svetainės hierarchijoje. Netvarkinga adresų sistema greitai sukuria dubliavimo ir perindeksavimo problemas.",
      "Geras URL turi būti lengvai skaitomas, stabilus ir semantiškai aiškus. Jis neturi keistis be rimtos priežasties, nes kiekvienas pakeitimas reiškia papildomą peradresavimo, indeksavimo ir vidinių nuorodų darbą.",
    ],
    sections: [
      {
        id: "url-principai",
        title: "Kokie URL adresai laikomi tvarkingais šiandien",
        paragraphs: [
          "Trumpi, loginiai ir aiškūs URL padeda geriau perduoti turinio temą. Praktikoje tai reiškia, kad adresas turi remtis žmonėms suprantamais žodžiais, o ne atsitiktiniais ID, parametrais ar senų sistemų likučiais.",
          "Jei puslapis priklauso kategorijai, URL turi padėti matyti tą struktūrą, bet nereikia jos perkrauti. Kuo daugiau nereikalingų lygių, tuo didesnė tikimybė susikurti nepatogią hierarchiją ir vidinių nuorodų painiavą.",
        ],
        bullets: [
          "Naudokite mažąsias raides ir brūkšnelius tarp žodžių.",
          "Venkite bereikalingų datų, ID ir filtrų indeksuojamuose URL.",
          "Adresas turi būti suprantamas net be puslapio pavadinimo šalia.",
        ],
      },
      {
        id: "url-hierarchija",
        title: "Kaip sukurti aiškią URL hierarchiją didesniam projektui",
        paragraphs: [
          "Dideliame projekte verta galvoti ne apie pavienius adresus, o apie visą architektūrą. Paslaugos, miestai, straipsniai, atvejai ir mokomoji medžiaga turi turėti skirtingus URL modelius, kad svetainė būtų lengvai suprantama ir plėtojama.",
          "Jei viena tema turi daug susijusių puslapių, patogu naudoti klasterio logiką. Pavyzdžiui, mokymų turinį galima talpinti po vienu segmentu, o atskiras pamokas kurti kaip vaikinius puslapius. Tai padeda tiek SEO, tiek UX.",
        ],
      },
      {
        id: "url-peradresavimai",
        title: "Kada URL keisti, o kada geriau jo neliesti",
        paragraphs: [
          "Vien todėl, kad dabartinis URL nėra idealus, nereiškia, kad būtina jį keisti. Jei puslapis jau turi autoritetą, nuorodas ir srautą, kiekvienas pakeitimas turi kainą. Keisti verta tada, kai nauda aiškiai didesnė už migracijos riziką.",
          "Jei vis dėlto URL keičiate, būtina suplanuoti 301 peradresavimus, atnaujinti vidines nuorodas, sitemap ir patikrinti, ar nauji adresai teisingai indeksuojami. Blogai atliktas URL pakeitimas gali laikinai arba ilgam numušti organinį srautą.",
        ],
      },
      {
        id: "url-filtrai",
        title: "Parametrai, filtrai ir indeksavimo disciplina",
        paragraphs: [
          "E. komercijoje ir didesniuose kataloguose filtrai dažnai generuoja daug URL variantų. Jei jie nekontroliuojami, paieškos sistemos pradeda eikvoti crawl biudžetą menkaverčiams puslapiams.",
          "Tokiais atvejais svarbu apsispręsti, kurie filtrų puslapiai turi realią paieškos paklausą, o kurie turi likti neindeksuojami. Čia sprendimą lemia ne technika viena, o realūs raktažodžių duomenys ir intencija.",
        ],
      },
    ],
    checklist: [
      "URL trumpas, skaitomas ir semantiškai aiškus.",
      "Svetainė turi nuoseklius URL modelius skirtingiems turinio tipams.",
      "Keičiant adresus naudojami 301 peradresavimai.",
      "Filtrų ir parametrų puslapiai valdomi pagal realią paieškos paklausą.",
    ],
    mistakes: [
      "Kiekvieno URL keitimas vien dėl kosmetikos.",
      "Indeksuojami filtrų URL be jokios paklausos.",
      "Vidinės nuorodos paliekamos rodyti į senus adresus.",
      "Keliose vietose naudojami skirtingi URL formatai tam pačiam turinio tipui.",
    ],
    faq: [
      {
        question: "Ar URL būtina turėti raktažodį?",
        answer:
          "Nebūtinai kiekvieną, tačiau teminis aiškumas naudinga. Raktažodis URL padeda, kai jis ten įrašomas natūraliai ir nekelia triukšmo.",
      },
      {
        question: "Ar lietuviškos raidės URL adrese kenkia SEO?",
        answer:
          "Technologiškai jos gali veikti, tačiau praktikoje saugiau rinktis paprastesnę transliteruotą formą. Taip išvengsite dalinimosi ir suderinamumo problemų.",
      },
    ],
    relatedSlugs: ["svetaines-narsymas", "robots-txt", "mobilioji-versija"],
  },
  {
    slug: "svetaines-narsymas",
    sectionId: "tinklapio-struktura",
    title: "Padarykite savo svetainę lengviau naršomą",
    shortTitle: "Svetainės naršymas",
    description:
      "Pamoka apie meniu, breadcrumbs, klasterius ir vidinį maršrutizavimą, kurie padeda ir vartotojui, ir Google suprasti svetainės logiką.",
    metaTitle: "Svetainės naršymas SEO: meniu, breadcrumb ir struktūra | LamaLocal",
    metaDescription:
      "Sužinokite, kaip sukurti aiškų svetainės naršymą: meniu, vidinės nuorodos, breadcrumb, topical clusters ir UX principai SEO augimui.",
    keywords: [
      "svetaines narsymas",
      "breadcrumb seo",
      "vidines nuorodos",
      "svetaines meniu seo",
      "topical clusters",
    ],
    heroEyebrow: "Tinklapio struktūra",
    illustration: "navigation",
    updatedFor: "Atnaujinta pagal topical authority ir vidinės architektūros principus",
    intro: [
      "Lengvai naršoma svetainė paieškos sistemoms siunčia labai aiškų signalą: svarbiausi puslapiai yra prioritetizuoti, susiję tarpusavyje ir lengvai pasiekiami. Tai stiprina indeksavimą ir padeda paskirstyti vidinį autoritetą ten, kur jo reikia labiausiai.",
      "Vartotojui geras naršymas reiškia mažiau pasimetimo. Kuo greičiau žmogus randa atsakymą, tuo didesnė tikimybė, kad jis liks ilgiau, pereis į kitus puslapius ir atliks konversiją.",
    ],
    sections: [
      {
        id: "navigacijos-logika",
        title: "Naršymo sistema turi atspindėti verslo prioritetus",
        paragraphs: [
          "Dažna klaida yra kurti meniu pagal vidinę komandos logiką, o ne pagal tai, kaip ieško vartotojas. Pagrindinės kategorijos turi būti sudėliotos pagal rinkos poreikį ir paklausą, ne pagal organizacinę struktūrą.",
          "Jei puslapis svarbus komercijai ar augimui, jis turi būti lengvai randamas tiek iš viršutinio meniu, tiek iš susijusių vidinių nuorodų. Svarbiausi URL neturėtų slėptis už kelių gylio lygių.",
        ],
      },
      {
        id: "breadcrumbs-ir-klasteriai",
        title: "Breadcrumbs, klasteriai ir semantinis ryšys tarp puslapių",
        paragraphs: [
          "Breadcrumbs padeda vienu metu trimis kryptimis: vartotojas mato kontekstą, robotas mato hierarchiją, o jūs gaunate papildomą vidinių nuorodų sluoksnį. Tai ypač svarbu didesnėse informacinėse ir paslaugų svetainėse.",
          "Topical clusters leidžia aplink vieną pagrindinį puslapį pastatyti kelis susijusius puslapius, kurie stiprina vienas kitą. Tokia architektūra yra viena geriausių ilgalaikiam teminiam autoritetui auginti.",
        ],
        bullets: [
          "Pillar puslapis apima plačią temą.",
          "Klasterio puslapiai gilinasi į konkrečius klausimus.",
          "Vidinės nuorodos turi būti abipusės ir prasmingos.",
        ],
      },
      {
        id: "vidiniu-nuorodu-strategija",
        title: "Vidinių nuorodų strategija vietoje atsitiktinių linkų",
        paragraphs: [
          "Vidinės nuorodos turi būti planuojamos, o ne paliekamos „jei prisiminsime“. Kiekviena nauja pamoka, straipsnis ar paslaugų puslapis turėtų turėti aiškų sąrašą, iš kur gauna ir kur perduoda teminį signalą.",
          "Kai vidinės nuorodos formuoja logišką kelią nuo platesnės temos link specifinės, paieškos sistemai tampa aiškiau, kuris puslapis yra pagrindinis, kuris palaikantis, o kuris transakcinis.",
        ],
      },
      {
        id: "ux-ir-konversija",
        title: "SEO naršymas turi palaikyti ne tik srautą, bet ir konversiją",
        paragraphs: [
          "Jei žmogus atėjo iš paieškos, jam dažniausiai reikia ne tik informacijos, bet ir aiškaus kito žingsnio. Todėl navigacija turi palaikyti veiksmą: susijusios paslaugos, kitas pamokos lygis, auditai, pavyzdžiai.",
          "Geras navigacijos dizainas leidžia pereiti nuo edukacinio turinio į komercinį puslapį be agresyvaus spaudimo. Tai kuria pasitikėjimą ir gerina bendrą svetainės vertę.",
        ],
      },
    ],
    checklist: [
      "Svarbiausi puslapiai pasiekiami per 1-2 paspaudimus.",
      "Breadcrumbs naudojami ten, kur turinys hierarchinis.",
      "Vidinės nuorodos suplanuotos pagal temas ir intenciją.",
      "Meniu atspindi realų paieškos poreikį, ne vidaus struktūrą.",
    ],
    mistakes: [
      "Per daug meniu punktų be aiškaus prioriteto.",
      "Vidinės nuorodos dedamos atsitiktinai arba išvis pamirštamos.",
      "Keli puslapiai konkuruoja dėl tos pačios temos be aiškios hierarchijos.",
      "Navigacija graži vizualiai, bet nepadeda vartotojui atlikti kito žingsnio.",
    ],
    faq: [
      {
        question: "Ar visiems puslapiams reikia breadcrumbs?",
        answer:
          "Ne visiems, bet hierarchiniam turiniui jie dažniausiai naudingi. Ypač ten, kur yra kategorijos, potemos ar mokymų moduliai.",
      },
      {
        question: "Kiek vidinių nuorodų viename puslapyje yra normalu?",
        answer:
          "Svarbiausia ne kiekis, o prasmingumas. Jei nuorodos padeda skaitytojui ir stiprina temos architektūrą, jų gali būti ir daugiau. Jei jos tik dėl SEO, jos praras vertę.",
      },
    ],
    relatedSlugs: ["url-adresu-struktura", "anchor-tekstai", "kokybiskas-turinys"],
  },
  {
    slug: "kokybiskas-turinys",
    sectionId: "turinio-optimizavimas",
    title: "Pasiūlykite svetainės lankytojams kokybišką turinį ir paslaugas",
    shortTitle: "Kokybiškas turinys",
    description:
      "Pamoka apie people-first turinį, E-E-A-T, temos gylį ir tai, kaip kurti puslapius, kurie verti reitingo ir verti pasitikėjimo.",
    metaTitle: "Kokybiškas turinys SEO: kaip kurti žmonėms ir Google | LamaLocal",
    metaDescription:
      "Išmokite kurti kokybišką SEO turinį: people-first principai, E-E-A-T, temos gylis, komercinė ir informacinė intencija bei 2026 atnaujinimai.",
    keywords: [
      "kokybiskas turinys seo",
      "people first content",
      "e-e-a-t",
      "seo straipsniu kurimas",
      "naudingas turinys google",
    ],
    heroEyebrow: "Turinio optimizavimas",
    illustration: "content",
    updatedFor: "Atnaujinta pagal Google people-first ir helpful content principus",
    intro: [
      "Kokybiškas turinys šiandien reiškia daug daugiau nei ilgą tekstą su keliais raktažodžiais. Jis turi būti naudingas, aiškus, sukurtas konkrečiam žmogui ir paremtas realia patirtimi, duomenimis arba įrodymais.",
      "Google jau seniai nebevertina vien to, ar tema paminėta pakankamai kartų. Dabar svarbiau, ar puslapis iš tiesų padeda vartotojui, ar jo autorius turi kompetencijos signalų ir ar turinys geriau nei konkurentų puslapiai išsprendžia užklausos tikslą.",
    ],
    sections: [
      {
        id: "people-first",
        title: "People-first principas: pradėkite nuo žmogaus, ne nuo raktinių žodžių",
        paragraphs: [
          "People-first nereiškia ignoruoti SEO. Tai reiškia, kad SEO turi tarnauti naudai, o ne imituoti turinį vien dėl robotų. Prieš rašydami turite aiškiai žinoti, kam puslapis skirtas, ką tas žmogus jau žino ir kokio sprendimo ieško.",
          "Kai puslapis atsako į realų klausimą aiškiai ir konkrečiai, raktažodžiai paprastai integruojasi natūraliai. Problemos prasideda tada, kai tekstas rašomas nuo frazių sąrašo, o ne nuo vartotojo užduoties.",
        ],
      },
      {
        id: "e-e-a-t",
        title: "E-E-A-T praktikoje: patirtis, ekspertika, autoritetas, patikimumas",
        paragraphs: [
          "Ne kiekvienas puslapis turi būti akademinis, tačiau kiekvienas svarbus puslapis turi rodyti, kodėl juo verta pasitikėti. Tai gali būti autoriaus kompetencija, realūs pavyzdžiai, atvejų analizės, proceso paaiškinimas arba skaidriai pateikti šaltiniai.",
          "Ypač svarbu YMYL temoms, bet ir paslaugų sektoriuje pasitikėjimas išlieka kritinis. Jei puslapis atrodo anoniminis, bendrinis ar per daug generinis, jo vertė šiandien mažėja net ir tuo atveju, kai techniniai SEO dalykai sutvarkyti.",
        ],
        bullets: [
          "Nurodykite autorių arba komandą, kai tai aktualu.",
          "Remkitės realia praktika, o ne vien apibendrintais teiginiais.",
          "Atnaujinkite turinį, kai keičiasi rinka ar Google rekomendacijos.",
        ],
      },
      {
        id: "turinio-gylis",
        title: "Temos gylis ir semantinis pilnumas",
        paragraphs: [
          "Gilus turinys ne visada reiškia ilgesnį turinį. Tai reiškia, kad puslapis padengia svarbiausius temos kampus: apibrėžimą, eigą, klaidas, kriterijus, pavyzdžius, alternatyvas ir veiksmus. Būtent tai leidžia žmogui pabaigti paiešką jūsų puslapyje.",
          "Praktikoje verta analizuoti, kokie klausimai kyla vartotojui prieš ir po pagrindinės temos. Taip susidaro natūralus H2/H3 karkasas, kuris stiprina ir SEO, ir skaitymo kokybę.",
        ],
      },
      {
        id: "turinys-komercijai",
        title: "Kaip suderinti edukacinį turinį su komercine nauda",
        paragraphs: [
          "Daug svetainių pasimeta tarp dviejų kraštutinumų: arba stumia pardavimą per anksti, arba duoda daug vertės, bet nepadeda žmogui žengti kito žingsnio. Geras puslapis daro abu dalykus: edukuoja ir subtiliai veda link sprendimo.",
          "Tam padeda aiški struktūra: edukacinis turinys, praktiniai pavyzdžiai, susijusi paslauga, atvejo analizė ir kvietimas veiksmui. Tokiu būdu puslapis tampa naudingas ir informacinei, ir komercinei intencijai.",
        ],
      },
    ],
    checklist: [
      "Turinys rašomas konkrečiai auditorijai ir jos klausimui.",
      "Puslapyje matosi patirties arba ekspertikos signalai.",
      "Tema padengta giliau nei vien apibrėžimas ir keli patarimai.",
      "Yra aiškus kitas žingsnis: susijęs puslapis, paslauga ar papildoma pamoka.",
    ],
    mistakes: [
      "Tekstas rašomas nuo raktažodžių sąrašo, o ne nuo žmogaus poreikio.",
      "Turinys generinis ir galėtų tikti bet kuriam domenui.",
      "Straipsnis ilgas, bet neatsako į svarbiausius praktinius klausimus.",
      "Puslapis neparodo, kodėl autoriaus požiūris vertas pasitikėjimo.",
    ],
    faq: [
      {
        question: "Ar ilgesnis tekstas visada reitinguoja geriau?",
        answer:
          "Ne. Laimi ne ilgis, o temos padengimas ir nauda. Kai kuriais atvejais trumpesnis, bet tikslesnis puslapis gali veikti geriau nei ilgas bendrybių tekstas.",
      },
      {
        question: "Ar AI parašytas turinys savaime blogas SEO?",
        answer:
          "Ne. Problema prasideda tada, kai jis generinis, netikslus arba be realios ekspertikos. AI gali padėti procese, bet galutinė vertė turi būti tikra ir redaguota atsakingai.",
      },
    ],
    relatedSlugs: ["anchor-tekstai", "heading-tags", "meta-pavadinimai"],
  },
  {
    slug: "anchor-tekstai",
    sectionId: "turinio-optimizavimas",
    title: "Parašykite geresnius anchor tekstus",
    shortTitle: "Anchor tekstai",
    description:
      "Pamoka apie anchor tekstus ir vidinių nuorodų formulavimą: kaip perduoti aiškų kontekstą, nestatyti spaminių linkų ir kurti stipresnį teminį tinklą.",
    metaTitle: "Anchor tekstai SEO: kaip rašyti nuorodų tekstus | LamaLocal",
    metaDescription:
      "Išmokite optimizuoti anchor tekstus: vidinės nuorodos, teminis kontekstas, natūralūs raktažodžiai ir dažniausios SEO klaidos.",
    keywords: [
      "anchor tekstai",
      "vidiniu nuorodu tekstai",
      "anchor text seo",
      "vidines nuorodos seo",
      "nuorodu tekstai",
    ],
    heroEyebrow: "Turinio optimizavimas",
    illustration: "anchor",
    updatedFor: "Atnaujinta pagal modernią internal linking ir semantic context praktiką",
    intro: [
      "Anchor tekstas yra vienas paprasčiausių būdų padėti tiek vartotojui, tiek Google suprasti, kur veda nuoroda. Tai ypač svarbu vidinėse nuorodose, nes jos formuoja jūsų temos architektūrą ir prioritetų sistemą.",
      "Blogas anchor tekstas palieka dviprasmybę. Geras anchor tekstas aiškiai nurodo, kas laukia kitame puslapyje ir kokį ryšį ta nuoroda turi su dabartiniu kontekstu.",
    ],
    sections: [
      {
        id: "anchor-prasme",
        title: "Kodėl anchor tekstas svarbus daugiau nei atrodo",
        paragraphs: [
          "Anchor tekstas veikia kaip mini anotacija nuorodai. Jis padeda suprasti, ar kitas puslapis yra apie kainodarą, gidą, auditą, pavyzdžius ar kitą tikslinę temą.",
          "Kai svetainėje daug puslapių, būtent anchor tekstai ir jų pasikartojimo logika pradeda formuoti stipresnį semantinį tinklą. Tai ypač svarbu klasteriniuose projektuose, kur keli puslapiai stiprina vieną pagrindinę temą.",
        ],
      },
      {
        id: "geri-ir-blogi-anchor",
        title: "Kokie anchor tekstai yra geri, o kokie silpni",
        paragraphs: [
          "Silpni anchor tekstai paprastai būna bendriniai: „spausti čia“, „daugiau“, „šitas straipsnis“. Jie beveik nieko nepasako nei vartotojui, nei robotui. Tokie variantai gali būti priimtini tik ten, kur kontekstas akivaizdus vizualiai, bet ne SEO svarbiame turinyje.",
          "Geresni anchor tekstai aprašo tikslą: „lokalaus SEO auditas“, „meta title optimizavimo gidas“, „Google Search Console ataskaitų analizė“. Jie aiškiai komunikuoja nuorodos paskirtį ir stiprina puslapių tarpusavio ryšį.",
        ],
        bullets: [
          "Anchor tekstas turi būti konkretus, bet ne dirbtinis.",
          "Venkite nuolat kartoti identišką tikslų raktažodį.",
          "Svarbiuose puslapiuose naudokite kelis semantiškai artimus variantus.",
        ],
      },
      {
        id: "internal-link-strategy",
        title: "Kaip sudėlioti vidinių nuorodų strategiją dideliam kursui ar svetainei",
        paragraphs: [
          "Kiekviena pamoka, paslaugos puslapis ar kategorija turi turėti aiškų ryšį su 2-5 kitais puslapiais. Tokiu būdu formuojamas mokymosi kelias žmogui ir aiškesnė temos hierarchija Google robotams.",
          "Svarbu, kad nuorodos būtų dedamos ten, kur jos natūraliai padeda skaitytojui. Jei nuoroda tik dėl SEO, bet nepadeda skaitymo srautui, jos vertė mažėja ir vartotojui, ir sistemai.",
        ],
      },
      {
        id: "anchor-overoptimization",
        title: "Kaip neperoptimizuoti anchor tekstų",
        paragraphs: [
          "Viena dažniausių klaidų yra visur kartoti identišką tikslią frazę. Tai atrodo nenatūraliai, skurdina tekstą ir dažnai rodo, kad puslapis optimizuotas pernelyg mechaniškai.",
          "Daug stipriau veikia natūrali įvairovė: tikslios frazės, semantiniai variantai, problemos formulavimas ir intenciją atspindintys žodynai. Tokia įvairovė padeda išlaikyti aiškumą be spaminių požymių.",
        ],
      },
    ],
    checklist: [
      "Svarbios vidinės nuorodos turi prasmingus anchor tekstus.",
      "Vengiama bendrinių „spausti čia“ variantų SEO svarbiose vietose.",
      "Pagrindinės temos palaikomos keliais semantiškai artimais anchor tekstais.",
      "Nuorodos padeda skaitymo eigai, o ne tik robotui.",
    ],
    mistakes: [
      "Per daug tikslių raktažodžių identišku formatu.",
      "Anchor tekstas nepaaiškina nuorodos paskirties.",
      "Nuorodos dedamos tik pabaigoje, be konteksto.",
      "Svarbūs puslapiai beveik neturi vidinių nuorodų.",
    ],
    faq: [
      {
        question: "Ar galima naudoti tikslius raktažodžius anchor tekstuose?",
        answer:
          "Taip, jei tai natūralu ir nepasikartoja mechaniškai visoje svetainėje. Tikslūs raktažodžiai naudingi, kai jie dera su sakiniu ir turi aiškų kontekstą.",
      },
      {
        question: "Ar CTA mygtukai gali būti anchor tekstais?",
        answer:
          "Gali, bet ne visada tai geriausias pasirinkimas SEO prasme. Svarbiausiame turinyje naudinga turėti ir tekstinių nuorodų su aiškesniu semantiniu aprašymu.",
      },
    ],
    relatedSlugs: ["svetaines-narsymas", "kokybiskas-turinys", "heading-tags"],
  },
  {
    slug: "paveiksleliu-seo",
    sectionId: "turinio-optimizavimas",
    title: "Išnaudokite savo svetainės paveikslėlių galimybes",
    shortTitle: "Paveikslėlių SEO",
    description:
      "Pamoka apie image SEO: alt tekstus, failų formatus, vaizdų prasmę puslapyje, puslapio greitį ir vaizdų indėlį į paiešką bei konversiją.",
    metaTitle: "Paveikslėlių SEO: alt tekstai, WebP, image search | LamaLocal",
    metaDescription:
      "Sužinokite, kaip optimizuoti paveikslėlius SEO: alt tekstai, failų pavadinimai, WebP, greitis, turinio kontekstas ir praktiniai patarimai.",
    keywords: [
      "paveiksleliu seo",
      "image seo",
      "alt tekstai",
      "webp seo",
      "google image search",
    ],
    heroEyebrow: "Turinio optimizavimas",
    illustration: "images",
    updatedFor: "Atnaujinta pagal vaizdų našumo ir paieškos interpretavimo praktiką",
    intro: [
      "Paveikslėliai nėra tik dekoracija. Jie gali paaiškinti procesą, parodyti rezultatą, sustiprinti pasitikėjimą ir pagerinti įsitraukimą. Tačiau tam, kad jie duotų SEO vertę, turi būti suprantami tiek vartotojui, tiek paieškos sistemai.",
      "Image SEO apima kelis sluoksnius vienu metu: failo formatą, dydį, alt tekstą, failo pavadinimą, aplinkinį tekstą ir techninį įkrovimo našumą. Vien tik įkelti nuotrauką šiandien jau nepakanka.",
    ],
    sections: [
      {
        id: "alt-ir-kontekstas",
        title: "Alt tekstas ir tikrasis paveikslėlio kontekstas",
        paragraphs: [
          "Alt tekstas turi paaiškinti vaizdą taip, kaip jį paaiškintumėte žmogui, kuris jo nemato. Jis neturi būti raktažodžių sandėlis. Tinkamas alt tekstas trumpai įvardija, kas matoma ir kodėl tai svarbu puslapio temai.",
          "Vien alt teksto nepakanka. Google vaizdo reikšmę vertina ir pagal aplinkinį tekstą, antraštę, failo pavadinimą bei bendrą puslapio temą. Todėl vaizdas turi būti logiškai įkomponuotas į pamoką ar straipsnį.",
        ],
      },
      {
        id: "formatas-ir-greitis",
        title: "Formatas, matmenys ir greitis",
        paragraphs: [
          "Dideli ir nesuspausti paveikslėliai dažnai yra viena pagrindinių lėto puslapio priežasčių. Kadangi Core Web Vitals ir mobilus greitis išlieka svarbūs, vaizdų optimizacija tiesiogiai susijusi su SEO kokybe.",
          "Dažniausiai geriausiai veikia modernūs formatai, tokie kaip WebP ar AVIF, tačiau svarbiausia rasti balansą tarp kokybės ir svorio. Jei vaizdas būtinas konversijai, jo nereikia sugadinti per stipriu suspaudimu, bet jis neturi be reikalo stabdyti puslapio.",
        ],
        bullets: [
          "Naudokite tinkamus matmenis realiam atvaizdavimo plotui.",
          "Venkite 3000 px pločio vaizdo ten, kur rodomas 600 px konteineryje.",
          "Svarbiausiems virš matomo ekrano vaizdams naudokite prioritetinį įkėlimą atsakingai.",
        ],
      },
      {
        id: "paveiksleliai-konversijai",
        title: "Vaizdai, kurie ne tik optimizuoti, bet ir parduoda",
        paragraphs: [
          "Geriausi vizualai dažnai nėra abstrakčios stock nuotraukos. Daug geriau veikia tikros ekrano nuotraukos, schemos, proceso iliustracijos, prieš ir po pavyzdžiai bei realūs rezultatų fragmentai.",
          "Tokie vaizdai didina ne tik semantinį aiškumą, bet ir pasitikėjimą. Jei žmogus pamato tikrą įrankio ataskaitą, realų proceso kadrą ar aiškią diagramą, puslapio įtikinamumas išauga ženkliai labiau nei nuo dekoratyvinio fono.",
        ],
      },
      {
        id: "image-search",
        title: "Kaip galvoti apie Google vaizdų paiešką",
        paragraphs: [
          "Kai kurie projektai iš vaizdų paieškos gauna mažai naudos, bet edukaciniai, receptų, e. prekybos, dizaino ar paslaugų vizualizavimo puslapiai ten turi realų potencialą. Tokiu atveju verta optimizuoti vaizdus ne tik puslapiui, bet ir paieškai pačioje Images aplinkoje.",
          "Tam padeda aiškūs failų pavadinimai, stiprus kontekstas puslapyje, struktūruoti duomenys ten, kur jie logiški, ir tikrai naudingi vaizdai, kuriuos verta rodyti atskirai.",
        ],
      },
    ],
    checklist: [
      "Paveikslėliai turi prasmingus alt tekstus.",
      "Naudojami modernūs formatai ir tinkami matmenys.",
      "Vaizdai aiškiai susiję su puslapio tema, ne vien dekoratyvūs.",
      "Svarbūs vizualai palaiko konversiją, ne tik estetiką.",
    ],
    mistakes: [
      "Alt tekstai paversti raktažodžių sąrašu.",
      "Įkeliami dideli failai be suspaudimo.",
      "Vaizdas nepaaiškina temos ir yra tik foninė dekoracija.",
      "Failų pavadinimai paliekami kaip IMG_4922.jpg.",
    ],
    faq: [
      {
        question: "Ar visiems paveikslėliams būtinas alt tekstas?",
        answer:
          "Ne. Jei vaizdas grynai dekoratyvinis ir nesuteikia prasmės, alt gali būti tuščias. Jei vaizdas aiškina turinį, alt tekstas būtinas.",
      },
      {
        question: "Ar failo pavadinimas tikrai svarbus SEO?",
        answer:
          "Vienas pats jis stebuklo nepadarys, bet kartu su alt tekstu, kontekstu ir puslapio tema jis sustiprina bendrą aiškumą. Todėl tvarkingi failų pavadinimai yra verta higiena.",
      },
    ],
    relatedSlugs: ["kokybiskas-turinys", "mobilioji-versija", "webmaster-irankiai"],
  },
  {
    slug: "heading-tags",
    sectionId: "turinio-optimizavimas",
    title: "Tinkamai panaudokite heading tags",
    shortTitle: "Heading tags",
    description:
      "Pamoka apie H1, H2, H3 ir puslapio informacinę hierarchiją: kaip kurti antraštes, kurios padeda SEO, skaitomumui ir AI interpretacijai.",
    metaTitle: "H1 H2 H3 antraštės: heading tags SEO praktika | LamaLocal",
    metaDescription:
      "Išmokite naudoti H1, H2 ir H3 antraštes SEO puslapiuose: struktūra, temos gylis, skaitomumas, keyword integracija ir dažnos klaidos.",
    keywords: [
      "heading tags seo",
      "h1 h2 h3",
      "antrastes seo",
      "heading struktura",
      "puslapio hierarchija",
    ],
    heroEyebrow: "Turinio optimizavimas",
    illustration: "headings",
    updatedFor: "Atnaujinta pagal semantinės struktūros ir AI interpretacijos logiką",
    intro: [
      "Heading tags padeda suskaidyti turinį į logiškas dalis. Tai svarbu ne tik skaitytojui, bet ir sistemoms, kurios bando suprasti, apie ką yra puslapis, kokie klausimai jame atsakomi ir kaip tie atsakymai susiję tarpusavyje.",
      "Praktikoje blogos antraštės dažnai reiškia blogą mąstymą apie turinį. Jei puslapio struktūra neaiški autoriui, ji dažniausiai nebus aiški nei vartotojui, nei Google.",
    ],
    sections: [
      {
        id: "h1-logika",
        title: "Vienas H1, aiški tema ir jokio triukšmo",
        paragraphs: [
          "Daugeliu atvejų puslapiui pakanka vieno aiškaus H1. Jis turi pavadinti pagrindinę puslapio temą taip, kad žmogus per sekundę suprastų, kur atsidūrė. Jei H1 per bendras arba neatitinka title, prasideda semantinė painiava.",
          "H1 neturi būti identiškas title, bet jie turi dirbti ta pačia kryptimi. Vienas padeda SERP rezultatui, kitas padeda pačiam puslapio suvokimui.",
        ],
      },
      {
        id: "h2-h3-struktura",
        title: "H2 ir H3 kaip turinio architektūros skeletas",
        paragraphs: [
          "H2 turėtų skirstyti pagrindines temos dalis, o H3 gilinti konkrečius aspektus tų dalių viduje. Kai ši struktūra nuosekli, turinys tampa lengviau skaitomas ir aiškiau nuskanuojamas.",
          "Geras testas labai paprastas: jei žmogus perskaitytų tik visas antraštes, ar jis suprastų pagrindinę pamokos eigą? Jei taip, tikėtina, kad heading architektūra veikia gerai.",
        ],
        bullets: [
          "H2 turi atitikti pagrindines temos ašis.",
          "H3 turi konkretinti, o ne dubliuoti H2.",
          "Antraštės neturi būti vien raktažodžių manipuliacija.",
        ],
      },
      {
        id: "headings-keywords",
        title: "Kaip naudoti raktažodžius antraštėse be dirbtinumo",
        paragraphs: [
          "Antraštės yra gera vieta raktažodžiams, nes jos natūraliai nurodo temos kryptį. Tačiau jeigu kiekviena antraštė rašoma vien tam, kad į ją būtų sugrūsta frazė, turinys greitai tampa nenatūralus ir prastai skaitomas.",
          "Kur kas geriau naudoti pagrindinius ir semantiškai artimus raktažodžius skirtinguose lygiuose. Taip išlaikoma ir paieškos aprėptis, ir teksto kokybė.",
        ],
      },
      {
        id: "headings-ai-readability",
        title: "Kodėl aiški heading struktūra svarbi generatyvinei paieškai",
        paragraphs: [
          "Kai sistemos bando ištraukti santraukas ar atsakymus iš puslapio, tvarkingos antraštės padeda identifikuoti, kur prasideda konkretus klausimas ir kur yra jo atsakymas. Todėl geras H2-H3 karkasas šiandien padeda ne tik klasikiniam SEO, bet ir turinio interpretacijai platesniame Search ekosistemos kontekste.",
          "Būtent todėl aiškus puslapio skeletas yra vienas iš tų darbų, kurie atrodo elementarūs, bet ilgainiui duoda labai daug grąžos didesniame projekte.",
        ],
      },
    ],
    checklist: [
      "Puslapis turi vieną aiškų H1.",
      "H2/H3 logiškai suskirsto temą į pagrindines ir antrines dalis.",
      "Antraštės išlieka skaitomos ir žmogui, ir paieškos sistemai.",
      "H1, title ir intro tarpusavyje sustiprina tą pačią temą.",
    ],
    mistakes: [
      "Kelios H1 antraštės be aiškios priežasties.",
      "Antraštės naudojamos tik dizainui, o ne semantikai.",
      "H2 dubliuoja vieną kitą ir nieko naujo nesuteikia.",
      "Raktažodžiai antraštėse sugrūsti nenatūraliai.",
    ],
    faq: [
      {
        question: "Ar keli H1 vis dar blogai?",
        answer:
          "Technologiškai HTML5 kontekste tai nėra automatinė klaida, bet praktikoje aiškiausia ir saugiausia laikytis vieno pagrindinio H1 kiekvienam esminiam puslapiui.",
      },
      {
        question: "Ar antraštės turi būti identiškos raktažodžiams?",
        answer:
          "Ne. Jos turi natūraliai atspindėti temą. Geriausias variantas yra prasminga antraštė, kuri kartu turi ir semantinę sąsają su tikslinėmis užklausomis.",
      },
    ],
    relatedSlugs: ["meta-pavadinimai", "kokybiskas-turinys", "anchor-tekstai"],
  },
  {
    slug: "robots-txt",
    sectionId: "google-robotai",
    title: "Veiksmingai panaudokite robots.txt",
    shortTitle: "robots.txt",
    description:
      "Pamoka apie robots.txt galimybes ir ribas: crawl valdymas, indeksavimo mitai, dažnos klaidos ir saugi praktika didesniame SEO projekte.",
    metaTitle: "robots.txt SEO: kaip valdyti crawl teisingai | LamaLocal",
    metaDescription:
      "Sužinokite, kaip teisingai naudoti robots.txt: ką blokuoti, ko neblokuoti, kuo skiriasi crawl ir index, ir kaip išvengti kritinių klaidų.",
    keywords: [
      "robots txt",
      "robots txt seo",
      "crawl valdymas",
      "indexing vs crawling",
      "google robotai",
    ],
    heroEyebrow: "Google robotukai",
    illustration: "robots",
    updatedFor: "Atnaujinta pagal Google crawling ir indexing dokumentaciją",
    intro: [
      "robots.txt yra galingas, bet dažnai neteisingai suprantamas įrankis. Jis padeda reguliuoti, ką robotai gali nuskaityti, tačiau savaime nevaldo visko, kas vyksta indeksavime ar parodyme paieškoje.",
      "Todėl robots.txt reikia naudoti strategiškai. Jis tinka crawl kontrolei, bet netinka kaip universalus būdas paslėpti puslapius nuo paieškos rezultatų, jei tie puslapiai jau turi kitų signalų internete.",
    ],
    sections: [
      {
        id: "crawl-vs-index",
        title: "Crawl ir index nėra tas pats",
        paragraphs: [
          "Viena didžiausių SEO klaidų yra manyti, kad užblokavus puslapį robots.txt faile jis automatiškai išnyks iš Google. Iš tiesų robots.txt riboja nuskaitymą, bet ne visada užkerta kelią indeksavimo galimybei, jei apie tą URL yra kitų signalų.",
          "Jei tikslas yra neleisti puslapiui patekti į paieškos rezultatus, dažniausiai reikia galvoti apie noindex, canonical, peradresavimą arba architektūrinį sprendimą, o ne vien apie robots.txt.",
        ],
      },
      {
        id: "ka-blokuoti",
        title: "Ką verta blokuoti, o ko geriau neliesti",
        paragraphs: [
          "Dažniausiai verta riboti techninius, dubliuotus, filtrinius ar sisteminius URL, kurie nesuteikia vertės paieškai. Tokie puslapiai gali švaistyti crawl biudžetą ir blaškyti robotą nuo svarbesnio turinio.",
          "Tačiau kritinė klaida yra blokuoti CSS, JavaScript ar kitus resursus, kurių Google reikia puslapio vaizdavimui. Jei paieškos sistema nemato puslapio taip, kaip jį mato vartotojas, gali nukentėti interpretacija ir reitingas.",
        ],
      },
      {
        id: "enterprise-praktika",
        title: "robots.txt disciplina didesniuose projektuose",
        paragraphs: [
          "Dideliuose projektuose robots.txt negali būti paliekamas „kažkada sukonfigūruotas“. Kiekvienas naujas filtravimo mechanizmas, nauja kalbinė versija ar e. komercijos funkcija gali pakeisti crawl logiką.",
          "Todėl verta turėti auditavimo rutiną: periodiškai tikrinti, kokie URL blokuojami, kokie generuojami naujai ir ar tai atitinka realias SEO užduotis. Tai ypač svarbu, kai svetainę vienu metu vysto marketingas ir programuotojai.",
        ],
      },
      {
        id: "sitemap-ir-robots",
        title: "Kaip robots.txt dera su sitemap ir kitais signalais",
        paragraphs: [
          "robots.txt ir sitemap turi dirbti išvien, o ne vienas kitam prieštarauti. Jei sitemap'e skelbiate URL kaip svarbų indeksavimui, bet tuo pačiu jį blokuojate robots.txt faile, siunčiate painų signalą.",
          "Tvarkinga SEO architektūra reiškia, kad svarbūs URL yra pasiekiami, indeksuojami, susieti vidinėmis nuorodomis ir aiškiai įtraukti į sitemap. robots.txt šiuo atveju turi veikti kaip švara, ne kaip kompensacija už netvarkingą struktūrą.",
        ],
      },
    ],
    checklist: [
      "Komanda supranta skirtumą tarp crawl ir index.",
      "Nėra užblokuoti svarbūs CSS ar JS failai.",
      "Filtriniai ir menkaverčiai URL valdomi nuosekliai.",
      "robots.txt neprieštarauja sitemap ir indeksavimo logikai.",
    ],
    mistakes: [
      "robots.txt naudojamas vietoje noindex.",
      "Užblokuojami resursai, reikalingi puslapio atvaizdavimui.",
      "Po URL migracijos robots.txt neperžiūrimas.",
      "Blokuojama pernelyg plačiai, neįvertinus pasekmių.",
    ],
    faq: [
      {
        question: "Ar robots.txt gali išimti puslapį iš Google rezultatų?",
        answer:
          "Ne patikimai. Jei reikia išėmimo iš rezultatų, naudokite noindex, pašalinimą, peradresavimą ar kitą tinkamą sprendimą pagal situaciją.",
      },
      {
        question: "Ar verta nurodyti sitemap robots.txt faile?",
        answer:
          "Taip, tai gera praktika. Tai papildomas signalas robotams, kur rasti jūsų svarbių URL sąrašą.",
      },
    ],
    relatedSlugs: ["nofollow-nuorodos", "url-adresu-struktura", "webmaster-irankiai"],
  },
  {
    slug: "nofollow-nuorodos",
    sectionId: "google-robotai",
    title: "Būkite atidūs rel=\"nofollow\" nuorodoms",
    shortTitle: "Nofollow nuorodos",
    description:
      "Pamoka apie nofollow, sponsored ir ugc atributus, išorinių nuorodų kokybę ir kaip nepadaryti žalos vidinei nuorodų architektūrai.",
    metaTitle: "rel nofollow, sponsored, ugc: nuorodų atributų SEO gidas | LamaLocal",
    metaDescription:
      "Išmokite kada naudoti nofollow, sponsored ir ugc atributus, kaip vertinti nuorodų kokybę ir kokių klaidų vengti SEO projektuose.",
    keywords: [
      "nofollow nuorodos",
      "rel sponsored",
      "rel ugc",
      "outbound links seo",
      "nuorodu atributai",
    ],
    heroEyebrow: "Google robotukai",
    illustration: "nofollow",
    updatedFor: "Atnaujinta pagal Google outbound link qualification praktiką",
    intro: [
      "rel atributai padeda paaiškinti nuorodos pobūdį. Tai nėra tik techninis papildymas programuotojui. Nuo jų priklauso, kaip skaidriai komunikuojate reklaminį, vartotojų sukurtą ar nepatvirtintą turinį.",
      "Šiuolaikinėje praktikoje nofollow yra tik viena dalis. Taip pat svarbu suprasti sponsored ir ugc reikšmę, nes jie geriau atspindi tikrąjį nuorodos kontekstą.",
    ],
    sections: [
      {
        id: "nofollow-paskirtis",
        title: "Kada naudoti nofollow, o kada kitus rel atributus",
        paragraphs: [
          "nofollow naudinga tada, kai nenorite aiškiai paremti nuorodos arba kai jos pobūdis nėra pakankamai patikimas. sponsored skirtas reklaminėms ar partnerinėms nuorodoms, o ugc labiau tinka vartotojų kuriamam turiniui, pavyzdžiui, komentarams ar forumams.",
          "Kuo tiksliau įvardijate nuorodos tipą, tuo aiškesnį signalą siunčiate sistemai. Tai svarbu ne tik SEO prasme, bet ir bendrai skaidrumo kultūrai svetainėje.",
        ],
      },
      {
        id: "isores-nuorodos",
        title: "Išorinės nuorodos, pasitikėjimas ir reputacija",
        paragraphs: [
          "Nuorodos į kitus šaltinius pačios savaime nėra blogai. Priešingai, jos dažnai stiprina turinio patikimumą. Problema kyla tada, kai nuorodos reklaminės, manipuliatyvios arba nukreipia į abejotinos kokybės puslapius.",
          "Todėl svarbu turėti paprastą taisyklę: jei nuoroda yra natūrali rekomendacija ar šaltinis, ją galima palikti normaliai. Jei joje yra komercinis interesas ar nepatikimumo rizika, naudokite atitinkamą rel atributą.",
        ],
      },
      {
        id: "vidines-nuorodos-nofollow",
        title: "Kodėl nereikia aklai naudoti nofollow vidinėms nuorodoms",
        paragraphs: [
          "Anksčiau kai kurie projektai bandė „taupyti autoritetą“ nofollow atributais vidinėse nuorodose. Šiandien tai laikoma silpna praktika. Ji dažniau sukuria painiavą nei naudą ir gali trukdyti normaliai vidinei architektūrai.",
          "Vidinės nuorodos turėtų stiprinti svarbiausius puslapius per logišką struktūrą, o ne per dirbtinius blokavimus. Jei svetainėje per daug menkaverčių puslapių, problema dažniausiai ne vidiniuose nofollow, o pačioje architektūroje.",
        ],
      },
      {
        id: "nuorodu-higiena",
        title: "Nuorodų higiena partnerystėse ir turinio sklaidoje",
        paragraphs: [
          "Jei jūsų projektas aktyviai dirba su partneriais, afiliacinėmis nuorodomis ar guest post tipo sklaida, verta turėti aiškią politiką, kaip ir kur naudojami rel atributai. Taip apsisaugoma nuo chaoso ir dviprasmybių ilgainiui.",
          "Tokia nuorodų higiena ypač svarbi augant projektui, kai su turiniu dirba daugiau nei vienas žmogus. Vieninga taisyklė yra daug vertingesnė nei spontaniški atskirų autorių sprendimai.",
        ],
      },
    ],
    checklist: [
      "Reklaminėms nuorodoms naudojamas sponsored.",
      "UGC turiniui naudojamas ugc, kai tai prasminga.",
      "Vidinės nuorodos neapkraunamos bereikalingais nofollow.",
      "Komanda turi aiškią išorinių nuorodų politiką.",
    ],
    mistakes: [
      "Visoms išorinėms nuorodoms dedamas vien tik nofollow be logikos.",
      "Reklaminės nuorodos paliekamos be sponsored žymos.",
      "Vidinės nuorodos masiškai nofollow'inamos dėl tariamo autoriteto taupymo.",
      "Nesvarstoma, ar nuoroda išvis reikalinga vartotojui.",
    ],
    faq: [
      {
        question: "Ar nofollow nuorodos visai neturi vertės?",
        answer:
          "Jos vis tiek gali būti naudingos srautui, matomumui ir brand signalams. Jos tiesiog kitaip kvalifikuoja nuorodos pobūdį paieškos sistemoms.",
      },
      {
        question: "Ar affiliate nuorodoms pakanka nofollow?",
        answer:
          "Google rekomenduoja naudoti sponsored. Jei reikia, jis gali būti derinamas ir su nofollow, bet svarbiausia aiškiai pažymėti komercinį pobūdį.",
      },
    ],
    relatedSlugs: ["robots-txt", "svetaines-reklama", "webmaster-irankiai"],
  },
  {
    slug: "mobilioji-versija",
    sectionId: "seo-mobiliesiems",
    title: "Informuokite Google apie mobiliąją svetainės versiją",
    shortTitle: "Mobilioji versija",
    description:
      "Pamoka apie mobile-first indexing, responsive architektūrą, techninius skirtumus tarp desktop ir mobile ir kaip nepalikti mobilios versijos skurdesnės.",
    metaTitle: "Mobile-first indexing: mobilios svetainės SEO gidas | LamaLocal",
    metaDescription:
      "Sužinokite, kaip paruošti mobiliąją svetainės versiją SEO: responsive dizainas, mobile-first indexing, greitis ir svarbiausi techniniai patikrinimai.",
    keywords: [
      "mobile first indexing",
      "mobilioji svetaines versija",
      "mobile seo",
      "responsive seo",
      "seo telefonams",
    ],
    heroEyebrow: "SEO mobiliesiems",
    illustration: "mobile-index",
    updatedFor: "Atnaujinta pagal Google mobile-first indexing rekomendacijas",
    intro: [
      "Google pirmiausia vertina mobilią puslapio versiją, todėl būtent ji turi parodyti pilną puslapio vertę. Jei mobilioji versija skurdesnė, lėtesnė ar slepia svarbų turinį, tai tiesiogiai silpnina SEO rezultatą.",
      "Dėl šios priežasties mobilus dizainas neturi būti laikomas tik UI klausimu. Tai yra techninis ir strateginis SEO sluoksnis, kurio kokybė veikia indeksavimą, interpretaciją ir konversiją.",
    ],
    sections: [
      {
        id: "mobile-first-principas",
        title: "Ką realiai reiškia mobile-first indexing",
        paragraphs: [
          "Mobile-first indexing reiškia, kad Google kaip pagrindinį matymo tašką naudoja mobilų puslapio variantą. Jei mobilioje versijoje nėra dalies teksto, vidinių nuorodų, struktūruotų duomenų ar svarbių vizualų, paieškos sistema gali neturėti pilno paveikslo.",
          "Todėl responsive dizainas šiandien dažniausiai yra saugiausias kelias. Vienas URL ir tas pats turinys skirtingiems ekranams padeda išvengti daugelio dubliavimo ir priežiūros problemų.",
        ],
      },
      {
        id: "techninis-vientisumas",
        title: "Mobilus puslapis negali būti „lite“ versija",
        paragraphs: [
          "Kai kurios svetainės vis dar daro klaidą slėpdamos mobilioje versijoje svarbius tekstinius blokus, FAQ, vidines nuorodas ar įrodymų sekcijas. Vizualiai tai atrodo švariau, bet SEO prasme tai gali nuskausminti puslapį.",
          "Svarbiausia užtikrinti, kad tas pats semantinis branduolys būtų prieinamas ir mobiliajame variante. Jei kažkas slepiama dizaino sumetimais, verta įsitikinti, kad turinys vis tiek lieka pasiekiamas DOM struktūroje ir žmogui, ir robotui.",
        ],
      },
      {
        id: "greitis-core-web-vitals",
        title: "Mobilus greitis ir Core Web Vitals",
        paragraphs: [
          "Mobiliajame internete greitis turi dar didesnę reikšmę, nes ryšio sąlygos ir įrenginiai būna silpnesni. Lėtas hero vaizdas, sunkūs skriptai ar neoptimizuoti šriftai greitai sugadina LCP, INP ar CLS rodiklius.",
          "SEO požiūriu svarbu ne tik „praeiti testą“, bet ir sukurti realiai greitą patirtį. Prioritetizuokite virš matomo ekrano turinį, mažinkite nereikalingą JS ir kontroliuokite vizualų svorį.",
        ],
      },
      {
        id: "mobile-seo-auditas",
        title: "Kaip atlikti mobilios versijos auditą",
        paragraphs: [
          "Pradėkite nuo paprasto klausimo: ar mobilioje versijoje žmogus gauna tą pačią vertę kaip desktop? Po to tikrinkite techniką: Search Console ataskaitas, Lighthouse, realaus įrenginio patirtį, DOM struktūrą ir pagrindinių puslapių įkėlimo seką.",
          "Mobilios versijos auditą verta daryti reguliariai, nes net mažos dizaino iteracijos gali netyčia pašalinti svarbius elementus iš pirmo ekrano ar bendros struktūros.",
        ],
      },
    ],
    checklist: [
      "Mobilioje versijoje matomas visas svarbus turinys.",
      "Responsive architektūra išlaiko vieną aiškų URL ir semantiką.",
      "Stebimi mobilūs Core Web Vitals rodikliai.",
      "Pagrindiniai komerciniai ir edukaciniai puslapiai testuojami realiu telefonu.",
    ],
    mistakes: [
      "Mobili versija paliekama skurdesnė nei desktop.",
      "Sunkūs vaizdai ir video užkemša pirmą ekraną.",
      "Svarbūs CTA ar vidinės nuorodos paslepiamos dėl dizaino.",
      "Mobili patirtis tikrinama tik emuliatoriuje, bet ne realiame įrenginyje.",
    ],
    faq: [
      {
        question: "Ar atskiras m. domenas vis dar geras sprendimas?",
        answer:
          "Daugeliu atvejų ne. Responsive architektūra paprastesnė, stabilesnė ir saugesnė SEO požiūriu, jei tik įgyvendinama kokybiškai.",
      },
      {
        question: "Ar paslėptas akordeono turinys mobilioje versijoje kenkia?",
        answer:
          "Ne savaime. Jei turinys yra prieinamas vartotojui ir yra puslapio DOM struktūroje, jis gali būti vertinamas. Svarbu, kad jis nebūtų dingęs iš esmės.",
      },
    ],
    relatedSlugs: ["mobilus-narsymas", "paveiksleliu-seo", "webmaster-irankiai"],
  },
  {
    slug: "mobilus-narsymas",
    sectionId: "seo-mobiliesiems",
    title: "Padėkite mobiliųjų vartotojams orientuotis jūsų svetainėje",
    shortTitle: "Mobilus naršymas",
    description:
      "Pamoka apie mobilų UX: meniu, CTA, skaitymo ritmą, formų trumpinimą ir aiškų informacijos pateikimą mažame ekrane.",
    metaTitle: "Mobilus UX ir naršymas SEO puslapiams | LamaLocal",
    metaDescription:
      "Išmokite gerinti mobilų UX: meniu, CTA, skaitymo struktūra, formos, mygtukai ir orientacija svetainėje, kuri padeda SEO ir konversijai.",
    keywords: [
      "mobilus ux",
      "mobile navigation seo",
      "mobilus narsymas",
      "svetaines ux telefonuose",
      "mobile conversion seo",
    ],
    heroEyebrow: "SEO mobiliesiems",
    illustration: "mobile-ux",
    updatedFor: "Atnaujinta pagal mobile UX ir conversion-driven navigation praktiką",
    intro: [
      "Mobilus vartotojas yra mažiau kantrus, dažnai juda greičiau ir priima sprendimą per trumpesnį laiką. Tai reiškia, kad jūsų puslapis turi ne tik įsikrauti gerai, bet ir labai aiškiai komunikuoti, kur spausti, ką skaityti ir ką daryti toliau.",
      "SEO čia susijungia su UX. Jei žmogus pasimeta mobilioje versijoje, nukenčia ne tik konversija, bet ir bendra turinio kokybė, įsitraukimas bei puslapio vertė paieškos ekosistemoje.",
    ],
    sections: [
      {
        id: "pirmas-ekranas",
        title: "Pirmas ekranas turi aiškiai pasakyti, kur vartotojas atsidūrė",
        paragraphs: [
          "Mobiliajame ekrane vietos mažai, todėl pirmasis ekranas turi atlikti labai daug darbo: parodyti temą, vertę ir kitą žingsnį. Jei jis perpildytas, žmogus dažnai išeina net nepradėjęs skaityti.",
          "Aiškus H1, trumpa įžanga, esminis vizualas ir vienas ryškus CTA dažnai veikia geriau nei keli vienu metu konkuruojantys blokai.",
        ],
      },
      {
        id: "mygtukai-ir-formos",
        title: "Mygtukai, formos ir veiksmo kelias turi būti trumpi",
        paragraphs: [
          "Mobilioje versijoje kiekvienas papildomas žingsnis kainuoja daugiau. Ilgos formos, smulkūs mygtukai, prasti input'ai ar nepatogus meniu greitai mažina konversijas ir didina frustraciją.",
          "Geriausiai veikia trumpi veiksmo keliai: aiškus mygtukas, mažiau laukų, automatiniai pasirinkimai ten, kur jie logiški, ir gerai matomas grįžtamasis ryšys po veiksmo.",
        ],
      },
      {
        id: "skaitymo-ritmas",
        title: "Teksto struktūra mobiliame ekrane turi būti lengviau skanuojama",
        paragraphs: [
          "Ilgos pastraipos, tankūs blokai ir silpni vizualiniai skirtumai mobiliajame ekrane skaitomi sunkiau nei desktop. Todėl svarbu naudoti aiškias antraštes, trumpesnes pastraipas, sąrašus ir prasmingas tarpines sekcijas.",
          "Tai padeda ne tik žmogui. Gerai suskirstytas tekstas dažnai turi stipresnį semantinį karkasą ir yra lengviau interpretuojamas paieškos sistemoms.",
        ],
      },
      {
        id: "mobile-conversion",
        title: "Orientacija ir pasitikėjimas mobiliame pirkimo kelyje",
        paragraphs: [
          "Kai vartotojas ateina iš paieškos, jis pirmiausia vertina, ar puslapis atrodo patikimai. Kontaktai, kainos logika, aiškūs žingsniai, realūs įrodymai ir tvarkinga struktūra mobiliajame ekrane dar labiau svarbūs.",
          "Jei puslapis atrodo netvarkingas arba jame sunku rasti kitą žingsnį, vartotojas labai greitai grįžta į rezultatų puslapį. Todėl mobilus UX yra ne papildoma puošmena, o strateginis SEO sluoksnis.",
        ],
      },
    ],
    checklist: [
      "Pirmame ekrane aiški tema ir kitas žingsnis.",
      "Mygtukai pakankamai dideli ir lengvai paspaudžiami.",
      "Formos maksimaliai sutrumpintos.",
      "Tekstas suskaidytas taip, kad būtų lengvai skanuojamas telefone.",
    ],
    mistakes: [
      "Per daug CTA viename mažame ekrane.",
      "Neįskaitomas tekstas ir ilgos pastraipos.",
      "Meniu ar kontaktai paslėpti per giliai.",
      "Mobilus dizainas gražus, bet nepritaikytas realiai veiksmų eigai.",
    ],
    faq: [
      {
        question: "Ar sticky CTA mygtukas mobiliame puslapyje verta?",
        answer:
          "Dažnai taip, jei jis netrukdo skaitymui ir atitinka puslapio tikslą. Ypač paslaugų puslapiuose tai gali stipriai pagerinti konversiją.",
      },
      {
        question: "Ar ilgas turinys telefone yra blogai?",
        answer:
          "Ne, jei jis gerai suskaidytas. Problema yra ne ilgis, o tankis, aiškumo stoka ir prastas skaitymo ritmas.",
      },
    ],
    relatedSlugs: ["mobilioji-versija", "svetaines-narsymas", "kokybiskas-turinys"],
  },
  {
    slug: "svetaines-reklama",
    sectionId: "seo-reklama-analize",
    title: "Reklamuokite savo svetainę teisingais būdais",
    shortTitle: "Svetainės reklama",
    description:
      "Pamoka apie etišką SEO sklaidą, turinio platinimą, nuorodų uždirbimą, partnerystes ir kaip auginti matomumą be manipuliacinių triukų.",
    metaTitle: "SEO sklaida ir svetainės reklama: kas veikia šiandien | LamaLocal",
    metaDescription:
      "Išmokite reklamuoti svetainę SEO požiūriu: turinio sklaida, partnerystės, link earning, brand signalai ir saugūs augimo būdai.",
    keywords: [
      "svetaines reklama seo",
      "seo sklaida",
      "link earning",
      "turinio platinimas",
      "organinio srauto augimas",
    ],
    heroEyebrow: "SEO reklama ir analizė",
    illustration: "promotion",
    updatedFor: "Atnaujinta pagal people-first sklaidos ir autoriteto augimo praktiką",
    intro: [
      "SEO augimas neatsiranda vien iš techninės optimizacijos. Tam reikia ir protingos sklaidos, kuri padeda turiniui pasiekti auditoriją, uždirbti dėmesį ir gauti natūralius paminėjimus ar nuorodas.",
      "Didžiausia klaida yra painioti reklamą su manipuliacija. Šiuolaikiniame SEO daug geriau veikia naudą kurianti sklaida nei dirbtiniai triukai, kurie trumpam pakelia signalus, bet ilgainiui nekuria vertės domenui.",
    ],
    sections: [
      {
        id: "brand-ir-signalai",
        title: "Organinis augimas dažnai prasideda nuo brando, ne nuo vien raktažodžių",
        paragraphs: [
          "Kai apie projektą kalbama skirtinguose kanaluose, auga brand signalai, paieškos užklausos su prekės ženklu ir bendra pasitikėjimo terpė. Tai padeda ne tik konversijai, bet ir platesniam organinio matomumo stiprėjimui.",
          "Todėl turinio sklaida turi būti siejama su žinomumo auginimu, o ne tik su vienkartine nuoroda. Kuo stipresnė jūsų nišos reputacija, tuo lengviau nauji puslapiai gauna pasitikėjimo kreditą.",
        ],
      },
      {
        id: "link-earning",
        title: "Link earning vietoje dirbtinio link building",
        paragraphs: [
          "Vertingiausios nuorodos dažniausiai ateina tada, kai sukuriate ką nors, ką verta cituoti: originalų gidą, duomenų analizę, įrankį, checklist'ą ar vizualią schemą. Tokia medžiaga skleidžiasi natūraliau nei sausas „pas mus irgi yra paslaugos“ puslapis.",
          "Tai nereiškia, kad nereikia aktyvios sklaidos. Reiškia, kad sklaidos objektas turi būti vertingas. Kai turinys tikrai padeda auditorijai, outreach tampa ne prašymu padaryti paslaugą, o pasiūlymu pasidalinti naudingu resursu.",
        ],
      },
      {
        id: "partnerystes-ir-pr",
        title: "Partnerystės, PR ir bendradarbiavimai",
        paragraphs: [
          "Partnerystės gali duoti daug daugiau nei vieną nuorodą. Jos gali atverti naują auditoriją, sukurti bendrus turinio formatus, interviu, case study ar ekspertinius komentarus. Visa tai stiprina ir SEO, ir reputaciją.",
          "Svarbiausia, kad tokie bendradarbiavimai būtų tikri. Jei jie atrodo vien kaip nuorodų schema, ilgalaikės vertės nebus. Jei jie remiasi realia kompetencija ir auditorijos nauda, poveikis būna daug stabilesnis.",
        ],
      },
      {
        id: "kanalai-ir-matavimas",
        title: "Sklaida turi būti matuojama kaip sistema",
        paragraphs: [
          "Sklaidos pastangos turi būti siejamos su rezultatais: referral srautu, naujomis paminėjimų vietomis, brand užklausomis, nuorodomis, naujų puslapių indeksavimo sparta ir bendru organiniu augimu. Tik tada galima suprasti, kurie kanalai tikrai veikia.",
          "Kai matuojate sklaidą sistemiškai, galite nustoti daryti veiksmus vien iš inercijos ir koncentruotis į tai, kas duoda ilgalaikį autoriteto augimą.",
        ],
      },
    ],
    checklist: [
      "Sklaida remiasi naudingu turiniu, ne vien prašymu duoti nuorodą.",
      "Projektas augina brand signalus, ne tik raktažodžių pozicijas.",
      "Yra aiškios partnerystės ir PR temos, kurias verta komunikuoti.",
      "Sklaidos rezultatai matuojami ne tik nuorodų kiekiu.",
    ],
    mistakes: [
      "Perkamos ar dirbtinai generuojamos menkavertės nuorodos.",
      "Sklaida vykdoma be aiškaus naudingo resurso.",
      "Vertinamas tik backlink skaičius, ne jų kontekstas ir poveikis.",
      "Brand auginimas paliekamas nuošalyje, nors jis padeda SEO.",
    ],
    faq: [
      {
        question: "Ar svečių straipsniai vis dar veikia?",
        answer:
          "Veikia tada, kai jie sukuria vertę auditorijai ir nėra akivaizdi nuorodų manipuliacija. Kokybė ir kontekstas čia daug svarbiau už kiekį.",
      },
      {
        question: "Ar socialiniai tinklai tiesiogiai kelia SEO?",
        answer:
          "Ne kaip tiesioginis reitingavimo faktorius, bet jie gali stipriai padėti turinio sklaidai, brand signalams ir natūralių nuorodų atsiradimui.",
      },
    ],
    relatedSlugs: ["webmaster-irankiai", "kokybiskas-turinys", "nofollow-nuorodos"],
  },
  {
    slug: "webmaster-irankiai",
    sectionId: "seo-reklama-analize",
    title: "Pasinaudokite nemokamais žiniatinklio valdytojo įrankiais",
    shortTitle: "Webmaster įrankiai",
    description:
      "Pamoka apie Google Search Console, Bing Webmaster Tools, techninę diagnostiką, užklausų analizę ir SEO sprendimus pagal realius duomenis.",
    metaTitle: "Google Search Console ir SEO analizė: nemokami įrankiai | LamaLocal",
    metaDescription:
      "Sužinokite, kaip naudoti Google Search Console ir kitus nemokamus SEO įrankius: parodymai, CTR, indeksavimas, Core Web Vitals ir techninė diagnostika.",
    keywords: [
      "google search console",
      "webmaster tools",
      "seo analize duomenys",
      "indeksavimo klaidos",
      "core web vitals",
    ],
    heroEyebrow: "SEO reklama ir analizė",
    illustration: "ai-overview",
    updatedFor: "Atnaujinta pagal dabartines Search Console ir techninės diagnostikos galimybes",
    intro: [
      "SEO be duomenų greitai tampa nuomone. Nemokami įrankiai leidžia matyti, kaip paieškos sistema realiai supranta jūsų projektą: kokius URL indeksuoja, kokioms užklausoms jus rodo, kur krenta CTR ir kur yra techninės problemos.",
      "Svarbiausias įrankis daugeliui projektų yra Google Search Console. Tačiau vertę sukuria ne vien prisijungimas, o gebėjimas tas ataskaitas paversti prioritetais ir darbų eile.",
    ],
    sections: [
      {
        id: "gsc-pamatas",
        title: "Ką pirmiausia žiūrėti Search Console",
        paragraphs: [
          "Daugelis pradeda nuo bendro parodymų grafiko, bet tai nėra pati vertingiausia pradžia. Daug naudingiau analizuoti užklausų, puslapių ir šalių pjūvius, o tada ieškoti disproporcijų: geri parodymai, bet silpnas CTR; gera pozicija, bet mažas paspaudimų skaičius; spartus kritimas konkrečioje temoje.",
          "Tokios vietos dažniausiai rodo aiškią optimizavimo galimybę: title ir snippet testus, turinio atnaujinimą, vidines nuorodas arba techninę kliūtį.",
        ],
      },
      {
        id: "indexing-klaidos",
        title: "Indeksavimo ataskaitos ir techninių problemų diagnostika",
        paragraphs: [
          "Search Console ataskaitos apie puslapius leidžia pamatyti, kurie URL indeksuoti, kurie ne, ir kodėl. Tai būtina tiek naujų puslapių paleidimui, tiek didesnių migracijų ar struktūrinių pokyčių metu.",
          "Svarbiausia ne tik pamatyti klaidą, bet suprasti jos mastą. Viena atsitiktinė excluded būsena nėra krizė. Tačiau jeigu svarbių puslapių grupė nukrenta iš indeksavimo, tai jau strateginis signalas, kurį reikia spręsti greitai.",
        ],
      },
      {
        id: "cwv-ir-patirtis",
        title: "Core Web Vitals ir reali vartotojo patirtis",
        paragraphs: [
          "Core Web Vitals neturėtų būti žiūrimi kaip atskiras techninis KPI. Jie padeda suprasti, ar puslapis iš tiesų patogus naudoti, ypač mobiliajame įrenginyje. Lėtas įkrovimas, šokinėjantis layout'as ar vangūs mygtukai ilgainiui kenkia ne tik UX, bet ir visam organinio rezultato potencialui.",
          "Geriausia praktika yra matyti CWV ne kaip vienkartinį auditą, o kaip nuolatinę higieną kartu su vaizdų, šriftų ir skriptų kontrole.",
        ],
      },
      {
        id: "prioritetu-nustatymas",
        title: "Kaip iš duomenų pasidaryti realų darbų backlog'ą",
        paragraphs: [
          "Naudingiausia Search Console vertė atsiranda tada, kai duomenys tampa darbų seka. Pavyzdžiui: puslapiai su gera pozicija ir prastu CTR eina į snippet optimizaciją, puslapiai su parodymais be augimo į turinio gilinimą, o excluded URL grupės į techninį auditą.",
          "Tokia sistema leidžia SEO valdyti kaip produktą, ne kaip chaotišką užduočių sąrašą. Ir būtent taip dideli projektai auga stabiliau.",
        ],
      },
    ],
    checklist: [
      "Search Console analizuojama pagal puslapius ir užklausas, ne tik bendrą grafiką.",
      "Svarbios indeksavimo klaidos turi savininką ir veiksmų planą.",
      "CWV žiūrimi kaip realios patirties signalas, ne vien techninis skaičius.",
      "SEO darbai prioritetizuojami pagal duomenis, ne intuiciją vien.",
    ],
    mistakes: [
      "Stebimas tik bendras srautas, bet ne problemos šaknys.",
      "Indexing ataskaitos ignoruojamos iki krizės.",
      "Po URL, dizaino ar turinio pokyčių Search Console netikrinama.",
      "Duomenys renkami, bet neverčiami į realias užduotis.",
    ],
    faq: [
      {
        question: "Kaip dažnai tikrinti Search Console?",
        answer:
          "Svarbiausiems projektams bent kartą per savaitę, o po didesnių pokyčių dar dažniau. Reguliarumas leidžia anksti pastebėti kritimus ar techninius signalus.",
      },
      {
        question: "Ar vien Search Console pakanka visam SEO?",
        answer:
          "Ne, bet tai yra stipriausias bazinis nemokamas šaltinis. Jį verta papildyti analitika, crawler'iais ir realaus puslapio našumo stebėjimu.",
      },
    ],
    relatedSlugs: ["robots-txt", "meta-pavadinimai", "svetaines-reklama"],
  },
  {
    slug: "google-ai-overviews",
    sectionId: "advanced-seo",
    title: "Google AI Overviews ir AI Mode: ką tai keičia SEO strategijoje",
    shortTitle: "AI Overviews",
    description:
      "Pamoka apie AI Overviews, generatyvinius atsakymus, šaltinių atranką ir kaip turinys turi atrodyti, kad išliktų matomas AI paieškos aplinkoje.",
    metaTitle: "Google AI Overviews ir SEO: kaip ruoštis 2026 paieškai | LamaLocal",
    metaDescription:
      "Išsamus gidas apie Google AI Overviews ir AI Mode: kaip keičiasi paspaudimai, kokį turinį verta kurti ir kaip išlaikyti SEO matomumą AI paieškoje.",
    keywords: [
      "google ai overviews",
      "ai mode seo",
      "seo dirbtinis intelektas",
      "google generatyvine paieska",
      "ai paieskos optimizavimas",
    ],
    heroEyebrow: "Pažengusios temos",
    illustration: "tools",
    updatedFor: "Atnaujinta pagal 2025-2026 AI Overviews ir Search AI dokumentacijos kryptį",
    intro: [
      "AI Overviews nekeičia pagrindinės SEO logikos taip, kaip daug kas tikėjosi. Jie nekeičia fakto, kad Google vis tiek turi suprasti, kurie puslapiai yra tikslūs, patikimi ir verti būti šaltiniu. Tačiau jie stipriai pakeičia paspaudimų pasiskirstymą ir turinio konkurenciją SERP viršuje.",
      "Tai reiškia, kad šiandien jau neužtenka tik būti 5 ar 6 pozicijoje pagal bendrą raktažodį. Reikia kurti turinį, kuris arba pats laimi paspaudimą, arba yra pakankamai aiškus ir patikimas, kad turėtų šansą tapti šaltiniu generatyviniame atsakyme.",
    ],
    sections: [
      {
        id: "ai-overviews-logika",
        title: "Kaip AI Overviews keičia organinio matomumo žaidimą",
        paragraphs: [
          "Kai dalis informacinių užklausų gauna sugeneruotą atsakymą virš klasikinių rezultatų, dalis srauto lieka pačiame Google rezultate. Tai ypač juntama užklausose, kur atsakymas gali būti trumpai apibendrinamas be gilaus naršymo.",
          "Dėl to svarbu skirti temas, kur vartotojas nori greito atsakymo, nuo temų, kur jam reikia tikro gylio, palyginimo, patirties ar veiksmo plano. Pastarosiose srityse kokybiški šaltiniai išlieka labai vertingi ir AI aplinkoje.",
        ],
      },
      {
        id: "saltinio-signalai",
        title: "Kokie puslapio signalai didina šansą tapti naudingu AI šaltiniu",
        paragraphs: [
          "AI ekosistemoje dar svarbiau tampa aiški tema, gerai sutvarkytos antraštės, konkretūs atsakymai, ekspertiniai signalai ir loginė puslapio struktūra. Kai turinys dviprasmiškas, išbarstytas ar bendrinis, jam sunkiau tapti tvirtu šaltiniu.",
          "Praktikoje stipriai veikia aiškus klausimo-atsakymo modelis, santraukos, konkretūs kriterijai, struktūruoti sąrašai, pavyzdžiai ir aiškiai įvardytas autoriaus ar organizacijos kontekstas. Tai padeda sistemoms suprasti, ką tiksliai puslapis paaiškina.",
        ],
        bullets: [
          "Aiškus H1 ir teminiai H2/H3 blokai.",
          "Trumpi, konkretūs atsakymai prieš gilesnę analizę.",
          "Patirties, proceso ir šaltinių signalai.",
        ],
      },
      {
        id: "ka-keisti-strategijoje",
        title: "Ką verta keisti turinio strategijoje jau dabar",
        paragraphs: [
          "Pirmiausia verta peržiūrėti, kurie jūsų raktažodžiai turi aukštą informacinę intenciją ir yra jautrūs AI santraukoms. Tokiems puslapiams reikia dar aiškesnio atsakymo karkaso, stipresnių brand signalų ir gilesnio pridėtinės vertės sluoksnio.",
          "Antra, verta kurti daugiau teminių klasterių, o ne pavienių tekstų. Kai aplink vieną temą turite kelis susijusius kokybiškus puslapius, auga šansas, kad visas domenas bus suvokiamas kaip patikimesnis šaltinis.",
        ],
      },
    ],
    checklist: [
      "Aukštos informacinės intencijos puslapiai turi aiškią atsakymo struktūrą.",
      "Turinys rodo ekspertiką, patirtį ir teminį aiškumą.",
      "Kuriami teminiai klasteriai, ne vien pavieniai straipsniai.",
      "Search Console stebimi pokyčiai puslapiuose, jautriuose AI rezultatams.",
    ],
    mistakes: [
      "Panika ir bandymas visiškai perrašyti SEO vien dėl AI hype.",
      "Turinio pavertimas per daug bendru santraukiniu tekstu.",
      "Ignoruojami brand ir pasitikėjimo signalai.",
      "Nekiriamos informacinės ir komercinės užklausos.",
    ],
    faq: [
      {
        question: "Ar AI Overviews sunaikins organinį srautą visiems projektams?",
        answer:
          "Ne. Poveikis labai priklauso nuo užklausos tipo. Trumpi informaciniai klausimai jautresni, tačiau gilios, komercinės ir palyginimo tipo temos išlieka stipriai priklausomos nuo kokybiškų šaltinių.",
      },
      {
        question: "Ar reikia visiškai naujo turinio formato AI paieškai?",
        answer:
          "Ne visiškai naujo, bet tikrai reikia aiškesnės struktūros, daugiau tikrumo ir konkretesnių atsakymų. Iš esmės laimi dar geriau sutvarkytas kokybiškas SEO turinys.",
      },
    ],
    relatedSlugs: ["kokybiskas-turinys", "heading-tags", "webmaster-irankiai"],
  },
  {
    slug: "position-zero",
    sectionId: "advanced-seo",
    title: "Position Zero ir featured snippets: kaip kurti turinį atsakymų blokams",
    shortTitle: "Position Zero",
    description:
      "Pamoka apie featured snippets, people also ask, klausimų struktūrą ir kaip paruošti puslapius, kurie gali laimėti nulinės pozicijos formatą.",
    metaTitle: "Position Zero SEO: featured snippets ir atsakymų blokai | LamaLocal",
    metaDescription:
      "Išmokite optimizuoti turinį Position Zero ir featured snippets rezultatams: klausimų logika, struktūra, H2/H3, lentelės, sąrašai ir aiškūs atsakymai.",
    keywords: [
      "position zero",
      "featured snippet",
      "nuline pozicija google",
      "people also ask seo",
      "atsakymu blokai google",
    ],
    heroEyebrow: "Pažengusios temos",
    illustration: "snippet",
    updatedFor: "Atnaujinta pagal šiuolaikinę snippet ir answer-box praktiką",
    intro: [
      "Position Zero yra ne atskira magiška pozicija, o atsakymo formatas, kurį Google parenka tada, kai puslapis aiškiai ir tiksliai atsako į konkretų klausimą. Dažniausiai tai yra definicijos, procesai, sąrašai, palyginimai ar trumpi paaiškinimai.",
      "Tokiam formatui neužtenka vien geros pozicijos. Puslapis turi būti struktūruotas taip, kad būtų lengva ištraukti trumpą atsakymą, o kartu ir pakankamai vertingas, kad Google juo pasitikėtų.",
    ],
    sections: [
      {
        id: "kokie-formatai-laimi",
        title: "Kokie turinio formatai dažniausiai laimi atsakymų blokus",
        paragraphs: [
          "Dažniausiai snippets laimi aiškios definicijos, žingsnių sąrašai, lentelės, palyginimai ir glausti atsakymai po tikslios antraštės. Jei klausimas užduotas aiškiai, atsakymas dažniausiai turi tilpti į trumpą, išgrynintą bloką prieš gilesnį paaiškinimą.",
          "Todėl verta galvoti ne tik apie bendrą straipsnį, bet ir apie mikro atsakymus jo viduje. Kiekvienas H2 gali būti mažas kandidatas į konkretų snippet formatą.",
        ],
      },
      {
        id: "strukturos-principai",
        title: "Kaip suformuoti turinį, kad jį būtų lengva ištraukti",
        paragraphs: [
          "Praktikoje gerai veikia aiški klausimo antraštė, po kurios eina trumpas 40-60 žodžių atsakymas, o toliau gilesnis paaiškinimas. Toks modelis padeda vienu metu ir skaitytojui, ir paieškos sistemai.",
          "Papildomai stipriai veikia numeruoti žingsniai, aiškios lentelės, sąrašai ir konkretūs kriterijai. Kai turinys vientisas, bet nesuformuotas į ištraukiamą struktūrą, jo potencialas featured snippet formatui mažėja.",
        ],
      },
      {
        id: "snippet-rizikos",
        title: "Kada Position Zero neatneša tiek vertės, kiek tikimasi",
        paragraphs: [
          "Kai kuriose užklausose snippet gali atsakyti į klausimą taip gerai, kad vartotojas nebespaudžia. Dėl to verta vertinti ne vien šansą laimėti bloką, bet ir tai, ar tas blokas dar palieka vietos jūsų puslapio vertei.",
          "Geriausiai snippet strategija veikia ten, kur trumpas atsakymas sužadina interesą, o ne užbaigia paiešką. Pavyzdžiui, procesų, auditų, palyginimų ar strateginių temų srityje.",
        ],
      },
    ],
    checklist: [
      "Klausimai ir antraštės suformuluoti aiškiai.",
      "Po svarbių H2 pateikiami trumpi tikslūs atsakymai.",
      "Naudojami sąrašai, lentelės ir žingsnių blokai ten, kur jie logiški.",
      "Vertinama ne tik snippet galimybė, bet ir tikėtina paspaudimo vertė.",
    ],
    mistakes: [
      "Bandymas kiekvieną pastraipą paversti snippet kandidatu.",
      "Neaiškios antraštės, iš kurių nesuprantama klausimo forma.",
      "Per ilgi atsakymai be aiškaus branduolio.",
      "Snippet strategija taikoma temoms, kuriose vartotojas gali apsieiti be paspaudimo.",
    ],
    faq: [
      {
        question: "Ar reikia specialaus schema markup featured snippet laimėti?",
        answer:
          "Ne. Svarbiausia aiškus turinio formatas ir puslapio kokybė. Schema gali padėti kitur, bet featured snippet dažniausiai laimimas dėl struktūros ir atitikimo klausimui.",
      },
      {
        question: "Ar verta optimizuoti kiekvieną H2 klausimo forma?",
        answer:
          "Ne visada. Tai verta daryti tik ten, kur tema natūraliai remiasi konkrečiu klausimu ir atsakymu. Prievartinė klausimo forma silpnina tekstą.",
      },
    ],
    relatedSlugs: ["heading-tags", "meta-aprasymai", "google-ai-overviews"],
  },
  {
    slug: "atgaliniu-nuorodu-kokybe",
    sectionId: "advanced-seo",
    title: "Atgalinių nuorodų kokybės kriterijai: kas iš tiesų stiprina autoritetą",
    shortTitle: "Backlink kokybė",
    description:
      "Pamoka apie backlink kokybę, kontekstą, relevanciją, brand paminėjimus ir kaip atskirti vertingą nuorodą nuo tuščio triukšmo.",
    metaTitle: "Backlink kokybė SEO: kaip vertinti atgalines nuorodas | LamaLocal",
    metaDescription:
      "Išsamus gidas apie atgalinių nuorodų kokybę: relevancija, kontekstas, autoritetas, nuorodų rizikos ir šiuolaikinis link earning požiūris.",
    keywords: [
      "atgaliniu nuorodu kokybe",
      "backlink quality",
      "link building seo",
      "autoritetines nuorodos",
      "seo nuorodu vertinimas",
    ],
    heroEyebrow: "Pažengusios temos",
    illustration: "backlinks",
    updatedFor: "Atnaujinta pagal šiuolaikinę nuorodų kokybės ir trust signalų logiką",
    intro: [
      "Atgalinės nuorodos vis dar svarbios, tačiau jų vertė šiandien matuojama daug brandžiau nei anksčiau. Vien kiekybinės metrikos nebepakanka. Reikia vertinti, ar nuoroda logiška, tematiškai susijusi ir ar ji atsirado prasmingame kontekste.",
      "Trumpai tariant, geros nuorodos šiandien yra arčiau reputacijos ir rekomendacijos, o ne techninio triuko. Todėl backlink strategija turi būti siejama su brandu, turiniu ir realia rinkos verte.",
    ],
    sections: [
      {
        id: "kokybes-zenklai",
        title: "Pagrindiniai kokybiškos nuorodos signalai",
        paragraphs: [
          "Vertingiausia nuoroda dažniausiai yra iš puslapio, kuris pats turi aiškią temą, yra aktualus jūsų nišai ir nuorodą pateikia logiškame kontekste. Relevancija čia dažnai svarbesnė už abstraktų domeno „stiprumą“.",
          "Taip pat svarbu, ar nuoroda yra redakcinė, ar dirbtinai įterpta. Kuo natūraliau ji atrodo teksto sraute ir kuo akivaizdžiau ji naudinga skaitytojui, tuo didesnė tikimybė, kad tokia nuoroda neša realią vertę.",
        ],
      },
      {
        id: "ko-nevertinti-perstipriai",
        title: "Kodėl vien metrikos nepasako tikros vertės",
        paragraphs: [
          "Daugelis įrankių pateikia savo autoriteto ar stiprumo skaičius, bet tai yra tik apytikriai modeliai. Jie gali padėti filtruoti kraštutinius atvejus, tačiau negali pakeisti konteksto vertinimo.",
          "Praktikoje daug naudingiau įvertinti, ar tame puslapyje išvis lankosi tikra auditorija, ar jis turi teminį svorį jūsų sričiai ir ar toks paminėjimas sustiprina jūsų reputaciją, o ne tik techninį grafiką.",
        ],
      },
      {
        id: "nuorodu-rizikos",
        title: "Kokios nuorodų praktikos šiandien rizikingos",
        paragraphs: [
          "Silpniausiai atrodo masinės, pigiomis schemomis paremtos nuorodos iš menkaverčių katalogų, nerišlių guest post tinklų ar dirbtinių straipsnių fermų. Tokios nuorodos dažnai atrodo techniškai egzistuojančios, bet strategiškai nekuria jokio tikro autoriteto.",
          "Vietoje to verta fokusuotis į link earning modelį: turinį, kuris vertas paminėjimo, partnerystes, ekspertinius komentarus, case study, statistiką ar įrankius, kurie natūraliai generuoja citavimą.",
        ],
      },
    ],
    checklist: [
      "Vertinamas nuorodos kontekstas, ne tik įrankio metrika.",
      "Nuorodos siejamos su tikra tema ir auditorija.",
      "Sklaida orientuota į link earning, ne masinį link building.",
      "Vengiama scheminių ar menkaverčių nuorodų šaltinių.",
    ],
    mistakes: [
      "Perkamas didelis kiekis pigios kokybės nuorodų.",
      "Vertė sprendžiama tik pagal vieną įrankio skaičių.",
      "Nekreipiamas dėmesys į temos relevanciją.",
      "Nuorodų strategija atskirta nuo brand ir turinio strategijos.",
    ],
    faq: [
      {
        question: "Ar viena labai stipri nuoroda gali būti vertingesnė už dešimt silpnų?",
        answer:
          "Taip, labai dažnai. Ypač jei ji ateina iš aktualaus, patikimo ir auditorijai prasmingo šaltinio realiame kontekste.",
      },
      {
        question: "Ar verta atsisakyti visų nofollow paminėjimų?",
        answer:
          "Ne. Nofollow paminėjimai vis tiek gali duoti srautą, žinomumą ir kitus signalus. Vertė neapsiriboja vien PageRank interpretacija.",
      },
    ],
    relatedSlugs: ["svetaines-reklama", "nofollow-nuorodos", "seo-konkurentu-analize"],
  },
  {
    slug: "seo-konkurentu-analize",
    sectionId: "advanced-seo",
    title: "SEO konkurentų analizė: kaip suprasti, kas iš tikrųjų laimi SERP",
    shortTitle: "Konkurentų analizė",
    description:
      "Pamoka apie SERP konkurentų analizę, turinio gap'us, intenciją, domeno modelius ir kaip susidaryti realistišką SEO veiksmų planą pagal konkurencinę aplinką.",
    metaTitle: "SEO konkurentų analizė: kaip vertinti SERP konkurenciją | LamaLocal",
    metaDescription:
      "Išsamus SEO konkurentų analizės gidas: kaip vertinti SERP, turinio gap'us, domeno stiprumą, intenciją ir atrasti realias augimo galimybes.",
    keywords: [
      "seo konkurentu analize",
      "serp analize",
      "seo competitor analysis",
      "raktažodziu konkurencija",
      "turinio gap analize",
    ],
    heroEyebrow: "Pažengusios temos",
    illustration: "competitors",
    updatedFor: "Atnaujinta pagal šiuolaikinę SERP intent ir content-gap logiką",
    intro: [
      "Tikroji SEO konkurencija dažnai nėra ta pati kaip verslo konkurencija. Paieškoje jūs konkuruojate su tais, kurie laimi konkretų vartotojo klausimą, net jei jie neparduoda identiško produkto ar paslaugos.",
      "Todėl konkurentų analizė turi prasidėti nuo SERP, o ne nuo jūsų vidinio sąrašo. Reikia matyti, kokie puslapių tipai laimi, kokią intenciją jie atitinka ir kokiais signalais jie stiprina savo poziciją.",
    ],
    sections: [
      {
        id: "serp-pjovis",
        title: "Pradėkite nuo SERP pjūvio, ne nuo nuojautos",
        paragraphs: [
          "Vienam raktažodžiui pirmame puslapyje gali konkuruoti gidai, katalogai, paslaugų puslapiai, forumai, video ar vietiniai žemėlapių rezultatai. Tai iš karto parodo, kokio formato turinį Google laiko tinkamiausiu tai užklausai.",
          "Jei jūs kuriate paslaugos puslapį, o SERP akivaizdžiai pilnas gidų ir palyginimų, tai signalizuoja, kad vartotojas dar nėra pasiruošęs pirkti. Tokiu atveju reikia ne spausti komercinį puslapį ten, kur jis netinka, o sukurti tarpinį turinį.",
        ],
      },
      {
        id: "turinio-gap",
        title: "Content gap analizė: ko konkurentai turi, o jūs dar ne",
        paragraphs: [
          "Geriausia konkurentų analizės vertė atsiranda tada, kai pamatote ne tik kas juos stiprina, bet kokių teminių kampų trūksta jūsų pačių svetainėje. Tai gali būti potemių spragos, neaptarti klausimai, nepadengtos lokacijos ar silpnas klasterių susiejimas.",
          "Tokios spragos dažnai duoda greitesnį rezultatą nei bandymas jėga pagerinti vieną puslapį. Kartais užtenka sukurti 3-5 palaikančius turinio vienetus, kad pagrindinis puslapis pradėtų augti natūraliau.",
        ],
      },
      {
        id: "prioritetai-pagal-potentiala",
        title: "Kaip susidėti prioritetus, kai niša konkurencinga",
        paragraphs: [
          "Ne visi raktažodžiai verti vienodo dėmesio. Jei tema labai konkurencinga, verta ieškoti nišinių, lokalių, ilgesnės uodegos ar etapinių užklausų, kuriose jūsų šansai laimėti yra didesni trumpesniu laikotarpiu.",
          "Tokie raktažodžiai dažnai generuoja mažesnį atskirą srautą, bet kartu sudaro stabilesnį augimo pamatą. Būtent taip dideli projektai dažnai ir susirenka pradinį autoritetą prieš eidami į platesnes užklausas.",
        ],
      },
    ],
    checklist: [
      "Analizė pradedama nuo realaus SERP vaizdo.",
      "Skiriama informacinė, komercinė ir lokali intencija.",
      "Ieškoma content gap'ų, o ne tik kopijuojamos konkurentų antraštės.",
      "Prioritetai dėliojami pagal laimėjimo tikimybę ir verslo vertę.",
    ],
    mistakes: [
      "Vertinami tik tiesioginiai verslo konkurentai.",
      "Nekreipiama dėmesio į paieškos intenciją.",
      "Bandoma kopijuoti konkurentą vietoje savo aiškesnio kampo kūrimo.",
      "Viskas dedama į vieną didelį raktažodį be tarpinės strategijos.",
    ],
    faq: [
      {
        question: "Ar reikia analizuoti kiekvieną raktažodį atskirai?",
        answer:
          "Ne visus, bet bent pagrindinius klasterius tikrai. Dažnai keli susiję raktažodžiai rodo labai panašią SERP logiką, todėl juos galima vertinti grupėmis.",
      },
      {
        question: "Ar mažesnis domenas gali laimėti prieš didelį konkurentą?",
        answer:
          "Taip, ypač nišinėse, lokalinėse ar aiškesnės intencijos temose. Dažnai laimi ne didžiausias domenas, o geriausiai užklausą atitinkantis puslapis.",
      },
    ],
    relatedSlugs: ["kokybiskas-turinys", "svetaines-reklama", "atgaliniu-nuorodu-kokybe"],
  },
  {
    slug: "vidinis-seo-klasteriai",
    sectionId: "advanced-seo",
    title: "Vidinis SEO ir topical clusters: kaip auginti temos autoritetą",
    shortTitle: "Vidinis SEO",
    description:
      "Pamoka apie topical clusters, pillar puslapius, vidinių nuorodų architektūrą ir kaip paversti turinį autoriteto sistema, o ne atskirais straipsniais.",
    metaTitle: "Vidinis SEO ir topical clusters: temos autoriteto sistema | LamaLocal",
    metaDescription:
      "Išmokite kurti topical clusters ir stiprų vidinį SEO: pillar puslapiai, klasteriai, vidinės nuorodos ir temos autoriteto auginimas.",
    keywords: [
      "vidinis seo",
      "topical clusters",
      "topic authority",
      "pillar pages",
      "vidines nuorodos seo strategija",
    ],
    heroEyebrow: "Pažengusios temos",
    illustration: "clusters",
    updatedFor: "Atnaujinta pagal topical authority ir cluster architecture praktiką",
    intro: [
      "Vidinis SEO yra daugiau nei pavienės nuorodos tarp puslapių. Tai visos temos architektūra: kaip viena pagrindinė idėja suskaidoma į aiškius, tarpusavyje susijusius puslapius, kurie vienas kitą sustiprina.",
      "Topical clusters padeda ne tik geriau aprėpti raktažodžius. Jie leidžia Google matyti, kad jūsų domenas nuosekliai dirba tam tikroje temoje ir neša ne vieną atsitiktinį tekstą, o struktūruotą ekspertinį lauką.",
    ],
    sections: [
      {
        id: "pillar-klasteris",
        title: "Pillar puslapis ir klasterio logika",
        paragraphs: [
          "Pillar puslapis apima plačią temą, o klasterio puslapiai gilina konkrečius klausimus ar scenarijus. Toks modelis veikia todėl, kad vartotojai retai ieško vien tik vieno bendro klausimo. Jie keliauja per kelis etapus ir vis siaurina poreikį.",
          "Kai jūsų svetainė turi tokį sluoksniavimą, galite atitikti daugiau skirtingų intencijų, o kartu vis grąžinti autoriteto signalą į pagrindinį teminį puslapį.",
        ],
      },
      {
        id: "klasterio-architektura",
        title: "Kaip statyti klasterį, kad jis nekanibalizuotų pats savęs",
        paragraphs: [
          "Didžiausia cluster modelio klaida yra tada, kai keli puslapiai rašo apie tą patį beveik tuo pačiu kampu. Tokiu atveju atsiranda keyword cannibalization rizika, o Google tampa sunkiau suprasti, kuris puslapis turi būti pagrindinis.",
          "Kad taip nenutiktų, kiekvienas klasterio puslapis turi turėti aiškią užklausos rolę, o pillar puslapis turi būti akivaizdus centras, ne tik dar vienas straipsnis panašia tema.",
        ],
      },
      {
        id: "vidinis-linking-grid",
        title: "Kaip atrodo geras vidinis linking grid'as",
        paragraphs: [
          "Geras linking grid'as reiškia, kad pillar nuorodomis palaiko klasterius, klasteriai remia pillar'ą ir tarpusavyje susiję puslapiai jungiasi ten, kur vartotojui tai prasminga. Tai sukuria vientisą žemėlapį, o ne atsitiktinių linkų kratinį.",
          "Praktiškai verta turėti vidinį modelį ar šabloną: ką kiekviena nauja pamoka turi nuorodomis palaikyti, iš ko gauti signalą ir kur vesti skaitytoją toliau.",
        ],
      },
    ],
    checklist: [
      "Kiekviena svarbi tema turi pillar puslapį.",
      "Klasterio puslapiai turi skirtingas roles ir intencijas.",
      "Vidinės nuorodos suplanuotos kaip sistema, ne spontaniškai.",
      "Teminis autoritetas auginamas per grupes, ne po vieną URL.",
    ],
    mistakes: [
      "Keli puslapiai varžosi dėl to paties klausimo tuo pačiu kampu.",
      "Pillar puslapis nėra aiškiai svarbesnis už klasterius.",
      "Vidinės nuorodos egzistuoja, bet nesudaro loginio kelio.",
      "Kiekviena tema vystoma chaotiškai, be bendro modelio.",
    ],
    faq: [
      {
        question: "Ar topical clusters tinka tik dideliems projektams?",
        answer:
          "Ne. Net ir mažesnis projektas gali laimėti labai daug, jei bent kelias strategines temas išvysto klasterio logika, o ne pavieniais nesusietais puslapiais.",
      },
      {
        question: "Kiek klasterio puslapių reikia vienai temai?",
        answer:
          "Nėra vieno skaičiaus. Svarbiausia, kad kiekvienas turėtų aiškią funkciją ir atitiktų realią paklausą. Geriau mažiau, bet aiškiai, nei daug beveik dubliuojančių tekstų.",
      },
    ],
    relatedSlugs: ["svetaines-narsymas", "anchor-tekstai", "seo-konkurentu-analize"],
  },
  {
    slug: "kodel-manes-neranda-google",
    sectionId: "advanced-seo",
    title: "Kodėl jūsų neranda Google: greita SEO diagnostika verslui",
    shortTitle: "Kodėl neranda Google",
    description:
      "Pamoka apie dažniausias priežastis, dėl kurių puslapis negauna matomumo: indeksavimo, intencijos, turinio, lokalumo ir pasitikėjimo spragos.",
    metaTitle: "Kodėl jūsų neranda Google: SEO problemų diagnostika | LamaLocal",
    metaDescription:
      "Sužinokite, kodėl jūsų nerodo Google: indeksavimo klaidos, silpnas turinys, netinkama intencija, lokalūs signalai ir praktinė SEO diagnostika.",
    keywords: [
      "kodel manes neranda google",
      "svetaines nerodo google",
      "seo problemu diagnostika",
      "kodel nera google paieskoje",
      "lokalus seo problemos",
    ],
    heroEyebrow: "Pažengusios temos",
    illustration: "diagnostics",
    updatedFor: "Atnaujinta pagal techninės diagnostikos ir paieškos intencijos praktiką",
    intro: [
      "Kai verslas sako „mūsų neranda Google“, dažniausiai problema nėra viena. Matomumo trūkumas dažniausiai susideda iš kelių sluoksnių: technikos, turinio, intencijos, lokalių signalų ir silpno autoriteto.",
      "Todėl diagnostika turi eiti nuo pagrindų į gylį. Pirmiausia reikia atsakyti, ar puslapis išvis indeksuojamas ir ar Google supranta jo temą. Tik tada verta gilintis į konkurenciją, nuorodas ar platesnį autoritetą.",
    ],
    sections: [
      {
        id: "indeksavimo-baze",
        title: "Ar jūsų puslapis išvis prieinamas paieškai",
        paragraphs: [
          "Pirmas klausimas visada turėtų būti techninis: ar puslapis indeksuojamas, ar nėra užblokuotas, ar teisingai peradresuojamas, ar nėra canonical konflikto, ar URL išvis patenka į sitemap ir vidinių nuorodų tinklą.",
          "Labai dažnai verslai galvoja, kad turi turinio problemą, nors reali priežastis yra daug paprastesnė: svarbus puslapis nėra gerai pasiekiamas robotams arba po svetainės atnaujinimo iškrito iš logiškos architektūros.",
        ],
      },
      {
        id: "intencijos-problema",
        title: "Galbūt puslapis tiesiog neatitinka užklausos intencijos",
        paragraphs: [
          "Jei vartotojas ieško palyginimo, o jūs rodote agresyvų paslaugos puslapį, jūsų rezultatui gali būti sunku laimėti. Ta pati problema galioja ir atvirkščiai: kai žmogus nori paslaugos, bet randa bendrą teorinį straipsnį.",
          "Todėl vienas svarbiausių diagnostikos klausimų yra ne „ar turime raktažodį puslapyje“, o „ar puslapio tipas ir jo žinutė atitinka tai, ko žmogus tikėjosi šioje užklausoje“.",
        ],
      },
      {
        id: "lokalus-autoritetas",
        title: "Vietiniame SEO dažnai trūksta ne vien svetainės, bet ir vietinių signalų",
        paragraphs: [
          "Jei kalbame apie lokalų verslą, svetainės optimizacija yra tik dalis vaizdo. Google Business Profile, vietiniai citavimai, lokacinis turinys, žemėlapių signalai ir atsiliepimai čia turi labai didelę reikšmę.",
          "Todėl lokalios matomumo problemos negalima diagnozuoti vien pagal svetainės tekstą. Reikia žiūrėti visą ekosistemą: žemėlapius, vietinius raktažodžius, vietinius puslapius ir konversinius signalus.",
        ],
      },
      {
        id: "ka-daryti-pirmiausia",
        title: "Kokia darbų eilė dažniausiai duoda didžiausią progresą",
        paragraphs: [
          "Pirmiausia sutvarkoma techninė bazė ir indeksavimas. Tada peržiūrima intencija ir puslapių tipai. Po to stiprinamas turinio gylis, vidinės nuorodos ir vietiniai ar autoriteto signalai. Tokia seka leidžia judėti nuo esminių stabdžių prie augimo svertų.",
          "Didžiausia klaida yra pradėti nuo pavienių triukų, neatsakius į pagrindinius klausimus. Kai problema įvardijama tiksliai, darbų planas tampa daug trumpesnis ir efektyvesnis.",
        ],
      },
    ],
    checklist: [
      "Patikrintas indeksavimas, canonical, sitemap ir vidinės nuorodos.",
      "Įvertinta, ar puslapis atitinka realią paieškos intenciją.",
      "Jei verslas lokalus, patikrinti ir Google Maps signalai.",
      "Sudėliota darbų seka nuo bazinių kliūčių iki augimo veiksmų.",
    ],
    mistakes: [
      "SEO problema vadinama „Google mūsų nemėgsta“ be diagnostikos.",
      "Bandoma taisyti tik tekstą, ignoruojant indeksavimą.",
      "Lokalus SEO vertinamas kaip vien svetainės klausimas.",
      "Vykdomi triukai be aiškaus prioritetų žemėlapio.",
    ],
    faq: [
      {
        question: "Per kiek laiko galima suprasti, kodėl puslapio neranda Google?",
        answer:
          "Bazinius techninius atsakymus dažniausiai galima gauti gana greitai. Sudėtingesnė dalis yra suprasti, kiek problemos kyla iš intencijos, konkurencijos ir autoriteto sluoksnio.",
      },
      {
        question: "Ar naujam puslapiui normalu, kad jo iškart nerodo?",
        answer:
          "Taip, ypač jei domenas dar neturi stipraus autoriteto. Tačiau naujas puslapis turi būti teisingai įtrauktas į svetainės architektūrą ir signalų sistemą nuo pat pradžių.",
      },
    ],
    relatedSlugs: ["webmaster-irankiai", "robots-txt", "seo-konkurentu-analize"],
  },
];

export const seoLessonsBySlug = Object.fromEntries(
  seoLessons.map((lesson) => [lesson.slug, lesson]),
) as Record<string, SeoLesson>;

export const seoSectionById = Object.fromEntries(
  seoSections.map((section) => [section.id, section]),
) as Record<string, SeoSection>;

export const orderedLessonSlugs = seoSections.flatMap((section) => section.lessonSlugs);

export function getLessonBySlug(slug: string) {
  return seoLessonsBySlug[slug];
}

export function getSectionById(sectionId: string) {
  return seoSectionById[sectionId];
}

export function getLessonPath(slug: string) {
  return `/seo-patarimai/${slug}`;
}

export function getRelatedLessons(slug: string) {
  const lesson = getLessonBySlug(slug);
  if (!lesson) return [];
  return lesson.relatedSlugs
    .map((relatedSlug) => getLessonBySlug(relatedSlug))
    .filter(Boolean);
}

export function getPrevNextLessons(slug: string) {
  const currentIndex = orderedLessonSlugs.indexOf(slug);

  if (currentIndex === -1) {
    return { prevLesson: undefined, nextLesson: undefined };
  }

  return {
    prevLesson: currentIndex > 0 ? getLessonBySlug(orderedLessonSlugs[currentIndex - 1]) : undefined,
    nextLesson:
      currentIndex < orderedLessonSlugs.length - 1
        ? getLessonBySlug(orderedLessonSlugs[currentIndex + 1])
        : undefined,
  };
}
