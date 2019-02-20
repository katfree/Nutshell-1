import eventDataManager from "./eventDataManager";
import getEventDataFunction from "./eventListForm";

const eventListenerFunctions = {
    eventSaveFunction: () => {
        document.getElementById("saveEvent").addEventListener("click", (event) => {
            if (event.target.id === "saveEvent") {

                let eventNameInput = document.querySelector("#eventName").value
                let eventDateInput = document.querySelector("#eventDate").value
                let eventLocationInput = document.querySelector("#eventLocation").value

                const eventObject = {
                    event_name: eventNameInput,
                    event_date: eventDateInput,
                    event_location: eventLocationInput
                }
                if (eventNameInput === "" || eventDateInput === "" || eventLocationInput === "") {
                    alert("Event form is not completed")
                } else {
                    eventDataManager.postEventData(eventObject)
                        .then(() => {
                            getEventDataFunction()
                        })
                }
            }
        })
    },
    eventDeleteFunction: () => {
        document.getElementById("currentEvents").addEventListener("click", (event) => {
            if (event.target.id.startsWith("deleteButton--")) {
                let deleteId = event.target.id.split("--")[1]
                eventDataManager.deleteEventData(deleteId).then(() => {
                    document.getElementById("currentEvents").innerHTML = ""
                    getEventDataFunction()
                })
            } else if (event.target.id.startsWith("editButton--")) {
                let editId = event.target.id.split("--")[1]
                eventDataManager.getEditEventData(editId).then(event => {
                    console.log(event)
                    document.querySelector("#eventName").value = event.event_name
                    document.querySelector("#eventDate").value = event.event_date
                    document.querySelector("#eventLocation").value = event.event_location

                    document.getElementById("saveEvent").id = "editEventSaveButton"
                    document.getElementById("editEventSaveButton").textContent = "Save Changes"

                    document.getElementById("editEventSaveButton").addEventListener("click", () => {
                        let nameOfEvent = document.querySelector("#eventName").value
                        let dateOfEvent = document.querySelector("#eventDate").value
                        let locationOfEvent = document.querySelector("#eventLocation").value

                        let editedObject = {
                            event_name: nameOfEvent,
                            event_date: dateOfEvent,
                            event_location: locationOfEvent
                        }

                        eventDataManager.editEventData(editId, editedObject).then(() => {
                        getEventDataFunction()
                        })

                    })
                })
            }
        })
    }
}
export default eventListenerFunctions



