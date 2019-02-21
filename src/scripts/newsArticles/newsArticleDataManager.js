const newsArticleDataManager = {
    getNewsArticles: function (userId) {
        return fetch(`http://localhost:3005/NewsArticles/?_sort=date&_order=asc/${userId}`)
            .then(res => res.json())

    },

    postNewsArticle: function (userNewsArticles) {
        return fetch("http://localhost:3005/NewsArticles/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(userNewsArticles)
        })
            .then(res => res.json())

    },

    deleteNewsArticles: function (articleID) {
        return fetch(`http://localhost:3005/NewsArticles/${articleID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    },

    editNewsArticle: function (editedArticle ,articleID) {
        return fetch(`http://localhost:3005/NewsArticles/${articleID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedArticle)
        })
    }
}

export default newsArticleDataManager