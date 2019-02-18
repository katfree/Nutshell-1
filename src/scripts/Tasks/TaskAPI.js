const APIManager = {
  grabTasks: function () {
    return fetch("http://localhost:3005/Tasks/")
    .then(res => res.json)
  },
  postTasks: function () {
    return fetch("http://localhost:3005/Tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(indivOrderObj)
    })
  }, deleteTasks: () => {
    return fetch ("http://localhost:3005/Tasks/")
  }
}
export {APIManager}