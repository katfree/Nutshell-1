import chatSection from "./chats/chatsHTML";
import CreateChatDOM from "./chats/chatsToDOM";
import eventListHTML from "./eventScripts/eventListHTML"

const mainPage = () => {

    document.querySelector("#output").innerHTML += ""

    // document.querySelector("#output").innerHTML += ""
    chatSection()
    CreateChatDOM()
    tasksPage()
    eventListHTML()
}

export default mainPage