let updateNewMessageBody = 'update-new-message-body'
let sendMessage = 'send-message'

let initialState =  {
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
}

let dialogReducer = (state = initialState, action) => {

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