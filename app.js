const buttons = document.querySelectorAll('.btn')
const counter = document.querySelector('.counter')
const incrementBtn = document.querySelector('.increment')
const decrementBtn = document.querySelector('.decrement')

function click () {
    console.log('Вы нажали на кнопку');
}

function increment () {
    counter.innerHTML++
}

function decrement () {
    counter.innerHTML--
}

buttons.forEach(btn => btn.addEventListener('click', click))
incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)