// Evenetos 
// argumentp event

const input = document.querySelector('input')

input.onkeypress = function (event) {
  console.log(event.key)
}