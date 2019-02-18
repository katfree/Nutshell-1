import eventDataManager from "./eventDataManager";
import eventListHTML from "./eventListHTML"
import getEventDataFunction from "./eventListForm";

const eventSaveFunction = () => {
    document.querySelector("#saveEvent").addEventListener("click", () => {
        let eventNameInput = document.querySelector("#eventName").value
        let eventDateInput = document.querySelector("#eventDate").value
        let eventLocationInput = document.querySelector("#eventLocation").value

        const eventObject = {
            event_name: eventNameInput,
            event_location: eventDateInput,
            event_date:eventLocationInput

        }
        if (eventNameInput === "" || eventDateInput === "" || eventLocationInput === "") {
            alert("Event form is not completed")
        } else {
            eventDataManager.postEventData(eventObject)
            .then(() => {
              getEventDataFunction()


            })
        }

    })
}
export default eventSaveFunction