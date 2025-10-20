async function getArticles() {
    const url = 'articles/articles.json'
    
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        
        const result = await response.json()
        // console.log(result)
        handleResult(result)
    }
    catch (error) {
        console.log(error.message)
    }
}

function handleResult(result) {
    const articles = result.articles
    console.log(articles)
    const titles = articles.map(article => article.title)
    console.log(titles)
    const bodies = articles.map(article => article.body)
    console.log(bodies)
    const articlesContainer = document.getElementById('articles-container')
    
    articles.forEach(article => {
        articlesContainer.innerHTML += `<p>${article.title}: ${article.body}</p>`
    })
    
    titles.forEach(title => {
        console.log(title)
    })
    
    bodies.forEach(body => {
        console.log(body)
    })
}

getArticles();