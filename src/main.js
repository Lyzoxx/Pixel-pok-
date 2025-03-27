const button = document.querySelector('#select-button')
button.addEventListener('click', selectPokemon)

const reset = document.querySelector('#reset')
reset.addEventListener('click', resetFunction)

function selectPokemon(){
    const select = document.querySelector("#Pokemon-select")
    const stylesheet = document.querySelector("#stylesheet")
    stylesheet.setAttribute("href", `src/${select.value}.css`)
}

function resetFunction(){
    const stylesheet = document.querySelector("#stylesheet")
    stylesheet.setAttribute("href", "")
}