function solve() {
  let generateBtn = document.querySelector('div[id="exercise"]').childNodes[5];
  let buyBtn = document.querySelector('div[id="exercise"]').children[5];
  let itemToAdd = document.querySelector('div[id="exercise"]').children[1];
  let tableBody = document.querySelector('tbody')

  function add() {
    Array.from(JSON.parse(itemToAdd.value)).forEach(el =>{

    let itemText = el;
    let tr = document.createElement('tr');
    let tdImg = document.createElement('td');
    let img = document.createElement('img');
    img.src = itemText.img
    tdImg.append(img);
    tr.append(tdImg);

    let tdName = document.createElement('td');
    let name =  itemText.name;
    tdName.append(name);
    tr.append(tdName);

    let tdPrice = document.createElement('td');
    let price = itemText.price;
    tdPrice.append(price);
    tr.append(tdPrice);

    let tdDecFactor = document.createElement('td');
    let decFactor = itemText.decFactor;
    tdDecFactor.append(decFactor);
    tr.append(tdDecFactor);

    let mark = document.createElement('input');
    mark.type = 'checkbox';
    let tdMark = document.createElement('td')
    tdMark.append(mark)
    tr.append(tdMark)
    tableBody.append(tr);
    
    el.value = '';
  })

  }
  generateBtn.addEventListener('click',add)
  
  function collect() {
    let checkboxes = tableBody.querySelectorAll('input[type="checkbox"]');
   
    let names = [];
    let totalPrice = 0;
    let averageDecFactor = 0

    for(let box of checkboxes){
      if (box.checked) {
        let name = box.parentElement.parentElement.children[1];
        names.push(name.textContent);

        let price = box.parentElement.parentElement.children[2];
        totalPrice += Number(price.textContent);

        let averageDec = box.parentElement.parentElement.children[3];
        averageDecFactor += Number(averageDec.textContent)
      }
    }
    console.log(names);
    let textArea = buyBtn.previousElementSibling;
    textArea.value += `Bought furniture: ${names.join(', ')}\n`;
    textArea.value += `Total price: ${totalPrice}\n`;
    textArea.value += `Average decoration factor: ${averageDecFactor/names.length}`
  }
  buyBtn.addEventListener('click',collect)

}