
import taskEditObj from "./taskEditObj";
import APIManager from "./TaskAPI";
import HTMLrep from "./taskForEach"

const taskEditInput = () => {
  document.querySelector("#EnterTask").addEventListener("click", () => {

    console.log("taskEditInput")

    const buttonText = document.querySelector("#EnterTask").textContent;

    const taskName = document.querySelector("#EnterTask").value

    const completionDate = document.querySelector("#expectedCompDate").value


   const newTask = taskEditObj(taskName, completionDate)

   if (buttonText === "edit") {
     const taskId = document.getElementById("hiddenId").value

     APIManager.editTasks(newTask, taskId).then(APIManager.grabTasks(taskId)).then(() => HTMLrep())

   }


  })

}

export default taskEditInput

