import dataManager from "./dataManager"
import mainPage from "./mainPage";
import CreateChatDOM from "./chats/chatsToDOM";
import addNewsArticle from "./newsArticles/newsArticleToHTML";
import tasksPage from "./Tasks/task";
import eventListHTML from "./eventScripts/eventListHTML";
import chatSection from "./chats/chatsHTML";


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

        sessionStorage.setItem(inputUserObject, JSON.stringify(inputUserObject))

        let sesh = JSON.parse(sessionStorage.getItem("inputUserObject"))

        // console.log(sesh)

        dataManager.getData()
            .then((userList => {
                const search = userList.filter(user => user.userName === inputUserObject.userName)
                console.log(search)
                if (search.length) {
                    alert("This user name is taken")

                } else {
                    dataManager.postUserData(inputUserObject)
                        .then((response) => {
                            sessionStorage.setItem("userId", response.id)
                            sessionStorage.getItem(response.id)
                        })

                        .then(() => document.querySelector("#registartionForm").remove())
                        chatSection()
                        CreateChatDOM()
                        addNewsArticle()
                        eventListHTML()
                        tasksPage()



                }
            })

            )
        console.log(dataManager)
    })
}

export default registrationFormButton