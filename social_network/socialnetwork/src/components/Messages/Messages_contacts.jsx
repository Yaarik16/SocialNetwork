import React from "react";
import './Messages.css'
import './Messages_contacts.css'
import ContactItem from "./Messages_item";


const MessagesContacts = (props) => {
    let newFriend = React.createRef();


    let addNewFriend = () => {
        let name = newFriend.current.value;
        debugger;
        if (name === '') {
            alert('You can\'t submit empty field')
        } else {
            props.onAddFriend(name);
        }
    }
    
    let onNameChange = () => {
        let name = newFriend.current.value;
        props.onNameChange(name);
    }

    let contactsItem = props.state.messagePage.contactsData.map((Contact) => {
        return <ContactItem name={Contact.name} road={Contact.road} />
    });
    debugger;

    return (
        <div className='contacts_items'>
            <input onChange={onNameChange} ref={newFriend} value={props.newFriendName} placeholder='Type the name ' />
            <button onClick={addNewFriend} type="button">Add new friend</button>
            {contactsItem}
        </div>
    );
}

export default MessagesContacts;