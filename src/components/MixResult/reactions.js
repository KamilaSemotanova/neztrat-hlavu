import acid from "../../img/acid.gif";
import boom from "../../img/boom.gif";
import death from "../../img/death.gif";
import heat from "../../img/heat.gif";

export const reactionResult = {
  KrtekOcet: {
    icon: acid,
    title: "Rozhodně na to nesahejte!",
    reaction: "CH3COOH + NaOH → CH3COONa + H2O",
    resultInfo:
      "Sice se vám nepovedlo vybuchnout, ale rozhodně na to nesahejte, pořád vám to může sežrat ruce.",
    toDo: "Pokud už jste si sáhli, tak postižené místo dejte pod tekoucí vodu ideálně na 20 minut. Odstraňtte zdroje a postižené textilie a šperky. Vyhledejte pomoc odborníka",
  },
  OcetSavo: {
    icon: death,
    title: "Pořídili jste si edém plic!",
    reaction: "NaOCl + CH3COOH →  CH3COONa + HOCl",
    resultInfo:
      "Pálí vás oči a máte podrážděné dýchací cesty? Přesně tak, vyrobili jste si plynný chlór. Prvními příznaky jsou kašel a případně zvracení.",
    toDo: "Vyvětrejte nebo se bežte nadýchat čistého vzduchu. Zabraňte dalšímu vdechování, dýchejte pomalu a kontaktujte odborníka.",
  },
  CitronOcet: {
    title: "",
  },
  AcetonOcet: {
    title: "",
  },
  EthanolOcet: {
    title: "",
  },
  OcetPeroxid: {
    icon: acid,
    title: "Poleptali jste si ruce!",
    reaction: "CH3COOH + H2O2 → CH3COOOH + H20 ",
    resultInfo:
      "Výsledkem reakce, kterou jste právě vytvořili, je kyselina peroctová. Silná žíravina, která má ostrý octový zápach. Sice si s tím skvrnu zaručeně vybělíte, ale zároveň s tím si rozežerete i ruce.",
    toDo: "Postižené místo dejte pod tekoucí vodu ideálně na 20 minut. Odstraňtte zdroje a postižené textilie a šperky. Vyhledejte pomoc odborníka",
  },
  AmoniakOcet: {
    title: "",
  },
  KrtekSavo: {
    icon: heat,
    title: "Opařili jste se!",
    reaction: "NaOH + NaClO → NaCl + NaOCl + H2O",
    resultInfo:
      "Reakce je silně exotermní a teplo se uvolňuje za prskání horké tekutiny, která vás může v první řadě opařit a zároveň podráždit pokožku.",
    toDo: "Chlaďte popáleniny nebo případně přikládejte sterilní chladivé obklady. V případě závažnějších popálenin neprodleně kontaktujte odborníka",
  },
  CitronKrtek: {
    title: "",
  },
  AcetonKrtek: {
    title: "",
  },
  EthanolKrtek: {
    title: "",
  },
  KrtekPeroxid: {
    icon: heat,
    title: "Ajaj, popálili jste se!",
    reaction: "NaOH + H2O2 → Na2O2 + H2O",
    resultInfo:
      "Reakce mezi peroxidem vodíku a  hydroxidem sodným je silně exotermní. Při takovém zvýšení teplot může způsobit exotermickou mlhu, která má vysoké teploty.",
    toDo: "Chlaďte popáleniny nebo případně přikládejte sterilní chladivé obklady. V případě závažnějších popálenin neprodleně kontaktujte odborníka",
  },
  AmoniakKrtek: {
    title: "",
  },
  CitronSavo: {
    icon: death,
    title: "Vyrobili jste si edém plic!",
    reaction: "NaOCl + HOC(CH2CO2H)2 → Na0C(CH2CO2H)2 + HOCl",
    resultInfo:
      "Vyrobili jste si plynný chlór. S největší pravděpodobností vás pálí oči a máte potřebu kašlat. Možná už u vás otrava postoupila dál, takže kašlete a zvracíte.",
    toDo: "Vyvětrejte nebo se bežte nadýchat čistého vzduchu. Zabraňte dalšímu vdechování, dýchejte pomalu a kontaktujte odborníka.",
  },
  AcetonSavo: {
    icon: death,
    title: "Do několika minut omdlíte!",
    reaction: "(CH3)2CO + NaOCl → CH3CO2-Na+ + CHCl3 + NaOH + NaCl",
    resultInfo:
      "Produktem reakce je chloroform, který tlumí centrální nervový systém. Inhalace způsobuje závratě, ospalost a bolesti hlavy. Při větším množství může dojít i k útlumu dechového centra, což může vést až ke smrti.",
    toDo: "Vyvětrejte nebo se bežte nadýchat čistého vzduchu. Zabraňte dalšímu vdechování, dýchejte pomalu a kontaktujte odborníka.",
  },
  EthanolSavo: {
    icon: death,
    title: "Do několika minut omdlíte!",
    reaction: "NaClO + C3H6O → CHCl3 + NaOH + NaOCOCH3",
    resultInfo:
      "Špatně se vám dýchá a motá se vám hlava. Přesně to je následkem jedním z produktů reakce -chloroformu. Při větším množství může dojít i k útlumu dechového centra, což může vést až ke smrti.",
    toDo: "Vyvětrejte nebo se bežte nadýchat čistého vzduchu. Zabraňte dalšímu vdechování, dýchejte pomalu a kontaktujte odborníka.",
  },
  PeroxidSavo: {
    icon: boom,
    title: "Právě jste vybuchli!",
    reaction: "NaOCL + H2O2 → H2O + NaCl + O2",
    resultInfo:
      "Reakce je exotermní. V reakci vidíte, že jedním z produktů je i kyslík, který se při tak rychlé reakci tvoří ve velkém množtví. V nadměrných koncentracích pak způsobí výbuch. Kromě toho je také možné, že jste vyrobili plynný chlór.",
    toDo: "Vyvětrejte nebo se bežte nadýchat čistého vzduchu. Zabraňte dalšímu vdechování, dýchejte pomalu a kontaktujte odborníka.",
  },
  AmoniakSavo: {
    icon: death,
    title: "Kašlete a chce se vám zvracet",
    reaction: "2NaOCL + NH3 → NaCl +NaOH + NH2Cl",
    resultInfo:
      "Vyrobený chloramin, který je v plynné formě, je toxický a při vdechování a způsobuje nevolnost, podráždění očí, dušnost, sípání a kašel.",
    toDo: "Vyvětrejte nebo se bežte nadýchat čistého vzduchu. Zabraňte dalšímu vdechování, dýchejte pomalu a kontaktujte odborníka.",
  },
  AcetonCitron: {
    title: "",
  },
  EthanolCitron: {
    title: "",
  },
  CitronPeroxid: {
    title: '',
  },
  AmoniakCitron: {
    title: "",
  },
  AcetonEthanol: {
    title: "",
  },
  AcetonPeroxid: {
    icon: boom,
    title: "Právě jste přišli o ruce!",
    reaction: "(CH3)2CO + H2O2 → TATP",
    resultInfo:
      "Nejste jediný, kdo si touto cestou vyrobil výbušninu. Je to jedna z amatérsky nejčastěji vyrábědnou třaskavinou, která je nicméně velmi silná. Již gramových množstvích způsobuje exploze zranění vyžadující amputaci.",
    toDo: "Záleží na rozsahu zranění, v každém případě kontaktujte odborníka, který vám se situací jistě poradí.",
  },
  AcetonAmoniak: {
    icon: death,
    title: "Možná se vám špatně dýchá",
    reaction: "(CH3)2CO + NH3 → C6H13NO",
    resultInfo:
      "Produktem reakce je amin, který může při vdechování většího množství způsobit dušnost a kašel.",
    toDo: "Vyvětrejte nebo se bežte nadýchat čistého vzduchu. Zabraňte dalšímu vdechování, dýchejte pomalu a kontaktujte odborníka.",
  },
  EthanolPeroxid: {
    title: "",
  },
  AmoniakEthanol: {
    title: "",
  },
  AmoniakPeroxid: {
    icon: heat,
    title: "Opařila vás voda!",
    reaction: "H2O2 + NH3 → N2 + H2O + H2",
    resultInfo:
      "Reakce mezi amoniakem a peroxidem vodíku je silně exotermní. Energie uvolněná skrze teplo má za výsledek prskání a stříkání kapaliny.",
    toDo: "Chlaďte popáleniny nebo případně přikládejte sterilní chladivé obklady. V případě závažnějších popálenin neprodleně kontaktujte odborníka",
  },
};
