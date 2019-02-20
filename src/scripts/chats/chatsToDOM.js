import messageHTML from "./messages";
// &_limit=11 ?_sort=id&_order=desc

const CreateChatDOM = () => {

    return fetch("http://localhost:3005/Chats/?_sort=id&_order=desc&_limit=10")
        .then(chats => chats.json())
        .then(function (allchats) {
            document.getElementById("allchats").innerHTML = ""
            return allchats
        })
        .then((allchats) => {
            allchats.forEach((chat) => {
                return fetch(`http://localhost:3005/Users/${chat.userId}`)
                    .then(res => res.json())
                    .then((user) => {

                        const currentChatHTML = messageHTML(chat, user)
                        document.getElementById("allchats").innerHTML += currentChatHTML
                    })
            })

        })


}

export default CreateChatDOM

