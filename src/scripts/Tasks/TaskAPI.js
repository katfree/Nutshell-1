const APIManager = {
  grabTasks: function () {
    return fetch("http://localhost:3005/Tasks/")
      .then(res => res.json())
  },
  postTasks: function (userObject) {
    return fetch("http://localhost:3005/Tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObject)
    })
  }, deleteTasks: (taskId) => {
    return fetch(`http://localhost:3005/Tasks/${taskId}`,
      {
        method: "DELETE"
      })
  },
  editTasks: (taskId, task) => {
    return fetch(`http://localhost:3005/Tasks/${taskId}`,
      {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      }
    )}
}
export default APIManager

