function solve() {
    let nameField = document.getElementById('container').children[0];
    let hallField = document.getElementById('container').children[1];
    let ticketPriceField = document.getElementById('container').children[2];
    let movieSection = document.getElementById('movies').children[1];
    let onScreenBtn = document.getElementById('container').children[3];
    let archiveSec = document.getElementById('archive').children[1]

    onScreenBtn.addEventListener('click', ((event)=>{
        event.preventDefault()
        if (nameField.value && hallField.value && Number(ticketPriceField.value)) {
            let liItem = createItem(nameField.value,hallField.value,ticketPriceField.value);
            movieSection.appendChild(liItem);
            nameField.value = ''
            hallField.value = ''
            ticketPriceField.value = '';
            let buttonAr = liItem.children[2].children[2];

            buttonAr.addEventListener('click', ((e)=>{
                let inputField = liItem.children[2].children[0];
                console.log(inputField.textContent);
                if (Number(inputField.textContent)) {
                    let li = document.createElement('li');
                    let span = document.createElement('span');
                    let strong = document.createElement('strong');
                    let delBtn = document.createElement('button');
                    delBtn.innerText = 'Delete'
                    span.innerText = liItem.children[0].textContent;

                    let ticketPrice = liItem.children[2].children[1];
                    if (Number(ticketPrice.value)) {
                        let res = Number(inputField.textContent) * Number(ticketPrice.value);
                        strong.innerText = `Total amount: ${res.toFixed(2)}`
                        li.appendChild(span);
                        li.appendChild(strong);
                        li.appendChild(delBtn);
                        archiveSec.appendChild(li);
                    }
                    ticketPrice.value = '';
                    delBtn.addEventListener('click',(()=>{
                        li.remove()
                    }))
                }
            })); 
        }
    }))
    let clearBtn = document.getElementById('archive').children[2];
    clearBtn.addEventListener('click',(()=>{
        archiveSec.remove()
    }))
    function createItem(movieName,hallName,ticketPrice) {

        let li = document.createElement('li');
        let span = document.createElement('span');
        let strong  = document.createElement('strong');
        span.innerText = movieName;
        strong.innerText = `Hall: ${hallName}`;
        let div = document.createElement('div');
        let strongDiv = document.createElement('strong');
        strongDiv.innerText = Number(ticketPrice).toFixed(2);
        let input = document.createElement('input');
        input.placeholder = 'Tickets Sold';
        let buttonArc = document.createElement('button');
        buttonArc.innerText = 'Archive';
        div.appendChild(strongDiv);
        div.appendChild(input);
        div.appendChild(buttonArc);

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div)
        

        return li
    }
    

}