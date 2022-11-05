function addItem() {
    let items = document.getElementById('items');
    let textToAdd = document.getElementById('newItemText').value;
   
    let li = items.appendChild(document.createElement('li'));
    li.textContent = textToAdd;
    
    
}