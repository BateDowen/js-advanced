function addItem() {
    let addButton = document.querySelector('input[value="Add"]');
    addButton.addEventListener('click', add);
    function add(){
    let menuItem = document.getElementById('menu')
    let textItem = document.getElementById('newItemText');
    let valueItem = document.getElementById('newItemValue');
    let optionEl = document.createElement('option');
    optionEl.value = valueItem.value
    optionEl.textContent = textItem.value;
    menuItem.appendChild(optionEl);
    textItem.value = '';
    valueItem .value= '';
    }

}