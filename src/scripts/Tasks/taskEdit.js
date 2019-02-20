import APIManager from "./TaskAPI";
import HTMLrep from "./taskForEach"
import editFunction from "./editFunction"


const taskEdit = () => {
  document.querySelector("#taskTotal").addEventListener("click", (event) => {
    if (event.target.id.startsWith("TaskEditBTN--")) {
      const taskId = event.target.id.split("--")[1]

console.log('taskEdit')

      document.querySelector("#hiddenId").value = taskId

     document.querySelector("#EnterTask").textContent =
     "edit"

    APIManager.grabTasks(taskId).then((tasks) => {

     document.querySelector("#enterATask").value = tasks.taskName;

    document.getElementById("expectedCompDate").value = tasks.completionDate;

    })

    }

  })

  }

  export default taskEdit