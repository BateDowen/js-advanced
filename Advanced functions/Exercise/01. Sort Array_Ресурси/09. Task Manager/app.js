function solve() {
   

    let taskField = document.getElementById('task');
    let descriptionField = document.getElementById('description');
    let dateField = document.getElementById('date');
    let addButton = document.getElementById('add');
    let openSection = document.querySelector('.orange').parentElement.nextElementSibling;
    let inProgresSec = document.querySelector('.yellow').parentElement.nextElementSibling;
    let complete = document.querySelector('.green').parentElement.nextElementSibling;
    
    addButton.addEventListener('click', createTask,);

    function createTask(event) {
        event.preventDefault()
        if (taskField.value && descriptionField.value && dateField.value) {
            let articleEl = document.createElement('article');

            let h3El = document.createElement('h3');
            h3El.textContent = taskField.value
            articleEl.appendChild(h3El);

            let pDescripEl = document.createElement('p');
            pDescripEl.innerText = 'Description: ';
            pDescripEl.innerText += descriptionField.value ;
            articleEl.appendChild(pDescripEl);

            let pDateEl = document.createElement('p');
            pDateEl.innerText = 'Due Date: '
            pDateEl.innerText += dateField.value
            articleEl.appendChild(pDateEl);

            let divEl = document.createElement('div');
            divEl.className = 'flex';

            taskField.value = '';
            descriptionField.value = '';
            dateField.value = '';

            let startBtn = document.createElement('button');
            startBtn.className = 'green';
            startBtn.innerText = 'Start';

            let deleteBtn = document.createElement('button');
            deleteBtn.className = 'red';
            deleteBtn.innerText = 'Delete';

            divEl.appendChild(startBtn);
            divEl.appendChild(deleteBtn);

            articleEl.appendChild(divEl)
            openSection.appendChild(articleEl);
            deleteBtn.addEventListener('click', ((e)=>{
                articleEl.remove()
            }));

            startBtn.addEventListener('click', ((ev)=>{
                inProgresSec.appendChild(articleEl)
                let finishBtn = document.createElement('button');
                finishBtn.className = 'orange';
                finishBtn.innerText = 'Finish';
                divEl.appendChild(finishBtn);
                divEl.removeChild(startBtn);
                
                finishBtn.addEventListener('click', ((e)=>{
                    complete.appendChild(articleEl);
                    divEl.remove(deleteBtn);
                    divEl.remove(finishBtn);
                    
                }))
            }));
        }
    }
    
}