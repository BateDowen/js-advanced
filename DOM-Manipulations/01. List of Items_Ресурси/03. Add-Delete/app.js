function addItem() {
    let itemsEl = document.getElementById('items');
    let inputEl = document.getElementById('newItemText');

    let liEl = document.createElement('li');
    liEl.textContent = inputEl.value;
    inputEl.value = '';
    
    let deleteEl = document.createElement('a');
    deleteEl.href = '#';
    deleteEl.textContent = '[Delete]';

    deleteEl.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove()
    })

    liEl.appendChild(deleteEl);
    itemsEl.appendChild(liEl)
}