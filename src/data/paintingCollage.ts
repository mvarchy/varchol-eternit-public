// Koláž ve Spolupráci: skutečné fotky z malířského webu klienta (malirske-nateracske-prace-litomerice.cz).
// Pozice a velikosti jsou v procentech šířky rámu, rám má poměr stran 5 / 6.

export type CollageTile = {
  src: string;
  alt: string;
  /** Pozice a šířka v % šířky rámu. */
  left: number;
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
    width: 44,
    ratio: "3 / 4",
    rotate: -2,
    z: 1,
  },
  {
    src: "/fotky/malirske-prace/strop-lista.webp",
    alt: "Malíř natírá štětcem zdobenou stropní lištu z lešeňové plošiny",
    left: 52,
    top: 4,
    width: 40,
    ratio: "764 / 920",
    rotate: 2,
    z: 2,
  },
  {
    src: "/fotky/malirske-prace/zluta-stena.webp",
    alt: "Místnost s čerstvě natřenou žlutou stěnou při malování interiéru",
    left: 46,
    top: 40,
    width: 50,
    ratio: "4 / 3",
    rotate: -1.5,
    z: 3,
  },
  {
    src: "/fotky/malirske-prace/schodiste.webp",
    alt: "Schodiště s vymalovanými bílými a krémovými stěnami a dřevěným zábradlím",
    left: 4,
    top: 40,
    width: 38,
    ratio: "3 / 4",
    rotate: 1.5,
    z: 3,
  },
  {
    src: "/fotky/malirske-prace/seda-mistnost.webp",
    alt: "Vymalovaná místnost s tmavě šedou stěnou a bílými okny",
    left: 18,
    top: 78,
    width: 44,
    ratio: "4 / 3",
    rotate: -1,
    z: 4,
  },
  {
    src: "/fotky/malirske-prace/strop-bruseni.webp",
    alt: "Malíř brousí strop s modrošedým kruhovým zdobením",
    left: 64,
    top: 70,
    width: 34,
    ratio: "3 / 4",
    rotate: 2,
    z: 4,
  },
];
