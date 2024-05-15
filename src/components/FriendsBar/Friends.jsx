import classes from './Friends.module.css'
import FriendItem from "./FriendItem";
import {useSelector} from "react-redux";

const Friends = () => {
    const sideBar = useSelector(state => state.sidebar)

    let friendsElement = sideBar?.map(elem => {
            return <FriendItem friend={elem.friend} id={elem.id}/>
        })

    return (
        <div className={classes.friends}>
            <div className={classes.friendsItem}>
                {friendsElement}
            </div>

        </div>
    );
}

export default Friends