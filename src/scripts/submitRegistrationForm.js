import dataManager from "./dataManager"
import mainPage from "./mainPage";


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
                        .then(() => mainPage())


                }
            })

            )
        console.log(dataManager)
    })
}

export default registrationFormButton