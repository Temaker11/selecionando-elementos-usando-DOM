// adicionando elementos
const div = document.createElement('div'); 
div.innerText = "Olá Devs!"

// insertBefore 

const body = document.querySelector('body')
const header = document.querySelector('header')
body.insertBefore(div, header.nextSibling)