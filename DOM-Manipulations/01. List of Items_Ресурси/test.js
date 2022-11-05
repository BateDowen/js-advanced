function solve() {
    let num = document.getElementById('num');
    console.log(num);
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');

    plus.addEventListener('click', (e) => {
       num.textContent = Number(num.textContent) + 1;
       if (Number(num.textContent) > 10) {
        e.currentTarget.setAttribute('disabled', true)      
       }
    })
    minus.addEventListener('click', (e) => {
       num.textContent = Number(num.textContent) - 1
    })
    
}