
let addPost = 'add-post'
let updateNewPostText = 'update-new-post-text'

let profileReducer = (state, action) => {

    if(action.type === addPost){
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost);
        state.newPostText = ''


    } else if(action.type === updateNewPostText){
        state.newPostText = action.text;
    }

    return state
}

export let addPostActionCreate = () => {
    return {
        type: addPost
    }
}
export let updateNewPostActionCreate = (text) => {
    return {
        type: updateNewPostText,
        text: text
    }
}

export default profileReducer;