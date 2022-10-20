function subtract() {
    let firstNum = document.getElementById('firstNumber');
    let secNum = document.getElementById('secondNumber');
    let resullt = Number(firstNum.value) - Number(secNum.value);
    let result = document.getElementById('result');
    result.textContent = resullt
    // console.log(resullt);
}