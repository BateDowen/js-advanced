window.addEventListener("load", solve);

function solve() {
  let arrOfInfo = []
  let makeField = document.getElementById('make');
  arrOfInfo.push(makeField)
  let modelField = document.getElementById('model');
  arrOfInfo.push(modelField)
  let yearField = document.getElementById('year');
  arrOfInfo.push(yearField)
  let fuelField = document.getElementById('fuel');
  arrOfInfo.push(fuelField)
  let originalCostField = document.getElementById('original-cost');
  arrOfInfo.push(originalCostField)
  let sellingPriceField = document.getElementById('selling-price');
  arrOfInfo.push(sellingPriceField)
  let publishBtn = document.getElementById('publish');
  let tbody = document.getElementById('table-body');
  let totalProfit = 0;

  publishBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (makeField.value && modelField.value && yearField.value && fuelField.value &&
        originalCostField.value && sellingPriceField.value && Number(originalCostField.value) <= Number(sellingPriceField.value)) {
        
        let tBodyInfo = {
          makeField: makeField.value,
          modelField: modelField.value,
          yearField: yearField.value,
          fuelField: fuelField.value,
          costField: originalCostField.value,
          sellField: sellingPriceField.value,
        };
        let tr = document.createElement('tr');
        tr.classList = 'row';
        for(let field in tBodyInfo){
          let td = document.createElement('td');
          td.innerText = tBodyInfo[field];
          tr.appendChild(td);
          
        };
        let editBtn = document.createElement('button')
        editBtn.classList = 'action-btn edit';
        editBtn.innerText = 'Edit';
        let sellBtn = document.createElement('button')
        sellBtn.classList = 'action-btn sell';
        sellBtn.innerText = 'Sell';

        tr.appendChild(editBtn);
        tr.appendChild(sellBtn)
        tbody.appendChild(tr);

        makeField.value = '';
        modelField.value = '';
        yearField.value = '';
        fuelField.value = '';
        originalCostField.value = '';
        sellingPriceField.value = '';
        
        editBtn.addEventListener('click', function () {
          makeField.value = tBodyInfo.makeField;
          modelField.value = tBodyInfo.modelField;
          yearField.value = tBodyInfo.yearField;
          fuelField.value = tBodyInfo.fuelField;
          originalCostField.value = tBodyInfo.costField;
          sellingPriceField.value = tBodyInfo.sellField;
          tr.remove()
        });

        sellBtn.addEventListener('click', function () {
          let ul = document.getElementById('cars-list');
          let li = document.createElement('li');
          li.classList = 'each-list';
          let makeModelSpan = document.createElement('span');
          makeModelSpan.innerText = `${tBodyInfo.makeField} ${tBodyInfo.modelField}`;
          let yearlSpan = document.createElement('span');
          yearlSpan.innerText = tBodyInfo.yearField;
          let differenceSpan = document.createElement('span');
          let oneCarProfit =  Number(tBodyInfo.sellField) - Number(tBodyInfo.costField);
          differenceSpan.innerText = oneCarProfit;
          totalProfit += oneCarProfit
          li.appendChild(makeModelSpan);
          li.appendChild(yearlSpan);
          li.appendChild(differenceSpan);
          ul.appendChild(li);
          tr.remove()
          let profit = document.getElementById('profit');
          profit.innerText = totalProfit;

        });

    }
  });
}
