function lockedProfile() {
    let showMoreBtn = document.getElementsByTagName('button');

        Array.from(showMoreBtn).forEach((el) => {
            el.addEventListener('click', (e) =>{
                let hiddenDiv = e.target.previousElementSibling;
                let text = e.currentTarget.textContent;
                let inputUnlockEl = e.currentTarget.parentNode.children[4];
                if (inputUnlockEl.checked) {
                    
                    if (text === 'Show more'){
                    hiddenDiv.style.display = 'inline-block';
                    el.textContent = 'Hide it';
                        
                    } else if(text === 'Hide it') {
                        hiddenDiv.style.display = 'none';
                        el.textContent = 'Show more';
    
                    }
                }
            })
                
        })
        
    
}