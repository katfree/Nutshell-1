import chatSection from "./chats/chatsHTML";
import CreateChatDOM from "./chats/chatsToDOM";
import tasksPage from "./Tasks/task"

const mainPage = () => {

    // document.querySelector("#output").innerHTML += ""
    chatSection()
    CreateChatDOM()
    tasksPage()
}

export default mainPage