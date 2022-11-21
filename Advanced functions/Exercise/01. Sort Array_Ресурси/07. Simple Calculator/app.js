function calculator() {

    let calculate = {
        init: () => {
             let selector1 = document.getElementById('num1');
             let selector2 = document.getElementById('num2');
             let resultSelector = document.getElementById('result');
            return {
                selector1,
                selector2,
                resultSelector,
            }
        },
        add: () => {
            let num1 = calculate.init().selector1.value;
            let num2 = calculate.init().selector2.value;
            let result = Number(num2) + Number(num1);
            calculate.init().resultSelector.value = result;

            
        },
        subtract: () =>{
            let num1 = calculate.init().selector1.value;
            let num2 = calculate.init().selector2.value;
            let result = Number(num2) - Number(num1);
            calculate.init().resultSelector.value = result;
        }

    }
    return calculate
}
const calculate = calculator()




