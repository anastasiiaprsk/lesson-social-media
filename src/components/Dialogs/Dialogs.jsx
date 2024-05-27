import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {updateNewMessageBodyCreator, sendMessageActionCreator} from "../state/dialog-reducer";

const Dialogs = (props) => {
    const messagesPage = useSelector(state => state.messagesPage)

    const dispatch = useDispatch()

    let dialogsElement = messagesPage.dialogs.map(elem => {
        return <DialogItem name={elem.name} id={elem.id}/>
    })
    let messageElement = messagesPage.messages.map(elem => {
        return <Message message = {elem.message}/>
    })
    let onSendMessage = () => {
        dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message' value = {messagesPage.newMessageBody}
                                   onChange={onNewMessageChange}></textarea>
                    </div>
                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    );
};
export default Dialogs;

