import React from "react";
import './Messages.css'
import './Messages_contacts.css'
import { NavLink } from "react-router-dom";
import { addNewFriendActionCreator } from "../../redux/messages_reducer";
import { onNameChangeActionCreator } from "../../redux/messages_reducer";


const ContactItem = (props) => {

    let path = '/Messages/' + props.road;

    return (
        <div className='conatact_item'>
            <NavLink to={path}>
                <button type="button">
                    {props.name}
                </button>
            </NavLink>
        </div>
    );
};


const MessagesContacts = (props) => {

    let newFriend = React.createRef();


    let addNewFriend = () => {
        let name = newFriend.current.value;
        let action = addNewFriendActionCreator(name);
        props.dispatch(action);
    }

    let onNameChange = () => {
        let name = newFriend.current.value;
        let action = onNameChangeActionCreator(name);
        props.dispatch(action);
    }

    let contactsItem = props.contactsData.map((Contact) => {
        return <ContactItem name={Contact.name} road={Contact.road} />
    });

    return (
        <div className='contacts_items'>
            <input onChange={onNameChange} ref={newFriend} value={props.newFriendName} placeholder='Type the name ' />
            <button onClick={addNewFriend} type="button">Add new friend</button>
            {contactsItem}
        </div>
    );
}

export default MessagesContacts;