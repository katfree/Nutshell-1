import APIManager from "./TaskAPI"

const taskEventListener = () => {document.querySelector("#EnterTask").addEventListener("click", () => {
APIManager.grabTasks().then((tasks) => {
   tasks.forEach(task => {

      let taskName = task.task_name;
      let date = task.task_date;

       const htmlBuilder =
       `
       <h1>${taskName}</h1>
      <h2>${date}</h2>

      `

       let fullTaskList = document.querySelector("#full_task_list")


        fullTaskList.innerHTML += htmlBuilder

  });
  })

} )}

export default taskEventListener