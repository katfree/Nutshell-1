import APIManager from "./TaskAPI";
import HTMLrep from "./taskForEach"
import editFunction from "."


const taskEdit = () => {
  document.querySelector("#taskTotal").addEventListener("click", (event) => {
    if (event.target.id.startsWith("TaskEditBTN--")) {
      const taskId = event.target.id.split("--")[1]

      APIManager.deleteTasks(taskId).then()

    }

  })

  }

  export default taskEdit