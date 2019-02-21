import welcomePage from "./welcomePage";
import registrationEventListener from "./registrationEventlistener";
import mainPage from "./mainPage";

const getfromsessionstorage = sessionStorage.getItem("userId")
console.log(getfromsessionstorage)
if (getfromsessionstorage) {

    mainPage()
} else {
    welcomePage()
    registrationEventListener()
}




