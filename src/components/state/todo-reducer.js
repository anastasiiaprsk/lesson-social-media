
let addTask = 'add-task'
let updateNewTaskText = 'update-new-task'

let initialState = {
        tasks: [
            {id: 1, taskText: 'купить молоко'},
            {id: 2, taskText: 'Погулять с собакой'}
        ],
        newTaskText: 'Add Task'
    }

let toDoReducer = (state = initialState, action) => {
    if(action.type === addTask){
        let newTask = {
            id: 5,
            taskText: state.newTaskText
        }
        state = {...state, tasks: [...state.tasks, newTask], newTaskText: ''}
    } else if(action.type === updateNewTaskText) {
        state = {...state, newTaskText: action.text}
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