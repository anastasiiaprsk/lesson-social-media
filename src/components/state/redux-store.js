import {combineReducers, configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import toDoReducer from "./todo-reducer";
import sidebarReducer from "./sidebar-reducer";
import chessReducer from "./chess-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    todoListPage: toDoReducer,
    sidebarPage: sidebarReducer,
    chessPage: chessReducer
})

let store = configureStore({reducer: reducers})

export default store