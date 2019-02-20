import registrationFormButton from "./submitRegistrationForm";


const registrationHTML = () => {
    document.querySelector("#output").innerHTML +=
        `
    <div id = "registartionForm">
    <h1>Registration Form<h1>

    <fieldset>
    <label>Username</label>
    <input type="text" id="inputUsername"></input>
    </fieldset>

    <fieldset>
    <label>Password</label>
    <input type="text" id="inputPassword"></input>
    </fieldset>


    <fieldset>
    <label>First Name</label>
    <input type="text" id="inputFirstName"></input>
    </fieldset>


    <fieldset>
    <label>Last Name</label>
    <input type="text" id="inputLastName"></input>
    </fieldset>


     <button id="formButton">Register</button>
</div>
    `
    registrationFormButton()
}


export default registrationHTML