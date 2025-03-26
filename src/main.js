const button = document.querySelector('#select-button')
button.addEventListener('click', () => {
    const select = document.querySelector("#Pokemon-select")
    const stylesheet = document.querySelector("#stylesheet")
    stylesheet.setAttribute("href", `/src/${select.value}.css`)
})