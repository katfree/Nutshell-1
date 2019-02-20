import APIManager from "./TaskAPI";
import HTMLrep from "./taskForEach"
import taskEditObj from "./taskEditObj"

const taskEdit = () => {
  document.querySelector("#taskTotal").addEventListener("click", (event) => {

    if (event.target.id.startsWith("TaskEditBTN--")) {
      const taskId = event.target.id.split("--")[1]

      document.querySelector("#hiddenId").value = taskId

      document.querySelector("#BtmFrmEnterTask").textContent =
        "re-enter"
      console.log(taskId)

      
      APIManager.getDataToEdit(taskId).then((task) => {
        console.log("task", task)
        document.querySelector("#enterATask").value = task.taskName

        document.querySelector("#expectedCompDate").value =
          task.completionDate

      })
    }

  })
}

export default taskEdit