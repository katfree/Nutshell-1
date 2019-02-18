import APIManager from "./TaskAPI"


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

</div>
    `
  }


export default taskCreator