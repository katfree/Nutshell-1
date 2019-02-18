const eventDataManager = {
getEventData: function() {
    return fetch("http://localhost:3005/Events/")
    .then(res => res.json())

    },
postEventData: function(eventObject){
    return fetch("http://localhost:3005/Events/", {
        method: "POST",
        headers: {"Content-Type":"application/json"
    },
    body: JSON.stringify(eventObject)
    })
    .then(res => res.json())

   }
}
export default eventDataManager