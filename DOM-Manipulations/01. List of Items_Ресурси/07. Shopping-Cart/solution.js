function solve() {
   let outputField = document.getElementsByTagName('textarea');
   console.log(outputField[0].textContent);
   let addButtons = document.getElementsByClassName('add-product');
   let addButtonsArr = Array.from(addButtons)
   let checkoutButton = document.getElementsByClassName('checkout');
   let arrOfProducts = [];
   let total = 0;

   for(let button of addButtonsArr){
      let nameOfProduct = button.parentElement.previousElementSibling.getElementsByClassName('product-title');
      let price = button.parentElement.nextElementSibling;

      let event = button.addEventListener('click', (e) =>{
         outputField[0].textContent += `Added ${nameOfProduct[0].textContent} for ${price.textContent} to the cart.\n`
         if (!arrOfProducts.includes(nameOfProduct[0].textContent)) {
            arrOfProducts.push(nameOfProduct[0].textContent);
         };
         button.setAttribute('disabled', true)
         
      });
      
      total += Number(price.textContent);

   }
   checkoutButton[0].addEventListener('click', (e) => {
      outputField[0].textContent += `You bought ${arrOfProducts.join(', ')} for ${total.toFixed(2)}.`;
      checkoutButton[0].setAttribute('disabled', true)
   });
  
   
}