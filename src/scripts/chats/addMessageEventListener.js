import ChatsDataManager from "./ChatsDataManager"
import CreateChatDOM from "./chatsToDOM"

const NewMessageEventListener = () => {
    document.querySelector("#addNewmessagesButton").addEventListener("click", event => {
        const message = document.querySelector("#inputNewMessage").value


        const userId = sessionStorage.getItem("userId")

        const NewMessageObject = {
            message: message,
            userId: parseInt(userId),
            date: new Date()

        }
        const buttonText = document.querySelector("#addNewmessagesButton").textContent
        if (buttonText !== "Update") {
            ChatsDataManager.postChatData(NewMessageObject)
                .then(() => ChatsDataManager.getChatData())
                .then(() => CreateChatDOM())
                .then(() => sessionStorage.setItem("message", message))
        } else if (buttonText === "Update") {
            document.querySelector("#addNewmessagesButton").textContent = "Update"
            const messageId = document.getElementById("currentChatId").value
            ChatsDataManager.editChat(NewMessageObject, messageId)
                .then(() => ChatsDataManager.getChatData(messageId))
                .then(() => CreateChatDOM())
                .then(() => document.querySelector("#addNewmessagesButton").textContent = "Add Message")

        }








        console.log("click")



    })
}


export default NewMessageEventListener