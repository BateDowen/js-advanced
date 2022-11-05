function deleteByEmail() {
    let box = document.querySelector('input[name="email"]')
    let emails = document.querySelectorAll('tr td:nth-of-type(2)');
    let res = document.getElementById('result');
    let arrayFromEmails = Array.from(emails);
    let targetEl = arrayFromEmails.find(el=> el.textContent == box.value);
    if (targetEl) {
        targetEl.parentNode.remove();
        res.textContent = 'Deleted'
    } else {
        res.textContent = 'Not found'
    }
}