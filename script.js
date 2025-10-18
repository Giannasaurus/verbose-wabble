async function getArticles() {
    const url = 'articles/articles.json'
    
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        
        const result = await response.json()
        console.log(result)
        handleResult(result)
    }
    catch (error) {
        console.log(error.message)
    }
}

function handleResult(result) {
    const articles = result.articles
    const articlesContainer = document.getElementById('articles-container')
    
    articles.forEach(article => { 
        articlesContainer.innerHTML += `<p>${article}</p>`
    })
}

getArticles();