import taskCreator from "./taskBuilder"
import taskEventListener from "./tasksEventListener";
import taskDelete from "./taskDelete"
import taskEdit from "./taskEdit";



const tasksPage = () => {
taskCreator()
taskEventListener()
taskDelete();
taskEdit();

}
export default tasksPage