import React from 'react';
import classes from './Dialogs.module.css'

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {updateNewMessageBodyCreator, sendMessageActionCreator} from "../state/dialog-reducer";




const Dialogs = (props) => {


    let state = props.store.getState().messagesPage

    let dialogsElement = state.dialogs.map(elem => {
        return <DialogItem name={elem.name} id={elem.id}/>
    })



    let messageElement = state.messages.map(elem => {
        return <Message message = {elem.message}/>
    })


    let newMessageBody = state.newMessageBody
    let onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div>{messageElement}</div>
                <div>
                    <div><textarea placeholder='Enter your message' value = {newMessageBody} onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;

