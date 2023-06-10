export const chemicals = [
  {
    id: 1,
    nameOfProduct: 'Krtek',
    nameOfChemical: 'Hydroxid sodný',
    otherProducts: 'Domestos',
    use: 'Čištění odpadů, kotlů, potrubí, odmašťovací lázně, bělení a barvení textilií',
    specification: 'Bílý prášek, bez zápachu',
    warningSign: 'corrosive',
  },
  {
    id: 1 << 1,
    nameOfProduct: 'Ocet',
    nameOfChemical: 'Kyselina octová',
    otherProducts: '',
    use: 'Odmašťuje, odstraňuje usazeniny a nečistoty, leští, uvolňuje ucpané odpady, změkčuje prádlo, dále působí proti plísním',
    specification: 'Ostrý octový zápach, bezbarvá kapalina',
    warningSign: 'corrosive, flammable',
  },
  {
    id: 1 << 2,
    nameOfProduct: 'Odlakovač (s acetonem)',
    nameOfChemical: 'Aceton',
    otherProducts: 'Ředidla',
    use: 'Odmašťování a čištění povrchů, odstraňování nátěrů barvy',
    specification: 'bezbarvá kapalina s výrazným zápachem',
    warningSign: 'flammable',
  },
  {
    id: 1 << 3,
    nameOfProduct: 'Okena',
    nameOfChemical: 'Sloučeniny s amoniakem',
    otherProducts: 'Hnojiva',
    use: 'Bělící a čistící účinky, hnojiva, chladivo',
    specification: 'Bezbarvý plyn se štiplavým zápachem',
    warningSign: 'corrosiv, dangerous, lebka',
  },
  {
    id: 1 << 4,
    nameOfProduct: 'Peroxid vodíku',
    nameOfChemical: 'Peroxid vodíku',
    otherProducts: '',
    use: 'Bělící účinky, dezinfekční účinky',
    specification: 'Čirá namodralá kapalina',
    warningSign: 'corrosive, silný oxidant',
  },
  {
    id: 1 << 5,
    nameOfProduct: 'Savo',
    nameOfChemical: 'Chlornan sodný',
    otherProducts: 'Bělidlo, domestos',
    use: 'Čištění podlah a povrchů, dezinfekce',
    specification: 'Roztok, smrdí jako bazén',
    warningSign: 'corrosive, dangerous',
  },
  {
    id: 1 << 6,
    nameOfProduct: 'Líh',
    nameOfChemical: 'Ethanol',
    otherProducts: '',
    use: 'čištění, odmašťování, odstraňování některých druhů skvrn z textilu',
    specification: 'bezbarvá tekutina',
    warningSign: 'flammable',
  },
  {
    id: 1 << 7,
    nameOfProduct: '',
    nameOfChemical: '',
    otherProducts: '',
    use: '',
    specification: '',
    warningSign: '',
  },
];

chemicals.map(
  ({
    nameOfProduct,
    nameOfChemical,
    otherProducts,
    use,
    specification,
    warningSign,
  }) => {
    return (
      <div classname="chemicalCard">
        <h1 classname="chemicalCard__name">{nameOfProduct}</h1>
        <ul>
          <li>{nameOfChemical}</li>
          <li>{otherProducts}</li>
          <li>{use}</li>
          <li>{specification}</li>
        </ul>
        <div>{warningSign}</div>
      </div>
    );
  },
);
