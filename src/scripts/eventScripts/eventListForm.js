import eventDataManager from "./eventDataManager"


const getEventDataFunction = () => {
    document.querySelector("#currentEvents").innerHTML = ""
        eventDataManager.getEventData().then((events) => {
        events.forEach(event => {

            let nameOfEvent = event.event_name
            let locationOfEvent = event.event_location
            let dateOfEvent = event.event_date

            let today = new Date()
            let dd = today.getDate()
            let mm = today.getMonth()+ 1;
            let yyyy = today.getFullYear()
            today = yyyy + "-" + mm + "-" + dd
            console.log(today)
            const eventHtmlTemplate =
            `
            <section id="${event.id}">
            <p>Name of Event: ${nameOfEvent}</p>
            <p>Date of Event: ${dateOfEvent}</p>
            <p>Location of Event: ${locationOfEvent}</p>
            <button id="editButton--${event.id}">Edit</button>
            <button id="deleteButton--${event.id}">Delete</button>
            <hr>
            </section>
            `
            document.querySelector("#currentEvents").innerHTML += eventHtmlTemplate

        })
    })
}
export default getEventDataFunction
