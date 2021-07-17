// Creating a list of pokemon
let pokemonRepository = (function () {
  //modal content
  let pokedexList = document.querySelector(".pokemon-list");
  let modalContainer = document.querySelector("#modal-container");
  let modal = document.querySelector(".modal");

  let modalClose = document.createElement("button");
  modalClose.classList.add("modal-close");
  let pokemonName = document.createElement("h1");
  pokemonName.classList.add("pokemon-name");
  let pokemonHeight = document.createElement("p");
  pokemonHeight.classList.add("pokemon-height");
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");
  let pokemonImage = document.createElement("img");
  pokemonImage.classList.add("pokemon-image");
  let pokemonType = document.createElement("p");
  pokemonType.classList.add("pokemon-type");
  let pokemonWeight = document.createElement("p");
  pokemonWeight.classList.add("pokemon-weight");

  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
  // To create elements and add event listeners
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemonlist-button");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  // show modal
  function showModal() {
    modalContainer.classList.add("is-visible");
  }

  // Hide modal
  function hideModal() {
    modalContainer.classList.remove("is-visible");
  }

  modalClose.addEventListener("click", hideModal);

  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

  modalContainer.addEventListener("click", (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  // load the list of all pokemons
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name.toUpperCase(),
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // load details for each pokemon
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types[0].type.name;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // To fetch details of pokemon
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      pokemonName.innerHTML = pokemon.name.toUpperCase();
      pokemonHeight.innerHTML = "Height: " + pokemon.height + " mts";
      pokemonWeight.innerHTML = "Weight: " + pokemon.weight + " lbs";
      pokemonType.innerHTML = "Type: " + pokemon.types.toUpperCase();
      pokemonImage.src = pokemon.imageUrl;
      modalClose.innerHTML = "X";
      showModal();
    });
  }

  modal.appendChild(modalClose);
  modal.appendChild(pokemonName);
  modal.appendChild(imageContainer);
  modal.appendChild(pokemonHeight);
  modal.appendChild(pokemonWeight);
  modal.appendChild(pokemonType);
  imageContainer.appendChild(pokemonImage);

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal,
  };
})();

// forEach loop to iterate over pokemon's list
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

//------------------------------------------------------------------------------------------------------------------------------------------------//
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
