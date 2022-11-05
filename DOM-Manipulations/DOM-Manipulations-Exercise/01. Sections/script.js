function create(words) {
   let divContentEl = document.getElementById('content');
   
   for(let word of words){
     let divEll = document.createElement('div');
     let pEl = document.createElement('p');
     divEll.appendChild(pEl);
     divEll.addEventListener('click', (e)=>{
      e.currentTarget.style.display = 'initial'
      e.currentTarget.textContent = word

     })
     divContentEl.appendChild(divEll);

   }
   
}