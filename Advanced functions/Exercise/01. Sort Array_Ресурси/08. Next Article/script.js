function getArticleGenerator(articles) {

    let arr = articles;
    return function () {
        let div = document.getElementById('content');
        let article = document.createElement('article');
        
        if (arr.length > 0) {
            let firstArrElement = arr.shift();
            
            div.appendChild(article);
            article.textContent += firstArrElement
        }
    }
}
