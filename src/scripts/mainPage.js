import chatSection from "./chats/chatsHTML";
import CreateChatDOM from "./chats/chatsToDOM";
<<<<<<< HEAD
import eventListHTML from "./eventScripts/eventListHTML"

const mainPage = () => {

    document.querySelector("#output").innerHTML += ""
    eventListHTML()
=======
import tasksPage from "./Tasks/task"

const mainPage = () => {

    // document.querySelector("#output").innerHTML += ""
>>>>>>> master
    chatSection()
    CreateChatDOM()
    tasksPage()
}

export default mainPage