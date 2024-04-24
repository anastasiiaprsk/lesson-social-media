
import React from "react";
import {addPostActionCreate, updateNewPostActionCreate} from "../../state/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreate()) //text
    }

    let onPostChange = (text) => {
        let action = updateNewPostActionCreate(text)
        props.store.dispatch(action);
    }

    return (
       <MyPosts updateNewPostText = {onPostChange} addPost = {addPost} posts = {state.profilePage.posts}
       newPostText = {state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;