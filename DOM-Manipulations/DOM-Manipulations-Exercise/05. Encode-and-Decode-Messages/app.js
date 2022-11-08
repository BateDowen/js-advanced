function encodeAndDecodeMessages() {
    let mainEl = document.getElementById('main');
    let encodeBtn = mainEl.childNodes[1].lastChild.previousSibling;
    let encodeArea = document.querySelector('#main div textarea')
    let decodeBtn = mainEl.childNodes[3].lastChild.previousSibling;
    let decodeArea = mainEl.childNodes[3].childNodes[3];

    encodeBtn.addEventListener('click', (e) => {
        let textToEncode = encodeArea.value;
        let codeMessage = []
        Array.from(textToEncode).forEach(el =>{
            let nextCharNum = el.charCodeAt() + 1;
            let nextChar = String.fromCharCode(nextCharNum);
            codeMessage.push(nextChar)
        })
        decodeArea.value = codeMessage.join('')
        encodeArea.value = '';
    });
    decodeBtn.addEventListener('click', (e) => {
        let textToDecode = decodeArea.value;
        let decodeMessage = [];
        Array.from(textToDecode).forEach(el => {
            let previousNum = el.charCodeAt() - 1;
            let char = String.fromCharCode(previousNum);
            decodeMessage.push(char);

        });
        decodeArea.value = decodeMessage.join('')
    })
    
}