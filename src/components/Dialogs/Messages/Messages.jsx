import React from 'react';
import s from "./Messages.module.css";
import MeMessages from "./MeMessages/MeMessages";
import UsersMessage from "./UsersMessage/UsersMessage";

const Messages = (props) => {

/*    let messagesElementMe = props.meMessages.map( m => <MeMessages message={m.message} /> );*/

    let messagesElementUsers = props.usersMessages.map( m => <UsersMessage message={m.message} /> );


    return (
        <div className={s.messages}>

            <MeMessages messages={props.meMessages} />

            <div className={s.message}>

                { messagesElementUsers }

            </div>
        </div>
    )
}

export default Messages;