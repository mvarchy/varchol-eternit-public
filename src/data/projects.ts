// Galerie po projektech. Fotky patří do public/fotky/projekty/<slug>/.

export type ProjectPhoto = { src?: string; alt: string };

export type Project = {
  slug: string;
  title: string;
  place: string;
  cover: ProjectPhoto;
  photos: ProjectPhoto[];
  /** CSS object-position pro ořez úvodní fotky v kartě (výchozí střed). */
  coverPosition?: string;
  /** Datum realizace (ISO, RRRR-MM-DD). */
  date?: string;
};

const dates: Record<string, string> = {
  "01-veltezi-louny": "2024-08-10",
  "02-chlumec-usti-nad-labem": "2024-09-23",
  "03-malesov-hostka": "2025-07-02",
  "04-blazim-louny": "2025-04-18",
  "05-zitenice-litomerice": "2026-02-10",
  "06-msene-lazne": "2026-03-27",
  "07-prosec-pod-jestedem-cesky-dub": "2025-10-18",
  "08-litomerice": "2026-04-12",
  "09-liberec": "2026-05-08",
  "10-jencice": "2026-05-27",
  "11-repcice-trebusin": "2026-06-13",
  "12-hostka": "2026-08-16",
  "14-chvalin-nove-dvory": "2026-10-19",
};

/** Datum v češtině, např. „10. 2. 2026“. */
export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}. ${m}. ${y}`;
};

// Každá zakázka má ve složce podsložku "HERO - galerie" (úvodní fotka) a podsložku s ostatními fotkami.
// Názvy podsložek jsou nekonzistentní, proto se zadávají ručně. Soubory jsou .webp.
const project = (
  slug: string,
  title: string,
  work: string,
  heroPath: string,
  galleryDir: string | null,
  galleryFiles: string[],
  coverPosition?: string,
): Project => {
  // `next/image` zakóduje cestu samo; předchozí encodeURI způsoboval dvojité kódování mezer.
  const url = (path: string) => `/fotky/projekty/${slug}/${path}`;
  const srcs = [url(heroPath), ...galleryFiles.map((f) => url(`${galleryDir}/${f}`))];
  const photos = srcs.map((src, i) => ({ src, alt: `${work} ${title}, fotka ${i + 1}` }));
  return { slug, title, place: work, cover: photos[0], photos, coverPosition, date: dates[slug] };
};

const HERO = "HERO - galerie/01.webp";
const nums = (...n: number[]) => n.map((i) => `${String(i).padStart(2, "0")}.webp`);

export const projects: Project[] = [
  project("01-veltezi-louny", "Veltěže, Louny", "Demontáž a likvidace eternitu", HERO, "galerie", nums(2, 3, 4)),
  project("02-chlumec-usti-nad-labem", "Chlumec, Ústí nad Labem", "Demontáž a likvidace eternitu", HERO, "galerie", nums(2, 3, 4, 5, 6), "50% 30%"),
  project("03-malesov-hostka", "Malešov, Hoštka", "Demontáž a likvidace eternitu", HERO, "galerie", nums(2, 3, 4, 5, 6, 7)),
  project("04-blazim-louny", "Blažim, Louny", "Demontáž a likvidace eternitu", HERO, "galerie", nums(2, 3, 4, 5, 6, 7)),
  project("05-zitenice-litomerice", "Žitenice, Litoměřice", "Demontáž a likvidace eternitu", HERO, "galerie", nums(2, 3, 4, 5, 6, 7), "50% 35%"),
  project("06-msene-lazne", "Mšené Lázně", "Demontáž a likvidace eternitu", HERO, "galerie", nums(2)),
  project("07-prosec-pod-jestedem-cesky-dub", "Proseč pod Ještědem, Český Dub", "Demontáž a likvidace eternitu", HERO, "galerie", nums(2, 3, 4)),
  project("08-litomerice", "Litoměřice", "Demontáž a likvidace eternitu", "HERO - galerie/09.webp", "galerie", nums(1, 4, 5, 6, 7, 8)),
  project("09-liberec", "Liberec", "Demontáž a likvidace eternitu", HERO, null, []),
  project("10-jencice", "Jenčice", "Demontáž a likvidace eternitu", HERO, "galerie", nums(2, 3, 4, 5)),
  project("11-repcice-trebusin", "Řepčice, Třebušín", "Demontáž a likvidace eternitu", HERO, "galerie", nums(2, 3)),
  project("12-hostka", "Hoštka", "Demontáž a likvidace eternitu", HERO, "galerie", nums(2, 3, 4)),
  project("13-libochovice", "Libochovice", "Demontáž a likvidace eternitu", HERO, "galerie", nums(2, 3, 4)),
  project("14-chvalin-nove-dvory", "Chvalín, Nové Dvory", "Demontáž a likvidace eternitu", HERO, "galerie", nums(2, 3, 4, 5, 6, 7)),
];
