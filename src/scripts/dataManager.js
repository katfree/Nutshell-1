const dataManager = {
   getData: function() {
   return fetch("http://localhost:3005/Users/")
   .then(res => res.json())

},
   postUserData: function(userObject){
    return fetch("http://localhost:3005/Users/", {
        method: "POST",
        headers: {"Content-Type":"application/json"
    },
    body: JSON.stringify(userObject)
    })
    .then(res => res.json())

   }
}

export default dataManager