const messageHTML = (message, localdata) => {
    return `
    <section id = "${message.id}">
    <p> User Name: ${message.userName}
    <p> Message: ${message.message}</p>

<button id ="chateditbutton-${message.id}">Edit Message</button>

<button id = "chatdeletebutton-${message.id}">Delete Message</button>
`

}


export default messageHTML

