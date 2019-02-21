const APIManager = {
  grabTasks: function (userId) {
    return fetch(`http://localhost:3005/Tasks?userId=${userId}`)
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
  editTasks: (task, taskId) => {
    console.log(task)
    return fetch(`http://localhost:3005/Tasks/${taskId}`,
      {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      }
    )},
    getDataToEdit: function (id) {
      return fetch(`http://localhost:3005/Tasks/${id}`)
        .then(res => res.json())
    }
}
export default APIManager

