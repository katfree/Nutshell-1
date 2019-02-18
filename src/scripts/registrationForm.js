import registrationFormButton from "./submitRegistrationForm";

const registrationHTML = () => {
    document.querySelector("#output").innerHTML +=
    `
    <h1>Registration Form<h1>
    <div>
    <fieldset>
    <label>Username</label>
    <input type="text" id="inputUsername"></input>
    </fieldset>

    <fieldset>
    <label>Password</label>
    <input type="text" id="inputPassword"></input>
    </fieldset>
    </div>

    <fieldset>
    <label>First Name</label>
    <input type="text" id="inputFirstName"></input>
    </fieldset>
    </div>

    <fieldset>
    <label>Last Name</label>
    <input type="text" id="inputLastName"></input>
    </fieldset>
    </div>

     <button id="formButton">Register</button>
    `
    registrationFormButton()
}


export default registrationHTML