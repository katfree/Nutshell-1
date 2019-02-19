import eventListenerFunctions from "./eventListEventListener";
import getEventDataFunction from "./eventListForm";

const eventListHTML = () => {
    document.querySelector("#output").innerHTML +=
    `
    <div id= "eventListForm">
    <h1>Event List<h1>

    <fieldset>
    <label>Name:</label>
    <input type="text" id="eventName"></input>
    </fieldset>

    <fieldset>
    <label>Date:</label>
    <input type="date" id="eventDate"></input>
    </fieldset>


    <fieldset>
    <label>Location:</label>
    <input type="text" id="eventLocation"></input>
    </fieldset>

    <button id="saveEvent">Save Event</button>
    <div id="currentEvents">Current Events </div>
    </div>
    `
eventListenerFunctions.eventSaveFunction()
getEventDataFunction()
eventListenerFunctions.eventDeleteFunction()
}
export default eventListHTML
