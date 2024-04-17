import classes from './Friends.module.css'
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    return <div className={classes.friends}>
        <NavLink to={'/friends/' + props.id}>{props.friend}</NavLink>
    </div>
}

export default FriendItem