function validate() {
    let inputField = document.getElementById('email');

    inputField.addEventListener('change', onChange);

    function onChange(event){
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

        if (pattern.test(event.target.value)) {
            event.target.classList.remove('error');

        } else {
            event.target.classList.add('error');

        }
    }
} 