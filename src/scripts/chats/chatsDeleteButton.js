import ChatsDataManager from "./ChatsDataManager";
import CreateChatDOM from "./chatsToDOM";

const deleteMessage = {
    deleteMessages: function () {
        document.querySelector("#allchats").addEventListener('click', event => {
            console.log("delete")
             if (event.target.id.startsWith("chatdeletebutton-")) {
                 const messageId = event.target.id.split("-")[1]


                 ChatsDataManager.deleteChats(messageId).then(
                     CreateChatDOM
                 )

             }

        })
    }
}

export default deleteMessage

