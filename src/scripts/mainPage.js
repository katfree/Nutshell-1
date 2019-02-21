import chatSection from "./chats/chatsHTML";
import CreateChatDOM from "./chats/chatsToDOM";
<<<<<<< HEAD
import addNewsArticle from "./newsArticles/newsArticleToHTML";
=======
import tasksPage from "./Tasks/task"
>>>>>>> master

const mainPage = () => {

    // document.querySelector("#output").innerHTML += ""
    chatSection()
    addNewsArticle()
    CreateChatDOM()
    tasksPage()
}

export default mainPage