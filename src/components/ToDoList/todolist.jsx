import classes from './todo.module.css'


let ToDoTask = (props) => {
    return (
            <ul className={classes.namelist}>
                <li className={classes.lilist}>
                    <span>{props.taskText}</span>
                    <button className={classes.deletebtn}>Удалить</button>
                </li>
            </ul>
        )
}

export default ToDoTask