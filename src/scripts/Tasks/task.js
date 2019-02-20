import taskCreator from "./taskBuilder"
import taskEventListener from "./tasksEventListener";
import taskDelete from "./taskDelete"
import taskEdit from "./taskEdit";
import taskEditInput from "./taskEditInput";


const tasksPage = () => {
taskCreator()
taskEventListener()
taskDelete();
taskEdit();
taskEditInput();
}
export default tasksPage