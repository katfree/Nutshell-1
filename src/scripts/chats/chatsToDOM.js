import messageHTML from "./messages";


const CreateChatDOM = () => {

    return fetch("http://localhost:3005/Chats/")
             .then(chats=> chats.json())
             .then(function(element) {
                 document.getElementById("allchats").innerHTML = ""
                 return element
             })
             .then(chatsArray => {
                 chatsArray.forEach(chat => {
                     const currentChatHTML = messageHTML(chat)
                     document.getElementById("allchats").innerHTML += currentChatHTML

                 });
             })

 }

 export default CreateChatDOM