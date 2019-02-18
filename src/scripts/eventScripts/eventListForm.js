import eventDataManager from "./eventDataManager"


const getEventDataFunction = () => {
    document.querySelector("#currentEvents").innerHTML = ""

    eventDataManager.getEventData().then((events) => {
        events.forEach(event => {
            let nameOfEvent = event.event_name
            let dateOfEvent = event.event_date
            let locationOfEvent = event.event_location

            const eventHtmlTemplate =
            `
            <div>
            Name of Event: ${nameOfEvent}
            Date of Event: ${dateOfEvent}
            Location of Event: ${locationOfEvent}
            </div>
            `
            document.querySelector("#currentEvents").innerHTML += eventHtmlTemplate

        })
    })
}
export default getEventDataFunction
