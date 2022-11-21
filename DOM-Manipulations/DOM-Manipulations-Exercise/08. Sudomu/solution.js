function solve() {
    let [quickCheckBtn, clearBtn] = document.querySelectorAll('button');

    quickCheckBtn.addEventListener('click', quickCheck);

    function quickCheck() {
        let firtsChildArr = [];

        let trElements = document.querySelectorAll('tbody tr')
        trElements.forEach(el=>{
            firtsChildArr.push(el.firstElementChild.firstElementChild);
        });
       
    }
}