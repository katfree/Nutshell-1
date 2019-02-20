import chatSection from "./chats/chatsHTML";
import CreateChatDOM from "./chats/chatsToDOM";
import eventListHTML from "./eventScripts/eventListHTML"

const mainPage = () => {

    document.querySelector("#output").innerHTML += ""
    eventListHTML()
    chatSection()
    CreateChatDOM()

}

export default mainPage