import getTheNews from "./newsArticleObject";
import newsArticleDataManager from "./newsArticleDataManager";



const saveNewArticle = () => {

    document.querySelector("#submitNewArticle").addEventListener("click", (article) => {
        const newButtonName = document.querySelector("#submitNewArticle").textContent
        const newArticle = document.querySelector("#newsArticleOutput")
        const editedArticle = getTheNews(newArticle)

        if (newButtonName === "Re-Enter") {
           const articleID = document.querySelector("#hiddenID").value
            console.log(articleID)
            newsArticleDataManager.editNewsArticle(editedArticle, articleID)
                .then(newsArticleDataManager.getNewsArticles(articleID))
                .then(() => getTheNews)
        }
    })
}

export default saveNewArticle