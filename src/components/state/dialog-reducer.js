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
        state = {
            ...state, newMessageBody: action.body
        }
    } else if(action.type === sendMessage){
        let body = state.newMessageBody
        let idMess= {id: 6, message: body}
        state = {
            ...state, messages: [...state.messages, idMess], newMessageBody: ''
        }
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