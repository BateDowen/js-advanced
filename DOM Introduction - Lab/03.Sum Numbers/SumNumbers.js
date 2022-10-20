function calc() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let firstNum = Number(num1.value);
    let secNum = Number(num2.value);
    let sum =  firstNum + secNum;

    let result = document.getElementById('sum');
    
    result.value = sum;
    
}
