import React from "react";
import classes from './MyPosts.module.css'
import Post from './Posts/Post'
import {addPostActionCreate, updateNewPostActionCreate} from "../../state/profile-reducer";
import {useSelector, useDispatch} from "react-redux";

const MyPosts = (props) => {
    const posts = useSelector(state => state.profilePage.posts)
    const newPostText = useSelector(state => state.profilePage.newPostText)
    const dispatch = useDispatch()
    let postsElements = posts.map(elem => {
        return <Post messages = {elem.message} likesCount ={elem.likesCount}/>
    })
    let newPostElement = React.createRef()
    let onAddPost = () => {
        dispatch(addPostActionCreate())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        dispatch(updateNewPostActionCreate(text))
    }
    return (
     <div className={classes.postBlock}>
        My post
        <div>
            <div><textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/></div>
            <div>
                <button onClick={onAddPost}>Add post</button>
                <button>Remove</button>
            </div>
        </div>
         <div className='posts'>
             {postsElements}

        </div>
     </div>
    )
 }
 export default MyPosts;