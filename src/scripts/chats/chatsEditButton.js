import ChatsDataManager from "./ChatsDataManager";

const editContact = () => {
    document.querySelector("#allchats").addEventListener("click", (event) => {

        if (event.target.id.startsWith("chateditbutton-")) {


            const messageId = event.target.id.split("-")[1]
             document.getElementById("currentChatId").value = messageId


            document.querySelector("#addNewmessagesButton").textContent = "Update"

            ChatsDataManager.getChatData(messageId)
            .then(
                (message) => {
                    document.querySelector("#inputNewMessage").value = message.message


                }
            )
        }

    })
    }

    export default editContact