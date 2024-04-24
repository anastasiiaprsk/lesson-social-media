
let addPost = 'add-post'
let updateNewPostText = 'update-new-post-text'

let initialState =  {
    posts: [
        {id: 1, message: 'Hi how are u', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20}

    ],

        newPostText: 'it-kamasutra.com'
}

let profileReducer = (state = initialState, action) => {


    if(action.type === addPost){
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        }
        state = {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
        }

    } else if(action.type === updateNewPostText) {
        state = {
            ...state,
            newPostText: action.text
        }
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