import APIManager from "./TaskAPI"
import taskEventListener from "./tasksEventListener"

  const taskCreator = () => {
    document.querySelector("#output").innerHTML +=
    `
    <div id = "TaskForm">
    <h1>Tasks<h1>

    <fieldset>
    <label>Enter a Task</label>
    <input type="text" id="enterATask"></input>
    </fieldset>

    <fieldset>
    <label>Expected Completetion Date</label>
    <input type="date" id="inputFirstName"></input>
    </fieldset>

    <fieldset>
    <label>Mark a Task Complete</label>
    <input type="checkbox" id="markATaskComplete"></input>
    </fieldset>

     <button id="EnterTask">Enter Task</button>
</div>

<div>

<h3>Task List</h3>
<h1 id="full_task_list"></h1>

</div>
    `
    taskEventListener();

    APIManager.grabTasks().then(tasks => {
      debugger
      tasks.forEach(task => {

          let taskName = task.task_name;
          let date = task.task_date;

          const htmlBuilder =
          `
          <h1>${taskName}</h1>
          <h2>${date}</h2>

          `

          let fullTaskList = document.querySelector('#full_task_list')


          fullTaskList.innerHTML += htmlBuilder

        });
    })


  }


export default taskCreator