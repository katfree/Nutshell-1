
import taskEditObj from "./taskEditObj";
import APIManager from "./TaskAPI";
import HTMLrep from "./taskForEach"

const taskEditInput = () => {
  document.querySelector("#BtmFrmEnterTask").addEventListener("click", () => {

    console.log("taskEditInput")

    const buttonText = document.querySelector("#BtmFrmEnterTask").textContent;

    const taskName = document.querySelector("#EnterTask").value

    const completionDate = document.querySelector("#expectedCompDate").value


   const newTask = taskEditObj(taskName, completionDate)

   


  })

}

export default taskEditInput

