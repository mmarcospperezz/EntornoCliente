const pokemons = [
  {
    name: "Pikachu",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    desc: "Pikachu almacena electricidad en sus mejillas y la libera en ataques eléctricos."
  },
  {
    name: "Charmander",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    desc: "Charmander tiene una llama en la punta de su cola que indica su estado de ánimo."
  },
  {
    name: "Bulbasaur",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    desc: "Bulbasaur lleva una semilla en su lomo que crece a medida que evoluciona."
  },
  {
    name: "Squirtle",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    desc: "Squirtle se protege dentro de su caparazón y lanza potentes chorros de agua."
  },
  {
    name: "Infernape",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    desc: "Infernape es un Pokémon fuego/lucha con una llama eterna que arde en su cabeza."
  },
  {
    name: "Gengar",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    desc: "Gengar se esconde en las sombras y drena la energía de sus enemigos."
  },
  {
    name: "Charizard",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    desc: "Charizard vuela por los cielos y lanza llamas capaces de derretir cualquier cosa."
  },
  {
    name: "Lucario",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    desc: "Lucario puede percibir y manipular el aura de todos los seres vivos."
  },
  {
    name: "Crobat",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    desc: "Crobat vuela en silencio usando sus cuatro alas para desplazarse rápidamente."
  },

  {
    name: "Mewtwo",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    desc: "Mewtwo fue creado mediante ingeniería genética y posee un poder psíquico abrumador."
  },
  {
    name: "Mew",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    desc: "Mew es extremadamente raro y contiene el ADN de todos los Pokémon."
  },
  {
    name: "Lugia",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    desc: "Lugia es el guardián de los mares y duerme en lo más profundo del océano."
  },
  {
    name: "Ho-Oh",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    desc: "Ho-Oh vuela por los cielos y su plumaje brilla con los colores del arcoíris."
  },
  {
    name: "Rayquaza",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    desc: "Rayquaza vive en la capa de ozono y mantiene el equilibrio entre Kyogre y Groudon."
  },
  {
    name: "Dialga",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    desc: "Dialga tiene el poder de controlar el tiempo."
  },
  {
    name: "Palkia",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    desc: "Palkia controla el espacio y puede distorsionar dimensiones."
  },
  {
    name: "Giratina",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    desc: "Giratina habita en el Mundo Distorsión y fue desterrado por su violencia."
  },
  {
    name: "Zacian",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",
    desc: "Zacian ataca con una espada legendaria y es conocido como el héroe de Galar."
  },
  {
    name: "Articuno",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    desc: "Articuno es un Pokémon legendario de hielo capaz de congelar el aire a su alrededor."
  },
  {
    name: "Zapdos",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    desc: "Zapdos controla los rayos y aparece durante fuertes tormentas eléctricas."
  },
  {
    name: "Moltres",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    desc: "Moltres es un Pokémon legendario de fuego que renace de las llamas."
  },
  {
    name: "Eevee",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    desc: "Eevee tiene una estructura genética inestable que le permite evolucionar de múltiples formas."
  },
  {
    name: "Vaporeon",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    desc: "Vaporeon puede disolverse en el agua y controlar su temperatura."
  },
  {
    name: "Jolteon",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    desc: "Jolteon concentra electricidad en su pelaje para lanzar poderosos rayos."
  },
  {
    name: "Flareon",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    desc: "Flareon almacena fuego en su cuerpo y libera intensas llamaradas."
  },
  {
    name: "Espeon",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    desc: "Espeon utiliza poderes psíquicos para prever los movimientos del rival."
  },
  {
    name: "Umbreon",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    desc: "Umbreon se protege emitiendo toxinas desde los anillos de su cuerpo."
  },
  {
    name: "Leafeon",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
    desc: "Leafeon realiza la fotosíntesis y purifica el aire a su alrededor."
  },
  {
    name: "Glaceon",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
    desc: "Glaceon congela la humedad del aire creando cristales de hielo."
  },
  {
    name: "Sylveon",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
    desc: "Sylveon usa sus cintas para transmitir calma y afecto."
  },
  {
    name: "Lycanroc",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
    desc: "Lycanroc adopta diferentes formas según la hora del día y posee una gran ferocidad."
  },
  {
    name: "Machamp",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    desc: "Machamp puede lanzar mil puñetazos en solo dos segundos."
  },
  {
    name: "Greninja",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    desc: "Greninja se mueve con gran velocidad y ataca usando su lengua como bufanda."
  },
  {
    name: "Gyarados",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    desc: "Gyarados es extremadamente violento cuando entra en cólera."
  },
  {
    name: "Incineroar",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    desc: "Incineroar provoca a sus enemigos antes de lanzar ataques devastadores."
  },
  {
    name: "Dragonite",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    desc: "Dragonite es bondadoso y rescata a personas perdidas en el mar."
  },
  {
    name: "Darkrai",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    desc: "Darkrai provoca pesadillas para proteger su territorio."
  },
  {
    name: "Snorlax",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    desc: "Snorlax pasa la mayor parte del día durmiendo y comiendo sin preocupación."
  },
  {
    name: "Pidgeot",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    desc: "Pidgeot vuela a velocidades increíbles y domina los cielos."
  },
  {
    name: "Raticate",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    desc: "Raticate usa sus colmillos para roer casi cualquier cosa."
  },
  {
    name: "Arcanine",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    desc: "Arcanine es majestuoso y extremadamente veloz."
  },
  {
    name: "Alakazam",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    desc: "Alakazam posee una inteligencia superior."
  },
  {
    name: "Golem",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    desc: "Golem se protege con su cuerpo rocoso."
  },
  {
    name: "Rapidash",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    desc: "Rapidash galopa envuelto en llamas."
  },
  {
    name: "Slowbro",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    desc: "Slowbro vive relajado gracias a Shellder."
  },
  {
    name: "Magneton",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    desc: "Magneton emite poderosos campos magnéticos."
  },
  {
    name: "Lapras",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    desc: "Lapras es amable y transporta personas por el mar."
  },
  {
    name: "Ditto",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    desc: "Ditto puede transformarse en cualquier Pokémon."
  },

  {
    name: "Tyranitar",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    desc: "Tyranitar causa terremotos al caminar."
  },
  {
    name: "Scizor",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    desc: "Scizor ataca con precisión letal."
  },
  {
    name: "Heracross",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    desc: "Heracross es increíblemente fuerte."
  },
  {
    name: "Houndoom",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    desc: "Houndoom quema con fuego infernal."
  },
  {
    name: "Kingdra",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    desc: "Kingdra gobierna los mares profundos."
  },
  {
    name: "Blaziken",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
    desc: "Blaziken ataca con poderosas patadas."
  },
  {
    name: "Swampert",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    desc: "Swampert detecta tormentas."
  },
  {
    name: "Gardevoir",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    desc: "Gardevoir protege a su entrenador."
  },
  {
    name: "Metagross",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    desc: "Metagross posee una mente brillante."
  },
  {
    name: "Salamence",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    desc: "Salamence vuela con furia."
  },

  {
    name: "Staraptor",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
    desc: "Staraptor es feroz y dominante."
  },
  {
    name: "Luxray",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
    desc: "Luxray puede ver a través de objetos."
  },
  {
    name: "Roserade",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    desc: "Roserade ataca con toxinas."
  },
  {
    name: "Togekiss",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    desc: "Togekiss trae buena fortuna."
  },
  {
    name: "Weavile",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
    desc: "Weavile ataca en grupo."
  },
  {
    name: "Electivire",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
    desc: "Electivire libera electricidad extrema."
  },
  {
    name: "Magmortar",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    desc: "Magmortar dispara fuego desde sus brazos."
  },
  {
    name: "Gliscor",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
    desc: "Gliscor planea silenciosamente."
  },
  {
    name: "Mamoswine",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    desc: "Mamoswine sobrevivió a la era glacial."
  },

  {
    name: "Zoroark",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
    desc: "Zoroark crea ilusiones realistas."
  },
  {
    name: "Chandelure",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
    desc: "Chandelure quema almas."
  },
  {
    name: "Haxorus",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
    desc: "Haxorus corta acero."
  },
  {
    name: "Volcarona",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
    desc: "Volcarona es como un sol viviente."
  },
  {
    name: "Aegislash",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
    desc: "Aegislash cambia entre ataque y defensa."
  },
  {
    name: "Goodra",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
    desc: "Goodra es amable pero poderoso."
  },
  {
    name: "Noivern",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
    desc: "Noivern usa ultrasonidos."
  },

  {
    name: "Decidueye",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
    desc: "Decidueye dispara flechas fantasma."
  },
  {
    name: "Mimikyu",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
    desc: "Mimikyu se esconde bajo un disfraz."
  },
  {
    name: "Toxapex",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
    desc: "Toxapex es extremadamente defensivo."
  },

  {
    name: "Corviknight",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
    desc: "Corviknight domina los cielos de Galar."
  },
  {
    name: "Dragapult",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
    desc: "Dragapult lanza a sus crías."
  },
  {
    name: "Garchomp",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    desc: "Garchomp es un dragón devastador."
  },
  // ===== POKÉMON ADICIONALES (15) – SIN REPETIDOS =====
  {
    name: "Ninetales",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    desc: "Ninetales es un Pokémon místico que posee nueve colas y vive cientos de años."
  },
  {
    name: "Poliwrath",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    desc: "Poliwrath es experto en combate cuerpo a cuerpo y natación."
  },
  {
    name: "Steelix",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    desc: "Steelix tiene un cuerpo de acero extremadamente resistente."
  },
  {
    name: "Blissey",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    desc: "Blissey es símbolo de felicidad y cuida de los heridos."
  },
  {
    name: "Milotic",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    desc: "Milotic es considerado el Pokémon más bello del mundo."
  },
  {
    name: "Flygon",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    desc: "Flygon levanta tormentas de arena al volar."
  },
  {
    name: "Aggron",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
    desc: "Aggron protege ferozmente su territorio montañoso."
  },
  {
    name: "Gallade",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
    desc: "Gallade lucha con elegancia y precisión."
  },
  {
    name: "Dusknoir",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
    desc: "Dusknoir guía a las almas perdidas."
  },
  {
    name: "Spiritomb",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
    desc: "Spiritomb está formado por 108 espíritus atrapados."
  },
  {
    name: "Honchkrow",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
    desc: "Honchkrow lidera bandadas y actúa como un jefe mafioso."
  },
  {
    name: "Zekrom",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
    desc: "Zekrom representa el ideal y controla poderosos rayos."
  },
  {
    name: "Reshiram",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
    desc: "Reshiram simboliza la verdad y domina el fuego."
  },
  {
    name: "Xerneas",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
    desc: "Xerneas es el Pokémon de la vida y otorga energía vital."
  },
  {
    name: "Yveltal",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
    desc: "Yveltal absorbe la energía vital de los seres vivos."
  }

];

let currentPokemon = 0;

function clearScreen() {
  document.body.innerHTML = "";
}

function createHomeScreen() {
  clearScreen();

  const container = document.createElement("div");
  container.className = "home";

  const title = document.createElement("h1");
  title.textContent = "Poke-pedia";

  const button = document.createElement("button");
  button.textContent = "Entrar";

  button.addEventListener("click", createPokedex);

  container.append(title, button);
  document.body.appendChild(container);
}

function createPokedex() {
  clearScreen();

  const main = document.createElement("div");
  main.className = "pokedex";

  const name = document.createElement("h1");
  name.id = "pokemon-name";

  const img = document.createElement("img");
  img.id = "pokemon-img";

  const desc = document.createElement("p");
  desc.id = "pokemon-desc";

  const carousel = document.createElement("div");
  carousel.className = "carousel";

  pokemons.forEach((pokemon, index) => {
    const thumb = document.createElement("img");
    thumb.src = pokemon.img;
    thumb.alt = pokemon.name;

    thumb.addEventListener("click", () => {
      currentPokemon = index;
      updatePokemon();
    });

    carousel.appendChild(thumb);
  });

  main.append(name, img, desc, carousel);
  document.body.appendChild(main);

  updatePokemon();
}

function updatePokemon() {
  document.getElementById("pokemon-name").textContent =
    pokemons[currentPokemon].name;

  document.getElementById("pokemon-img").src =
    pokemons[currentPokemon].img;

  document.getElementById("pokemon-desc").textContent =
    pokemons[currentPokemon].desc;
}

document.addEventListener("DOMContentLoaded", createHomeScreen);
