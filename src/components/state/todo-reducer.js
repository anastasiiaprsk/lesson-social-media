
let addTask = 'add-task'
let updateNewTaskText = 'update-new-task'

let toDoReducer = (state, action) => {

    if(action.type === addTask){
        let newTask = {
            id: 5,
            taskText: state.newTaskText
        }
        state.tasks.push(newTask);
        state.newTaskText = ''
    } else if(action.type === updateNewTaskText) {
        state.newTaskText = action.text;
    }

    return state
}

export let addTaskActionCreate = () => {
    return {
        type: addTask
    }
}
export let updateNewTaskActionCreate = (newText) => {
    return {type: updateNewTaskText, text: newText}
}

export default toDoReducer;