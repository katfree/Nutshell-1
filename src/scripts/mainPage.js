import chatSection from "./chats/chatsHTML";
import CreateChatDOM from "./chats/chatsToDOM";
import addNewsArticle from "./newsArticles/newsArticleToHTML";
import tasksPage from "./Tasks/task"
import eventListHTML from "./eventScripts/eventListHTML"
const mainPage = () => {

    // document.querySelector("#output").innerHTML += ""
    chatSection()
    addNewsArticle()
    CreateChatDOM()
    eventListHTML()
    tasksPage()
}

export default mainPage