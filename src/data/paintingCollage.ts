// Koláž ve Spolupráci: fotky z malířského webu klienta. Pergola a práce se žlutými díly jsou výřezy z dodaných screenshotů.
// Vodorovná pozice a šířka jsou v procentech šířky rámu, svislá pozice v procentech jeho výšky.
// Rám má poměr stran 5 / 6.4.

export type CollageTile = {
  src: string;
  alt: string;
  /** Vodorovná pozice a šířka v % šířky rámu. */
  left: number;
  /** Svislá pozice v % výšky rámu. */
  top: number;
  width: number;
  /** Poměr stran fotky (šířka / výška). */
  ratio: string;
  /** Náklon ve stupních. */
  rotate: number;
  z: number;
};

export const paintingCollage: CollageTile[] = [
  {
    src: "/fotky/malirske-prace/drevena-fasada.webp",
    alt: "Dřevěná fasáda rodinného domu s lešením při renovaci",
    left: 0,
    top: 0,
    width: 36,
    ratio: "3 / 4",
    rotate: -2,
    z: 1,
  },
  {
    src: "/fotky/malirske-prace/strop-lista.webp",
    alt: "Malíř natírá štětcem zdobenou stropní lištu z lešeňové plošiny",
    left: 64,
    top: 0,
    width: 36,
    ratio: "764 / 920",
    rotate: 2,
    z: 2,
  },
  {
    src: "/fotky/malirske-prace/pergola.webp",
    alt: "Dřevěná pergola po renovaci",
    left: 31,
    top: 8,
    width: 38,
    ratio: "500 / 420",
    rotate: -1,
    z: 0,
  },
  {
    src: "/fotky/malirske-prace/zluta-stena.webp",
    alt: "Místnost s čerstvě natřenou žlutou stěnou při malování interiéru",
    left: 62,
    top: 43,
    width: 38,
    ratio: "4 / 3",
    rotate: -1.5,
    z: 2,
  },
  {
    src: "/fotky/malirske-prace/schodiste.webp",
    alt: "Schodiště s vymalovanými bílými a krémovými stěnami a dřevěným zábradlím",
    left: 0,
    top: 33,
    width: 36,
    ratio: "3 / 4",
    rotate: 1.5,
    z: 2,
  },
  {
    src: "/fotky/malirske-prace/priprava-zlutych-dilu.webp",
    alt: "Řemeslník upravuje žlutou desku, vedle stojí další panely",
    left: 34,
    top: 51,
    width: 36,
    ratio: "500 / 420",
    rotate: 1,
    z: 4,
  },
  {
    src: "/fotky/malirske-prace/seda-mistnost.webp",
    alt: "Vymalovaná místnost s tmavě šedou stěnou a bílými okny",
    left: 0,
    top: 70,
    width: 40,
    ratio: "4 / 3",
    rotate: -1,
    z: 4,
  },
  {
    src: "/fotky/malirske-prace/strop-bruseni.webp",
    alt: "Malíř brousí strop s modrošedým kruhovým zdobením",
    left: 62,
    top: 63,
    width: 34,
    ratio: "3 / 4",
    rotate: 2,
    z: 3,
  },
];
