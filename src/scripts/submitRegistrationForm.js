import dataManager from "./dataManager"
import chatSection from "./chats/chatsHTML";
import CreateChatDOM from "./chats/chatsToDOM";


const registrationFormButton = () => {
    document.querySelector("#formButton").addEventListener("click", () => {
        const userName = document.querySelector("#inputUsername").value
        const password = document.querySelector("#inputPassword").value
        const first_name = document.querySelector("#inputFirstName").value
        const last_name = document.querySelector("#inputLastName").value

        const inputUserObject = {
            userName: userName,
            password: password,
            first_name: first_name,
            last_name: last_name,

        }
        dataManager.getData()
            .then((userList => {
                const search = userList.filter(user => user.userName === inputUserObject.userName )
                console.log(search)
                if (search.length) {
                    alert("This user name is taken")

                } else {
                    dataManager.postUserData(inputUserObject)
                    .then((response) => {
                    sessionStorage.setItem("userId", response.id)
                    sessionStorage.getItem(response.id)
                    })
                     .then( () => sessionStorage.setItem("userName", userName))
                     .then( () => sessionStorage.getItem(userName))
                     .then(() => sessionStorage.setItem("firstName", first_name))
                     .then(() => sessionStorage.getItem(first_name))
                     .then(() => sessionStorage.setItem("lastName", last_name))
                     .then(() => sessionStorage.getItem(last_name))
                     .then( () => document.querySelector("#registartionForm").remove())
                     .then( () => chatSection())
                     .then ( () => CreateChatDOM())

                }


            })


            )
            console.log(dataManager)
    })
}

export default registrationFormButton