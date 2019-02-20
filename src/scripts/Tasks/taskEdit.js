import APIManager from "./TaskAPI";
import HTMLrep from "./taskForEach"
import editFunction from "./editFunction"
import taskEditObj from "./taskEditObj"

const taskEdit = () => {
  document.querySelector("#taskTotal").addEventListener("click", (event) => {
    if (event.target.id.startsWith("TaskEditBTN--")) {
      const taskId = event.target.id.split("--")[1]


      document.querySelector("#hiddenId").value = taskId

      document.querySelector("#BtmFrmEnterTask").textContent =
      "edit"

      console.log(taskId)

    APIManager.postTasks(taskId).then((tasks) => {
     document.querySelector("#enterATask").value = tasks.taskName;

    document.querySelector("#expectedCompDate").value = tasks.completionDate;

    })

    }

  })

  }

  export default taskEdit