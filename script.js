// Données : [symbole, nom, masse] — le numéro atomique Z = position dans la liste + 1
const donnees = [
  ["H","Hydrogène",1.008],["He","Hélium",4.0026],["Li","Lithium",6.94],["Be","Béryllium",9.0122],
  ["B","Bore",10.81],["C","Carbone",12.011],["N","Azote",14.007],["O","Oxygène",15.999],
  ["F","Fluor",18.998],["Ne","Néon",20.180],["Na","Sodium",22.990],["Mg","Magnésium",24.305],
  ["Al","Aluminium",26.982],["Si","Silicium",28.085],["P","Phosphore",30.974],["S","Soufre",32.06],
  ["Cl","Chlore",35.45],["Ar","Argon",39.948],["K","Potassium",39.098],["Ca","Calcium",40.078],
  ["Sc","Scandium",44.956],["Ti","Titane",47.867],["V","Vanadium",50.942],["Cr","Chrome",51.996],
  ["Mn","Manganèse",54.938],["Fe","Fer",55.845],["Co","Cobalt",58.933],["Ni","Nickel",58.693],
  ["Cu","Cuivre",63.546],["Zn","Zinc",65.38],["Ga","Gallium",69.723],["Ge","Germanium",72.630],
  ["As","Arsenic",74.922],["Se","Sélénium",78.971],["Br","Brome",79.904],["Kr","Krypton",83.798],
  ["Rb","Rubidium",85.468],["Sr","Strontium",87.62],["Y","Yttrium",88.906],["Zr","Zirconium",91.224],
  ["Nb","Niobium",92.906],["Mo","Molybdène",95.95],["Tc","Technétium",98],["Ru","Ruthénium",101.07],
  ["Rh","Rhodium",102.91],["Pd","Palladium",106.42],["Ag","Argent",107.87],["Cd","Cadmium",112.41],
  ["In","Indium",114.82],["Sn","Étain",118.71],["Sb","Antimoine",121.76],["Te","Tellure",127.60],
  ["I","Iode",126.90],["Xe","Xénon",131.29],["Cs","Césium",132.91],["Ba","Baryum",137.33],
  ["La","Lanthane",138.91],["Ce","Cérium",140.12],["Pr","Praséodyme",140.91],["Nd","Néodyme",144.24],
  ["Pm","Prométhium",145],["Sm","Samarium",150.36],["Eu","Europium",151.96],["Gd","Gadolinium",157.25],
  ["Tb","Terbium",158.93],["Dy","Dysprosium",162.50],["Ho","Holmium",164.93],["Er","Erbium",167.26],
  ["Tm","Thulium",168.93],["Yb","Ytterbium",173.05],["Lu","Lutécium",174.97],["Hf","Hafnium",178.49],
  ["Ta","Tantale",180.95],["W","Tungstène",183.84],["Re","Rhénium",186.21],["Os","Osmium",190.23],
  ["Ir","Iridium",192.22],["Pt","Platine",195.08],["Au","Or",196.97],["Hg","Mercure",200.59],
  ["Tl","Thallium",204.38],["Pb","Plomb",207.2],["Bi","Bismuth",208.98],["Po","Polonium",209],
  ["At","Astate",210],["Rn","Radon",222],["Fr","Francium",223],["Ra","Radium",226],
  ["Ac","Actinium",227],["Th","Thorium",232.04],["Pa","Protactinium",231.04],["U","Uranium",238.03],
  ["Np","Neptunium",237],["Pu","Plutonium",244],["Am","Américium",243],["Cm","Curium",247],
  ["Bk","Berkélium",247],["Cf","Californium",251],["Es","Einsteinium",252],["Fm","Fermium",257],
  ["Md","Mendélévium",258],["No","Nobélium",259],["Lr","Lawrencium",266],["Rf","Rutherfordium",267],
  ["Db","Dubnium",268],["Sg","Seaborgium",269],["Bh","Bohrium",270],["Hs","Hassium",277],
  ["Mt","Meitnérium",278],["Ds","Darmstadtium",281],["Rg","Roentgenium",282],["Cn","Copernicium",285],
  ["Nh","Nihonium",286],["Fl","Flérovium",289],["Mc","Moscovium",290],["Lv","Livermorium",293],
  ["Ts","Tennesse",294],["Og","Oganesson",294]
];

// Donne [ligne, colonne] d'un élément dans la grille selon son numéro atomique z
function position(z) {
  if (z === 1) return [1, 1];
  if (z === 2) return [1, 18];
  if (z <= 4) return [2, z - 2];
  if (z <= 10) return [2, z + 8];
  if (z <= 12) return [3, z - 10];
  if (z <= 18) return [3, z];
  if (z <= 36) return [4, z - 18];
  if (z <= 54) return [5, z - 36];
  if (z <= 56) return [6, z - 54];
  if (z <= 71) return [9, z - 54];   // lanthanides
  if (z <= 86) return [6, z - 68];
  if (z <= 88) return [7, z - 86];
  if (z <= 103) return [10, z - 86]; // actinides
  return [7, z - 100];
}

// Donne la famille d'un élément selon son numéro atomique z
function famille(z) {
  if ([3, 11, 19, 37, 55, 87].includes(z)) return "alcalin";
  if ([4, 12, 20, 38, 56, 88].includes(z)) return "alcalino-terreux";
  if ([2, 10, 18, 36, 54, 86, 118].includes(z)) return "gaz-noble";
  if ([9, 17, 35, 53, 85, 117].includes(z)) return "halogene";
  if ([5, 14, 32, 33, 51, 52].includes(z)) return "metalloide";
  if ([1, 6, 7, 8, 15, 16, 34].includes(z)) return "non-metal";
  if (z >= 57 && z <= 71) return "lanthanide";
  if (z >= 89 && z <= 103) return "actinide";
  if ([13, 31, 49, 50, 81, 82, 83, 84, 113, 114, 115, 116].includes(z)) return "pauvre";
  return "transition";
}

const noms = {
  "alcalin": "métal alcalin", "alcalino-terreux": "métal alcalino-terreux",
  "transition": "métal de transition", "pauvre": "métal pauvre",
  "metalloide": "métalloïde", "non-metal": "non-métal", "halogene": "halogène",
  "gaz-noble": "gaz noble", "lanthanide": "lanthanide", "actinide": "actinide"
};

const tableau = document.getElementById("tableau");
const details = document.getElementById("details");

donnees.forEach(([symbole, nom, masse], index) => {
  const z = index + 1;
  const [ligne, colonne] = position(z);
  const fam = famille(z);

  const case_ = document.createElement("div");
  case_.className = "element " + fam;
  case_.style.gridRow = ligne;
  case_.style.gridColumn = colonne;
  case_.innerHTML = `<small>${z}</small><strong>${symbole}</strong>`;

  case_.addEventListener("click", () => {
    details.textContent = `${nom} (${symbole}) — Z = ${z} — masse : ${masse} u — ${noms[fam]}`;
  });

  tableau.appendChild(case_);
});