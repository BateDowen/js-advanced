function attachGradientEvents() {
let gradientEl = document.getElementById('gradient');
let resultElement = document.getElementById('result');

const gradientMouseHandler = (e) => {
let percent = Math.floor(e.offsetX / e.target.offsetWidth * 100);
resultElement.textContent = `${percent}%`;

}
const gradientMouseOut = (e) => {
    document.getElementById('result').textContent = '';

}
gradientEl.addEventListener('mousemove', gradientMouseHandler)
gradientEl.addEventListener('mouseout',gradientMouseOut);

}