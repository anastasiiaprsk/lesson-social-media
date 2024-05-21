import classes from './todo.module.css'
import ToDoTask from "./todolist";
import React from "react";
import {addTaskActionCreate, updateNewTaskActionCreate} from "../state/todo-reducer";
import {useSelector, useDispatch} from "react-redux";

let TodoList = (props) => {
    const todoListPage = useSelector(state => state.todoListPage)
    const dispatch = useDispatch()
    let taskElement = todoListPage.tasks.map(elem => {
        return <ToDoTask taskText = {elem.taskText}/>
    })
    let newTaskElement = React.createRef()
    let addTask = () => {
        dispatch(addTaskActionCreate())
    }
    let onChange = () => {
        let newText = newTaskElement.current.value;
        dispatch(updateNewTaskActionCreate(newText))
    }
    return (
        <div className={classes.todolist}>
            <div>
                <textarea onChange={onChange} ref={newTaskElement} value={todoListPage.newTaskText}/>
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