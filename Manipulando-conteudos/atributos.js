// Manipulando elementos 
// Atrigutos 

const header = document.querySelector('header')
header.serAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.setAttribute('class', 'gb header')

