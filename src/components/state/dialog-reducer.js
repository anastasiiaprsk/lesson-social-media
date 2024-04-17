let updateNewMessageBody = 'update-new-message-body'
let sendMessage = 'send-message'

let dialogReducer = (state, action) => {

    if(action.type === updateNewMessageBody){
        state.newMessageBody = action.body
    } else if(action.type === sendMessage){
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messages.push({id: 6, message: body})
    }

    return state
}

export let sendMessageActionCreator = () => {
    return {type: sendMessage}
}
export let updateNewMessageBodyCreator = (body)=> {
    return {type: updateNewMessageBody, body: body}
}

export default dialogReducer;