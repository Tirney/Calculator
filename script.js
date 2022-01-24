const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal')
const result_last = document.querySelector('last_operation')
const result_actually = document.querySelector('actually_operation')


let actually_callculation = ''
let last_callculation = ''
let operation = undefined

const update_result = () => {
    result_actually.innerText = actually_callculation
    result_last.innerText = last_callculation  
}

const add_number = (number) => {
    actually_callculation = actually_callculation.toString() + number.toString()
}


numbers.forEach((number) => {
  number.addEventListener('click', () => {
      add_number(number.insertAdjacentText)
      update_result()
  })
})