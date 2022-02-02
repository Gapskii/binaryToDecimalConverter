let validate = document.querySelector('input')

validate.addEventListener('keypress', function (event) {
  if (event.key != 0 && event.key != 1) {
    decimal.innerHTML = 'Enter a valid binary'
  }
})

function binaryToNumeral() {
  let binary = document.querySelector('input').value

  let result = parseInt(binary, 2)

  let decimal = document.getElementById('decimal')

  decimal.innerHTML = result

  decimal.style.color = '#b485e5'
}
