let score = 0;

const annule = document.querySelector("#annule");
annule.addEventListener("click", remiseAZero);

const kirikou = document.querySelector("#kirikou");
kirikou.innerHTML = score;

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
  annule.setAttribute("style", "display: inline");
  guessPokemon(5);
}
function remiseAZero() {
  annule.setAttribute("style", "display: none");
  reponse.setAttribute("style", "display: none");
  disparait.setAttribute("style", "display: block");
  resetFunction();
  hagla.setAttribute("style", "display: inline");
  score = 0;
  kirikou.innerHTML = 0;
  tableau = []
}

function displayPokemon(pokemonName) {
  const stylesheet = document.querySelector("#stylesheet");
  if (pokemonName === "") {
    stylesheet.setAttribute("href", "");
  } else {
    stylesheet.setAttribute("href", `src/pokemons/${pokemonName}.css`);
  }
}

function guessPokemon(nbCoups) {
  if (nbCoups == 0) {
    alert("voici votre score " + score + "/5");
    remiseAZero();
    return;
  }
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
  let randomPokemon;
  do {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    randomPokemon = pokemons[randomIndex];
  } while (tableau.includes(randomPokemon));

  tableau.push(randomPokemon);

  displayPokemon(randomPokemon);
  const boubacar = document.querySelector("#boubacar");
  boubacar.addEventListener("click", function checkResponse() {
    const bob = document.querySelector("#bob");
    console.log("response", bob);
    console.log("response value", bob.value);
    if (bob.value == randomPokemon) {
      score++;
      kirikou.innerHTML = score;
      guessPokemon(nbCoups - 1);
      boubacar.removeEventListener("click", checkResponse);
    } else {
      const pokemonName = document.querySelector("#pokemon-name");
      const blablacar = document.querySelector("#blablacar");
      const erreur = document.querySelector("#erreur");
      erreur.setAttribute("style", "display: block");
      pokemonName.innerHTML = randomPokemon;
      blablacar.setAttribute("style", "display: block");
      setTimeout(() => {
        erreur.setAttribute("style", "display: none");
        blablacar.setAttribute("style", "display: none");
        guessPokemon(nbCoups - 1);
        boubacar.removeEventListener("click", checkResponse);
      }, 1500);
    }
    bob.value = "";
  });
}

let tableau = [];
