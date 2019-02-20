import chatSection from "./chats/chatsHTML";
import CreateChatDOM from "./chats/chatsToDOM";
import addNewsArticle from "./newsArticles/newsArticleToHTML";

const mainPage = () => {

    document.querySelector("#output").innerHTML += ""
    chatSection()
    CreateChatDOM()
    addNewsArticle()

}

export default mainPage