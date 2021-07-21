// Creating a list of pokemon
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  //function to add pokemon
  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  // return a pokemon list
  function getAll() {
    return pokemonList;
  }

  // To create elements and add event listeners
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".list-group");
    let listpokemon = document.createElement("li");
    listpokemon.classList.add("group-list-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemonlist-button");
    button.setAttribute("data-target", "#exampleModal");
    button.setAttribute("data-toggle", "modal");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

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
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  // show modal
  function showModal(item) {
    //modal content
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    // create element for a name in modal content
    let nameElement = $("<h1>" + item.name + "</h1>");

    // img element
    let imageElement = $('<img class="modal-img" style="width:200px">');

    imageElement.attr("src", item.imageUrl);

    // img back element

    let imageElementBack = $('<img class="modal-img" style="width:200px">');

    imageElementBack.attr("src", item.imageUrlBack);

    //create element for height in modal
    let heightElement = $("<p>" + "Height: " + item.height + " ft" + "</p>");

    //create element for weight
    let weightElement = $("<p>" + "Weight: " + item.weight + " lbs" + "</p>");

    //create element for type
    let typeElement = $("<p>" + "Type: " + item.types + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typeElement);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
})();

// forEach loop to iterate over pokemon's list
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

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
