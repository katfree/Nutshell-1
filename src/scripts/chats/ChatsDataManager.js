const ChatsDataManager = {
    postChatData: function (userObject) {
        console.log("post")
        return fetch("http://localhost:3005/Chats/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        })
            .then(res => res.json())

    },
    getChatData: function (messageId) {
        console.log("get")
        return fetch(`http://localhost:3005/Chats/${messageId}`)
            .then(res => res.json())

    },

    deleteChats: (messageId) => {
        return fetch(`http://localhost:3005/Chats/${messageId}`, {
            method: "DELETE"
        })

    },
    editChat: function (message, messageId) {
        return fetch(`http://localhost:3005/Chats/${messageId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        }
        )
            .then(res => res.json())

    },

}


export default ChatsDataManager