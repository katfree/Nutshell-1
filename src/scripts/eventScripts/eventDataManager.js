const eventDataManager = {
getEventData: function() {
    return fetch("http://localhost:3005/Events?_sort=event_date&_order=asc")
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