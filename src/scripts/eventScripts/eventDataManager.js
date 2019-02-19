const eventDataManager = {
getEventData: function() {
    return fetch("http://localhost:3005/Events/")
    .then(res => res.json())

    },
postEventData: function(eventObject){
    console.log("save")
    return fetch("http://localhost:3005/Events/", {
        method: "POST",
        headers: {"Content-Type":"application/json"
    },
    body: JSON.stringify(eventObject)
    })
    .then(res => res.json())

   },
   deleteEventData: (id) => {
    return fetch(`http://localhost:3005/Events/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
},

    editEventData: (Id, eventToChangeObject) => {
        console.log("edit", eventToChangeObject)
        console.log("e",`http://localhost:3005/Events/${Id}`)
    return fetch(`http://localhost:3005/Events/${Id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(eventToChangeObject)
    })
    },
    getEditEventData: function(id) {
        return fetch(`http://localhost:3005/Events/${id}`)
        .then(res => res.json())

        }
}
export default eventDataManager