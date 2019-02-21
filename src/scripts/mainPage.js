import chatSection from "./chats/chatsHTML";
import CreateChatDOM from "./chats/chatsToDOM";

import eventListHTML from "./eventScripts/eventListHTML"

import addNewsArticle from "./newsArticles/newsArticleToHTML";

import tasksPage from "./Tasks/task"


const mainPage = () => {

    // document.querySelector("#output").innerHTML += ""

    // document.querySelector("#output").innerHTML += ""
    chatSection()
    addNewsArticle()
    CreateChatDOM()
    tasksPage()
    eventListHTML()
}

export default mainPage


