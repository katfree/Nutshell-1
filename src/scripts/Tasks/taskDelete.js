import tasksEventListener from "./tasksEventListener"
import APIManager from "./TaskAPI";
import HTMLrep from "./taskForEach"



const taskDelete = () => {
document.querySelector("#taskTotal").addEventListener("click", (event) => {
  if (event.target.id.startsWith("TaskDeleteBTN--")) {
    const taskId = event.target.id.split("--")[1]

    APIManager.deleteTasks(taskId).then(HTMLrep)

  }

})

}

export default taskDelete