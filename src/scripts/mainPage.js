import chatSection from "./chats/chatsHTML";
import CreateChatDOM from "./chats/chatsToDOM";

const mainPage = () => {

    document.querySelector("#output").innerHTML += ""
    chatSection()
    CreateChatDOM()

}

export default mainPage