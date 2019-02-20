import registrationForm from "./registration";


const registrationEventListener = () => {
   document.querySelector("#welcomeButton").addEventListener("click",() => {
       registrationForm()
   } )
}

export default registrationEventListener