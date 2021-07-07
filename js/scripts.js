// Creating a list of pokemon
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Pikachu",
      height: 1.4,
      type: "Electric",
      abilities: ["Static", "Lightninggrod"],
    },

    {
      name: "Butterfree",
      height: 3.7,
      type: ["Bug", "Flying"],
      abilities: ["Compoundeyes", "Tinted-Lens"],
    },

    {
      name: "Nidoking",
      height: 4.7,
      type: ["Ground", "Poison"],
      abilities: ["Poison-Point", "Rivalry"],
    },

    {
      name: "Keldeo",
      height: 5.9,
      type: ["Water", "Fighting"],
      abilities: "Justified",
    },

    {
      name: "Lapras",
      height: 8.2,
      type: ["Water", "Ice"],
      abilities: ["Hydration", "Shell-Armor"],
    },
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  // To create elements and add event listeners
  function addListItem(pokemon) {
    let pokemonUnorderedList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemonlist-button");
    listItem.appendChild(button);
    pokemonUnorderedList.appendChild(listItem);
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  // To fetch details of pokemon
  function showDetails(pokemon) {
    console.log("Pokemon Name: " + pokemon.name);
    document.write("Pokemon Name: " + pokemon.name);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();

pokemonRepository.add({
  name: "Raichu",
  height: 1.5,
  type: "Electric",
  abilities: "Static",
});

// forEach loop to iterate over pokemon's list
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
