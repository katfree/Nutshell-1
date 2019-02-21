import newsArticleDataManager from "./newsArticleDataManager";
import getTheNews from "./newsArticleObject";



const articleSaveButton = () => {
    document.getElementById("submitNewArticle").addEventListener("click", () => {
        console.log("pressed")
        const title = document.getElementById("titleOfNewsArticle").value
        const synopsis = document.getElementById("synopsisOfNewsArticle").value
        const url = document.getElementById("NewsArticleURL").value
        const date = Date.now()
        const inputArticle = {
            title: title,
            synopsis: synopsis,
            url: url,
            date: date
        }
        if (title === "" || synopsis === "" || url === "") {
            alert("Missing article information")

        } else {

            newsArticleDataManager.postNewsArticle(inputArticle)
                .then(() => {
                    newsArticleDataManager.getNewsArticles(userId)
                })
                .then(() => getTheNews()
                )

        }
    }
    )
}

export default articleSaveButton