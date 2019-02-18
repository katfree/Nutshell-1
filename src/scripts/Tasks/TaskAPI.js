const APIManager = {
  grabtheTasks: function () {
    return fetch("http://localhost:3005/Tasks/").then(response => response.json())
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
export default {APIManager}