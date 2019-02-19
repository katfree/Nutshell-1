const APIManager = {
  grabTasks: function () {
    return fetch("http://localhost:3005/Tasks/")
    .then(res => res.json()).then(() => {
      console.log("hi")
    })
  } ,
  postTasks: function () {
    return fetch("http://localhost:3005/Tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
  }, deleteTasks: () => {
    return fetch ("http://localhost:3005/Tasks/")
  }
}
export {APIManager}