import ChatsDataManager from "./ChatsDataManager"
import CreateChatDOM from "./chatsToDOM";

const NewMessageEventListener = () => {
document.querySelector("#addNewmessagesButton").addEventListener("click", event => {
const message = document.querySelector("#inputNewMessage").value
function sessionStorageGetItem() {
    return {
        userId: sessionStorage.getItem('userId'),
        userName: sessionStorage.getItem('userName'),

    }
}
const localData = sessionStorageGetItem();
console.log(localData.userName)

const NewMessageObject = {
    message: message,
    "userName": localData.userName,
    "userId": localData.userId

}
const buttonText = document.querySelector("#addNewmessagesButton").textContent = "Add Message"
if(buttonText !== "Update")
{ChatsDataManager.postChatData(NewMessageObject)
    .then( () => ChatsDataManager.getChatData())
    .then(() => CreateChatDOM())
    .then(() => sessionStorage.setItem("message", message))



}








console.log("click")



})
}


export default NewMessageEventListener