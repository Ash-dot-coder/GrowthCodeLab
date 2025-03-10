let offset = 0;
let limit = 40;
const typesURL = "https://pokeapi.co/api/v2/type/?limit=41";
const pokemonURL =
  "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset;
let types;
let pokemons;
let finalData;
const select = document.querySelector("select");
const pokemonDiv = document.querySelector("#pokemons");
const search = document.querySelector("#search");
const loadMore = document.querySelector("#loadMore");
const loadingDiv = document.querySelector("#loading");

getTypes();
getPokemon(pokemonURL);

loadMore.addEventListener("click", (e) => {
  offset += limit;
  getPokemon("https://pokeapi.co/api/v2/pokemon?limit=40&offset=" + offset);
});

select.addEventListener("change", (e) => {
  //   console.log(e.target.value);

  const copy = finalData;

  if (e.target.value === "all") displayData(finalData);
  else {
    displayData(
      copy.filter((pokemon) =>
        pokemon.types.some((type) => type.type.name === e.target.value)
      )
    );
  }
});

async function getTypes() {
  types = await getDataFromURL(typesURL);
  types = types.results;
  createOption(types);
}

async function getPokemon(url) {
  pokemons = await getDataFromURL(url);
  pokemons = pokemons.results;

  //   pokemons.forEach(async (obj) => {
  //     const data = await getDataFromURL(obj.url);
  //     console.log(data);
  //   });

  const promises = [];
  pokemons.forEach(async (obj) => {
    promises.push(getDataFromURL(obj.url));
  });
  //   console.log(promises); //thish is an array of promises

  finalData = await Promise.all(promises);
  //   console.log(finalData);
  displayData(finalData);
}

search.addEventListener("keyup", (e) => {
  if (e.target.value.length === 0) displayData(finalData);
  else {
    if (e.target.value.length > 3) {
      const searchedPokemons = finalData.filter((obj) => {
        return obj.name.includes(e.target.value);
      });
      if (searchedPokemons.length === 0) {
        pokemonDiv.innerHTML = "";
        pokemonDiv.innerHTML = "<h1>No Pokemon Found</h1>";
      } else displayData(searchedPokemons);
    }
  }
});

function displayData(data) {
  loadingDiv.style.display = "block";

  const fragment = document.createDocumentFragment();
  data.forEach((obj) => {
    const parent = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("h2");
    const type = document.createElement("p");

    image.src = obj.sprites.other.dream_world.front_default;
    name.innerText = obj.name;

    const types = [];
    obj.types.forEach((obje) => {
      types.push(obje.type.name);
    });
    // console.log(types);
    type.innerHTML = "<strong>Type:</strong>" + types.toString();
    // name.style.textTransform = "upperCase";

    parent.append(image, name, type);
    fragment.append(parent);
  });
  //   pokemonDiv.innerHTML = "";
  loadingDiv.style.display = "none";
  pokemonDiv.append(fragment);
}

function createOption(types) {
  const fragment = document.createDocumentFragment();
  types.forEach((obj) => {
    const option = document.createElement("option");
    option.value = obj.name;
    option.innerText = obj.name;
    fragment.append(option);
  });
  select.append(fragment);
}

async function getDataFromURL(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
