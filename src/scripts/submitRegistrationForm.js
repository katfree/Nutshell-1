import dataManager from "./dataManager"

const registrationFormButton = () => {
    document.querySelector("#formButton").addEventListener("click", () => {
        const userName = document.querySelector("#inputUsername").value
        const password = document.querySelector("#inputPassword").value
        const first_name = document.querySelector("#inputFirstName").value
        const last_name = document.querySelector("#inputLastName").value
        const email = document.querySelector("#inputEmail").value
            console.log(userName)
        const inputUserObject = {
            userName: userName,
            password: password,
            first_name: first_name,
            last_name: last_name,
            email: email
        }
        dataManager.getData()
        .then((userList => {
            userList.forEach((user) => {
                if (user.userName === inputUserObject.userName) {
                    alert("this user already exists")
                } else {

                    dataManager.postUserData(inputUserObject)
                }

            })
        })
        )
    })
}

export default registrationFormButton