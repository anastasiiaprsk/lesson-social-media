import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import toDoReducer from "./todo-reducer";
import sidebarReducer from "./sidebar-reducer";
import chessReducer from "./chess-reducer";


// export let addPostActionCreate = () => {
//     return {
//         type: addPost
//     }
// }
// export let updateNewPostActionCreate = (text) => {
//     return {
//         type: updateNewPostText,
//         text: text
//     }
// }
// export let addTaskActionCreate = () => {
//     return {
//         type: addTask
//     }
// }
// export let updateNewTaskActionCreate = (newText) => {
//     return {type: updateNewTaskText, text: newText}
// }
// export let clickSquareAction = (xCoord, yCoord) => {
//     return {type: clickSquare, x: xCoord, y: yCoord}
// }
// export let forNextMoveAction = (xCoord, yCoord) => {
//     return {type: nextMoveType, x: xCoord, y: yCoord}
// }

// export let sendMessageActionCreator = () => {
//     return {type: sendMessage}
// }
// export let updateNewMessageBodyCreator = (body)=> {
//     return {type: updateNewMessageBody, body: body}
// }

let store = {

    state: {
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Nasty'},
                {id: 2, name: 'German'},
                {id: 3, name: 'Sam'},
                {id: 4, name: 'Carl'},
                {id: 5, name: 'Mary'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are u'},
                {id: 3, message: 'Yo'}
            ],

            newMessageBody: ''
        },

        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are u', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 20}

            ],

            newPostText: 'it-kamasutra.com'
        },

        todoListPage: {
            tasks: [
                {id: 1, taskText: 'купить молоко'},
                {id: 2, taskText: 'Погулять с собакой'}
            ],

            newTaskText: 'Add Task'
        },

        sidebarPage: {
            sidebar: [
                {id: 1, friend: 'German'},
                {id: 2, friend: 'Pupa'},
                {id: 3, friend: 'Inga'}
            ]
        },

        chessPage: {
            // chessBoard2: {
            //     '1_8': {
            //         color: 'white',
            //         coordX: 1,
            //         coordY: 8,
            //         hasKnight: false,
            //         nextMove: false
            //     },
            //     '2_8':  {
            //         color: 'black',
            //         coordX: 2,
            //         coordY: 8,
            //         hasKnight: false,
            //         nextMove: false
            //     },
            // },
            chessBoard: [
                {
                    color: 'white',
                    coordX: 1,
                    coordY: 8,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 2,
                    coordY: 8,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 3,
                    coordY: 8,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 4,
                    coordY: 8,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 5,
                    coordY: 8,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 6,
                    coordY: 8,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 7,
                    coordY: 8,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 8,
                    coordY: 8,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 1,
                    coordY: 7,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 2,
                    coordY: 7,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 3,
                    coordY: 7,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 4,
                    coordY: 7,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 5,
                    coordY: 7,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 6,
                    coordY: 7,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 7,
                    coordY: 7,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 8,
                    coordY: 7,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 1,
                    coordY: 6,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 2,
                    coordY: 6,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 3,
                    coordY: 6,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 4,
                    coordY: 6,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 5,
                    coordY: 6,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 6,
                    coordY: 6,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 7,
                    coordY: 6,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 8,
                    coordY: 6,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 1,
                    coordY: 5,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 2,
                    coordY: 5,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 3,
                    coordY: 5,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 4,
                    coordY: 5,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 5,
                    coordY: 5,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 6,
                    coordY: 5,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 7,
                    coordY: 5,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 8,
                    coordY: 5,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 1,
                    coordY: 4,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 2,
                    coordY: 4,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 3,
                    coordY: 4,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 4,
                    coordY: 4,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 5,
                    coordY: 4,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 6,
                    coordY: 4,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 7,
                    coordY: 4,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 8,
                    coordY: 4,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 1,
                    coordY: 3,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 2,
                    coordY: 3,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 3,
                    coordY: 3,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 4,
                    coordY: 3,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 5,
                    coordY: 3,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 6,
                    coordY: 3,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 7,
                    coordY: 3,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 8,
                    coordY: 3,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 1,
                    coordY: 2,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 2,
                    coordY: 2,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 3,
                    coordY: 2,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 4,
                    coordY: 2,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 5,
                    coordY: 2,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 6,
                    coordY: 2,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 7,
                    coordY: 2,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 8,
                    coordY: 2,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 1,
                    coordY: 1,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 2,
                    coordY: 1,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 3,
                    coordY: 1,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 4,
                    coordY: 1,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 5,
                    coordY: 1,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'white',
                    coordX: 6,
                    coordY: 1,
                    hasKnight: false,
                    nextMove: false
                },

                {
                    color: 'black',
                    coordX: 7,
                    coordY: 1,
                    hasKnight: false,
                    nextMove: false
                },
                {
                    color: 'white',
                    coordX: 8,
                    coordY: 1,
                    hasKnight: false,
                    nextMove: false
                },
            ],

            knight: {
                color: 'white',
                coordX: 4,
                coordY: 4,
            }
        }
    },


    rerenderEntireTree(){

    },


    subscribe(observer){
        this.rerenderEntireTree = observer;
    },
    getState(){
        return this.state
    },

    dispatch(action){

        this.state.profilePage = profileReducer(this.state.profilePage, action)
        this.state.messagesPage = dialogReducer(this.state.messagesPage, action)
        this.state.todoListPage = toDoReducer(this.state.todoListPage, action)
        this.state.sidebarPage = sidebarReducer(this.state.sidebarPage, action)
        this.state.chessPage = chessReducer(this.state.chessPage, action)

        this.rerenderEntireTree(this.state)
    }

}

export default store
window.store = store



