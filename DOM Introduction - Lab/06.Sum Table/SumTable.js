function sumTable() {

    // let costElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let costElements = document.getElementsByTagName('td');

    let sum = Array.from(costElements).slice(1).reduce((acc,x) =>{
        let currentValue = Number(x.textContent) || 0;
        return acc + currentValue;

    }, 0);
    let resultEl = document.getElementById('sum');
    resultEl.textContent = sum;

}