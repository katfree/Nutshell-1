
import taskEventListener from "./tasksEventListener";
import taskDelete from "./taskDelete"
import taskEdit from "./taskEdit";
import taskEditInput from "./taskEditInput";


  const taskCreator = () => {
    document.querySelector("#output").innerHTML +=
    `
    <div id = "TaskForm">
    <h1>Tasks<h1>
    <input id="hiddenId" type="hidden"></input>
    <fieldset>
    <label>Enter a Task</label>
    <input type="text" id="enterATask"></input>
    </fieldset>

    <fieldset>
    <label>Expected Completetion Date</label>
    <input type="text" placeholder="yyyy-mm-dd" id="expectedCompDate"></input>
    </fieldset>

    <fieldset>
    <label>Mark a Task Complete</label>
    <input type="checkbox" id="markATaskComplete"></input>
    </fieldset>

     <button id="BtmFrmEnterTask">Enter Task</button>
</div>

<div id = "taskTotal">

<h3>Task List</h3>
<h1 id="full_task_list"></h1>

</div>
    `

  }


export default taskCreator