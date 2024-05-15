import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsElement = props.messagesPage.dialogs.map(elem => {
        return <DialogItem name={elem.name} id={elem.id}/>
    })
    let messageElement = props.messagesPage.messages.map(elem => {
        return <Message message = {elem.message}/>
    })
    let onSendMessage = () => {
        props.onSendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.onNewMessageChange(body)
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
                        <textarea placeholder='Enter your message' value = {props.newMessageBody}
                                   onChange={onNewMessageChange}></textarea>
                    </div>
                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    );
};
export default Dialogs;

