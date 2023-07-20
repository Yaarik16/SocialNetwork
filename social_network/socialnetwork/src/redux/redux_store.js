import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profile_reducer';
import messagesReducer from './messages_reducer';
import sidebarReducer from './sidebar_reducer';


let reducers = combineReducers({
    profilePage :profileReducer,
    messagePage :messagesReducer,
    sideBar :sidebarReducer,
});

let store = createStore(reducers);

export default store;