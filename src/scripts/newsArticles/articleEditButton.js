import newsArticleDataManager from "./newsArticleDataManager";




const articleEditFunction = () => {
    document.getElementById("newsArticleOutput").addEventListener("click", (article) => {
        if (article.target.id.startsWith("articleEditButton--")) {
            let articleID = article.target.id.split("--")[1]
            document.getElementById("hiddenID").value = articleID

            document.getElementById("submitNewArticle").textContent =
                "Re-Enter"

            newsArticleDataManager.getNewsArticles(articleID)
                .then(() => {


                })




            // export default articleEditFunction
