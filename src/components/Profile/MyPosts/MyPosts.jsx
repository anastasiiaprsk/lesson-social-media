import React from "react";
import classes from './MyPosts.module.css'
import Post from './Posts/Post'
import {addPostActionCreate, updateNewPostActionCreate} from "../../state/profile-reducer";



const MyPosts = (props) => {



    let postsElements = props.posts.map(elem => {
        return <Post messages = {elem.message} likesCount ={elem.likesCount}/>
    })

    let newPostElement = React.createRef()

    let addPost = () => {
        let action = addPostActionCreate()
        props.dispatch(action) //text
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreate(text)
        props.dispatch(action);
    }

    return (
     <div className={classes.postBlock}>
        My post
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
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