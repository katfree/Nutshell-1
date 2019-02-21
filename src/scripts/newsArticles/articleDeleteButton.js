import newsArticleDataManager from "./newsArticleDataManager";
import getTheNews from "./newsArticleObject";



const deleteFunction = () => {
    document.getElementById("newsArticleOutput").addEventListener("click", (article) => {
        if (article.target.id.startsWith("articleDeleteButton--")) {
            let articleID = article.target.id.split("--")[1]
            newsArticleDataManager.deleteNewsArticles(articleID).then(() => {

                document.getElementById("newsArticleOutput").innerHTML = ""
                getTheNews()
            })

        }
        console.log("clicked")
    })
}


export default deleteFunction