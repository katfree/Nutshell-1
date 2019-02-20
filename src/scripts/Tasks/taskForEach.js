import addToDOM from "./taskAddToDOM"
import APIManager from "./TaskAPI";


const HTMLrep = () => {
  APIManager.grabTasks().then((taco) => {
    document.querySelector("#full_task_list").innerHTML = ""
    return taco
  }).then((tasks) => {
  console.log(tasks)

     tasks.forEach(task => {

  const htmlBuilder = addToDOM(task)

   let fullTaskList = document.querySelector("#full_task_list")

  fullTaskList.innerHTML += htmlBuilder

     });
  })
}

export default HTMLrep