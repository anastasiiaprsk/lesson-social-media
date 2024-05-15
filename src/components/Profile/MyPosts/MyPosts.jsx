import React from "react";
import classes from './MyPosts.module.css'
import Post from './Posts/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map(elem => {
        return <Post messages = {elem.message} likesCount ={elem.likesCount}/>
    })

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
     <div className={classes.postBlock}>
        My post
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
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