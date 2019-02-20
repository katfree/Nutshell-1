import ChatsDataManager from "./ChatsDataManager";
import NewMessage from "./createMessageObject";
import CreateChatDOM from "./chatsToDOM";


const saveUpdatedChat = () => {

    document.querySelector("#addNewmessagesButton").addEventListener("click", (event) => {
        const buttonText = document.querySelector("#addNewmessagesButton").textContent


        const message = document.querySelector("#inputNewMessage").value


        const newChat = NewMessage(message)

        if (buttonText === "Update") {
            const messageId = document.getElementById("currentChatId").value
            ChatsDataManager.editChat( newChat, messageId )
            .then(ChatsDataManager.getChatData(messageId))
            .then(() => CreateChatDOM())

         }


    })
}

export default saveUpdatedChat