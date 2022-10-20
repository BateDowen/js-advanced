function extractText() {
   let ulText = document.getElementById('items');
    console.log(ulText.textContent);
   let textArea = document.getElementById('result');
   textArea.textContent = ulText.textContent;

}