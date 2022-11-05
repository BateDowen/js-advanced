function validate() {
    let pattern = /[a-z]+@[a-z]+.[a-z]+/g;
    let inputField = document.getElementById('email');
    
    inputField.addEventListener('change', function(e){
        if (!pattern.test(inputField.value)) {
            inputField.setAttribute('class','error')
        } else {
            inputField.removeAttribute('class', 'error');
        

        }
    })
    
}