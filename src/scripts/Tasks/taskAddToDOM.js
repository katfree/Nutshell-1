const addToDOM = (task) => {

return   `<div id="${task.id}">
          <h3>${task.taskName}</h3>
          <h3>${task.completionDate}</h3>
          <button id="TaskEditBTN--${task.id}">edit</button>
          <button id="TaskDeleteBTN--${task.id}">delete</button>
        </div>
        `

}

export default addToDOM;