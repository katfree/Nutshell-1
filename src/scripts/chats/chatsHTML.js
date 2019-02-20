import NewMessageEventListener from "./addMessageEventListener";
import deleteMessage from "./chatsDeleteButton";
import editContact from "./chatsEditButton";
import saveUpdatedChat from "./saveEditedChat";
import CreateChatDOM from "./chatsToDOM";

const chatSection = () => {
document.querySelector("#output").innerHTML+= `
<div id = "chatSection">
<input type="hidden"  id="currentChatId" value="">
<h1> Chats </h1>
<p> *All chats are public. Please keep this in mind when posting.*</p>
<section id = "newMessageSection">
<fieldset>
<label>New Message</label>
    <input type="text" id="inputNewMessage"></input>
</fieldset>
<button id = "addNewmessagesButton">Add Message</button>
<button id = "EditMessageButton">Update Message</button>
</section>

<h2> Chat History </h2>
<div id = "allchats">
</div>



</div>
`



NewMessageEventListener()
deleteMessage.deleteMessages()
editContact()
saveUpdatedChat()
CreateChatDOM()







}

export default chatSection