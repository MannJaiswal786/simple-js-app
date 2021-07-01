// Creating a list of pokemon
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

// foeEach loop to iterate over pokemon's list
pokemonList.forEach(function (pokemon) {
  document.write(
    "|Name: " +
      pokemon.name +
      " |Height: " +
      pokemon.height +
      " |Type: " +
      pokemon.type +
      " |Abilities: " +
      pokemon.abilities +
      "|</br>"
  );
  // conditionals to print the pokemon with their respectful heights
  if (pokemon.height > 7) {
    document.write("|" + pokemon.name + " is a huge pokemon!" + "|</br>");
  } else if (pokemon.height > 4 && pokemon.height < 6.9) {
    document.write("|" + pokemon.name + " is average in its size" + "|</br>");
  } else {
    document.write("|" + pokemon.name + " is small but powerful" + "|</br>");
  }
});
