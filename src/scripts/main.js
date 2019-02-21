import welcomePage from "./welcomePage";
import registrationEventListener from "./registrationEventlistener";
import mainPage from "./mainPage";
import chatSection from "./chats/chatsHTML";
import CreateChatDOM from "./chats/chatsToDOM";
import addNewsArticle from "./newsArticles/newsArticleToHTML";
import tasksPage from "./Tasks/task";
import eventListHTML from "./eventScripts/eventListHTML";

const getfromsessionstorage = sessionStorage.getItem("userId")
console.log(getfromsessionstorage)
if (getfromsessionstorage) {

    mainPage()




} else {
    welcomePage()
    registrationEventListener()
}




