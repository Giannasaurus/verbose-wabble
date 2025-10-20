async function getArticles() {
    const url = 'articles/articles.json'
    
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        
        const result = await response.json()
        displayArticles(result)
    }
    catch (error) {
        console.error(error.message)
    }
}

function displayArticles(result) {
    const articles = result.articles
    const articlesContainer = document.getElementById('articlesContainer')
    
    const content = articles.map(a => `
        <div class="article-card">
            ${a.title}
            ${a.date}
            ${a.body}
        </div>
    `).join('')
    articlesContainer.innerHTML = content
}

getArticles()