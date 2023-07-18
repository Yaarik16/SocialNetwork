const ADD_FRIEND = 'ADD-FRIEND';
const UPDATE_NEW_FRIEND_NAME = 'UPDATE-NEW-FRIEND-NAME';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const messagesReducer = (state, action) => {

    switch (action.type) {
        case ADD_FRIEND:
            let newFriend = {
                name: action.friendName, road: `/${action.friendName}`
            }
            state.contactsData.push(newFriend);
            state.newFriendName = '';
        case UPDATE_NEW_FRIEND_NAME:
            state.newFriendName = action.newName;
        case ADD_MESSAGE:
            let newMessage = {
                name: 'Sasha', text: state.newMessageText
            }
            state.chatData.push(newMessage);
            state.newMessageText = '';
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
        default:
            return state;
    }
}

export const addNewFriendActionCreator = (name) => {
    return {
        type: ADD_FRIEND,
        friendName: name,
    }
}

export const onNameChangeActionCreator = (name) => {
    return {
        type: UPDATE_NEW_FRIEND_NAME,
        newName: name
    }
}


export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}

export const onMessageChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}


export default messagesReducer;