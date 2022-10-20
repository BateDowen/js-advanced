function extract(content) {
    let text = document.getElementById(content);
    let extractedWords = [];
    let pattern = /\(([A-Za-z\s*]+)\)/g;
    
    let matches = text.textContent.matchAll(pattern);
    for(let  match of matches){
    extractedWords.push(match[1])

    }
    return extractedWords.join('; ');
    
}