import logo1 from './../emoji-me.png'
import logo2 from './../cool.png'
import logo3 from './../hug.jpg'
import profileReducer from './profile_reducer';
import messagesReducer from './messages_reducer';
import sidebarReducer from './sidebar_reducer';




let store = {
    _state: {
        sideBar: {
            friends: [
                { image: logo1, name: 'Sasha' },
                { image: logo2, name: 'Yarik' },
                { image: logo3, name: 'Dima' },
            ],
        },
        profilePage: {
            postsData: [
                { id: 1, post: 'Hey,my name is Yarik,  why nobody love me?', likes: '12' },
                { id: 2, post: 'Whhoooah, new year coming!!!', likes: '42' },
                { id: 3, post: 'First day after new year!!', likes: '27' },
            ],
            newPostText: 'cxvcxvxcv'
        },
        messagePage: {
            contactsData: [
                { name: 'Sasha', road: 'Sasha' },
                { name: 'Yarik', road: 'Yarik' },
                { name: 'Dima', road: 'Dima' },
                { name: 'Ura', road: 'Ura' },
                { name: 'Alex', road: 'Alex' },
                { name: 'Vlad', road: 'Vlad' },
                { name: 'Brian', road: 'Brian' },
                { name: 'John', road: 'John' },
                { name: 'Keith', road: 'Keith' },
                { name: 'Antonio', road: 'Antonio' },
                { name: 'David', road: 'David' },
            ],
            chatData: [
                {
                    name: 'Sasha', text: `Hey how are you? I am miss you so much!!!`
                },
                {
                    name: 'Me', text: `Hey, i was in the Dubai! I meat Andrew Tate and he shaked my hand!!!!!!! Thats crazy.'`
                },
                {
                    name: 'Sasha', text: `Yo that is cool staff. Do you have some planes for this evening?`
                },
                {
                    name: 'Me', text: `Nope, i am not busy today`
                },
                {
                    name: 'Sasha', text: `Cool so lets meet near old store on St.Maudiy 35 street`
                },
                {
                    name: 'Me', text: `Ok sure, i will be there near 3 hours`
                },

            ],
            newMessageText: '',
            newFriendName: ''
        },
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messagesReducer(this._state.messagePage, action); 
        this._state.sideBar = sidebarReducer(this._state.sideBar, action); 
        this._rerenderEntireTree(this._state);
    },
}







window.store = store;
export default store;

