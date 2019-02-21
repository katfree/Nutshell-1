import newsArticleDataManager from "./newsArticleDataManager";


const getTheNews = () => {
    document.getElementById("newsArticleOutput").innerHTML = ""

    newsArticleDataManager.getNewsArticles(userId)
        .then((articles) => {

            articles.forEach(article => {

                let articleHTMLObject =

                    `
            <section id="${article.id}">
            <h1>${article.title}</h1>
            <p>${article.synopsis}</p>
            <a href=${article.url}>${article.url}</a>
            <button id="articleDeleteButton--${article.id}">Delete</button>
            <button id="articleEditButton--${article.id}">Edit</button>
            </section>
            `

                console.log(articleHTMLObject)
                document.getElementById("newsArticleOutput").innerHTML += articleHTMLObject
            })
        })
}

export default getTheNews