import savo from "./img/savo.png";
import ocet from "./img/ocet.png";
import peroxid from "./img/peroxid.png";
import odlakovac from "./img/odlakovac.png";
import krtek from "./img/krtek.png";
import okena from "./img/okena.png";
import pulirapid from "./img/pulirapid.png";
import corrosive from "./img/corrosive.png";
import flammable from "./img/flammable.png";
import oxidizer from "./img/oxidizer.png";
import pollutant from "./img/pullutant.png";
import irritating from "./img/irritating.png";
import skull from "./img/skull.png";

export const chemicals = [
  {
    id: "Krtek",
    nameOfProduct: "Krtek",
    nameOfChemical: "Hydroxid sodný",
    otherProducts: "Domestos",
    use: "Čištění odpadů, kotlů, potrubí, odmašťovací lázně, bělení a barvení textilií",
    specification: "Bílý prášek, bez zápachu",
    warningSign: [{ id: "corrosive", url: corrosive }],
    url: krtek,
  },
  {
    id: "Ocet",
    nameOfProduct: "Ocet",
    nameOfChemical: "Kyselina octová",
    otherProducts: "Univerzální a octové čističe",
    use: "Odmašťuje, odstraňuje usazeniny a nečistoty, leští, uvolňuje ucpané odpady, změkčuje prádlo, dále působí proti plísním",
    specification: "Ostrý octový zápach, bezbarvá kapalina",
    warningSign: [
      { id: "corrosive", url: corrosive },
      { id: "flammable", url: flammable },
    ],
    url: ocet,
  },
  {
    id: "Aceton",
    nameOfProduct: "Odlakovač (s acetonem)",
    nameOfChemical: "Aceton",
    otherProducts: "Ředidla",
    use: "Odmašťování a čištění povrchů, odstraňování nátěrů barvy",
    specification: "bezbarvá kapalina s výrazným zápachem",
    warningSign: [{ id: "flammable", url: flammable }],
    url: odlakovac,
  },
  {
    id: "Amoniak",
    nameOfProduct: "Okena",
    nameOfChemical: "Sloučeniny s amoniakem",
    otherProducts: "Hnojiva",
    use: "Bělící a čistící účinky, hnojiva, chladivo",
    specification: "Bezbarvý plyn se štiplavým zápachem",
    warningSign: [
      { id: "corrosive", url: corrosive },
      { id: "pollutant", url: pollutant },
      { id: "deadly", url: skull },
    ],
    url: pulirapid,
  },
  {
    id: "Peroxid",
    nameOfProduct: "Peroxid vodíku",
    nameOfChemical: "Peroxid vodíku",
    otherProducts: "Dezinfekce na plochy",
    use: "Bělící účinky, dezinfekční účinky",
    specification: "Čirá namodralá kapalina",
    warningSign: [
      { id: "corrosive", url: corrosive },
      { id: "oxidizer", url: oxidizer },
    ],
    url: peroxid,
  },
  {
    id: "Savo",
    nameOfProduct: "Savo",
    nameOfChemical: "Chlornan sodný",
    otherProducts: "Bělidlo, domestos",
    use: "Čištění podlah a povrchů, dezinfekce",
    specification: "Roztok s výrazným chlorových zápachem",
    warningSign: [
      { id: "corrosive", url: corrosive },
      { id: "flammable", url: flammable },
      { id: "pollutant", url: pollutant },
      { id: "irritating", url: irritating },
    ],
    url: savo,
  },
  {
    id: "Ethanol",
    nameOfProduct: "Líh",
    nameOfChemical: "Ethanol",
    otherProducts: "Dezinfekce, čistič povrchů",
    use: "čištění, odmašťování, odstraňování některých druhů skvrn z textilu",
    specification: "bezbarvá tekutina",
    warningSign: [{ id: "flammable", url: flammable }],
    url: okena,
  },
  {
    id: "Citron",
    nameOfProduct: "Kyselina citronová",
    nameOfChemical: "Kyselina citronová",
    otherProducts: "Prostředky k čištění vodního kamene",
    use: "Vaření, pečení, úklid",
    specification: "Bezbarvé krystaly bez zápachu",
    warningSign: [{ id: "irritating", url: irritating }],
    url: ocet,
  },
];
