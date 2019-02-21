import APIManager from "./TaskAPI"
import taskCreator from "./taskBuilder"
import taskDelete from "./taskDelete"
import addToDOM from "./taskAddToDOM";
import HTMLrep from "./taskForEach";


const taskEventListener = function () {
   const EnterTaskButton = document.querySelector("#BtmFrmEnterTask")

   console.log("hiTasksEL")

   EnterTaskButton.addEventListener("click", () => {
     const taskName = document.querySelector("#enterATask").value

     const completionDate = document.querySelector("#expectedCompDate").value

     const userId= sessionStorage.getItem("userId")

      let taskObject = {
            taskName: taskName,
            completionDate: completionDate,
            userId: parseInt(userId)
      }


      const buttontext = document.querySelector("#BtmFrmEnterTask").textContent

      if(buttontext !== "re-enter") {

         APIManager.postTasks(taskObject)
         .then(() => APIManager.grabTasks(userId))
      .then(() => HTMLrep())

      } else if (buttontext === "re-enter") {
         const taskId = document.getElementById("hiddenId").value

         APIManager.editTasks(taskObject, taskId).then(() => APIManager.grabTasks(taskId)).then(() => HTMLrep()).then(() => {

            document.querySelector("#BtmFrmEnterTask").textContent = "Enter Task"

         }).then(() => {
            console.log("hiTasksEventListener")
            document.querySelector("#enterATask").value = ""
            document.querySelector("#expectedCompDate").value = ""

         })

       }

   }
   )}




export default taskEventListener