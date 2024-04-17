import classes from './Friends.module.css'
import FriendItem from "./FriendItem";

const Friends = (props) => {

    let friendsElement = props.state.sidebar.map(elem => {
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