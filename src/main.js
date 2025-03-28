const button = document.querySelector("#select-button");
button.addEventListener("click", selectPokemon);

const reset = document.querySelector("#reset");
reset.addEventListener("click", resetFunction);

function selectPokemon() {
  const select = document.querySelector("#Pokemon-select");
  displayPokemon(select.value);
}

function resetFunction() {
  displayPokemon("");
}

const hagla = document.querySelector("#start-game");
hagla.addEventListener("click", startGame);

function startGame() {
  hagla.setAttribute("style", "display: none");
  const disparait = document.querySelector("#disparait");
  disparait.setAttribute("style", "display:none");
  const reponse = document.querySelector("#reponse");
  reponse.setAttribute("style", "display: block");
  const annule = document.querySelector("#annule");
  annule.setAttribute("style", "display: inline");
  annule.addEventListener("click", function () {
    this.style.display = "none";
    reponse.setAttribute("style", "display: none");
    disparait.setAttribute("style", "display: block");
    resetFunction();
    hagla.setAttribute("style", "display: inline");
  });
  guessPokemon();
}

function displayPokemon(pokemonName) {
  const stylesheet = document.querySelector("#stylesheet");
  if (pokemonName === "") {
    stylesheet.setAttribute("href", "");
  } else {
    stylesheet.setAttribute("href", `src/pokemons/${pokemonName}.css`);
  }
}

function guessPokemon() {
  resetFunction();
  const pokemons = [
    "salameche",
    "chrysacier",
    "triopiker",
    "voltorbe",
    "saquedeneu",
    "carapuce",
    "ponyta",
    "evoli",
    "m.mime",
    "rondoudou",
  ];
  const randomIndex = Math.floor(Math.random() * pokemons.length);
  const randomPokemon = pokemons[randomIndex];
  displayPokemon(randomPokemon);
  const boubacar = document.querySelector("#boubacar");
  boubacar.addEventListener("click", function checkResponse () {
    const bob = document.querySelector("#bob");
    console.log('response', bob)
    console.log('response value', bob.value)
    if (bob.value == randomPokemon) {
      guessPokemon();
      boubacar.removeEventListener('click', checkResponse)
    } else {
      const erreur = document.querySelector("#erreur");
      erreur.setAttribute("style", "display: block");
      setTimeout(() => {
        erreur.setAttribute("style", "display: none");
      }, 1000);
    }
    bob.value = "";
  });
}