import APIManager from "./TaskAPI"

import taskDelete from "./taskDelete"
import addToDOM from "./taskAddToDOM";
import HTMLrep from "./taskForEach";


const taskEventListener = function () {
   const EnterTaskButton = document.querySelector("#EnterTask")

   EnterTaskButton.addEventListener("click", () => {
     const taskName = document.querySelector("#enterATask").value

     const completionDate = document.querySelector("#inputFirstName").value

      let taskObject = {
            taskName: taskName,
            completionDate: completionDate
      }

      APIManager.postTasks(taskObject)
      .then(() => APIManager.grabTasks())
   .then(() => HTMLrep())
   })
}

export default taskEventListener