import classes from './todo.module.css'
import ToDoTask from "./todolist";
import React from "react";
import {addTaskActionCreate, updateNewTaskActionCreate} from "../state/todo-reducer";

let TodoList = (props) => {
    let taskElement = props.todoListPage.tasks.map(elem => {
        return <ToDoTask taskText = {elem.taskText}/>
    })

    let newTaskElement = React.createRef()
    let addTask = () => {
        let action = addTaskActionCreate() // {type: 'add-task'}
        props.dispatch(action)

    }

    let onChange = () => {
        let newText = newTaskElement.current.value;
        let action = updateNewTaskActionCreate(newText) // {type: update-task, text: newText}
        props.dispatch(action);
    }

    return (
        <div className={classes.todolist}>
            <div>
                <textarea onChange={onChange} ref={newTaskElement} value={props.todoListPage.newTaskText}/>
                <button onClick={addTask}>Добавить</button>
            </div>
            )

            <div className={classes.namelist}>
                {taskElement}
            </div>

        </div>
    )
}

export default TodoList