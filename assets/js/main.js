const botaoAdvice = document.querySelector('.dice');
const adviceId = document.querySelector('#adviceId');
const adviceText = document.querySelector('#adviceText');


function adviceGenerator() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceId.textContent = data.slip.id;
        adviceText.textContent = data.slip.advice;
    })
}
window.onload = () => {
    adviceGenerator();
}


botaoAdvice.addEventListener('click', () => {
    adviceGenerator();
}
)