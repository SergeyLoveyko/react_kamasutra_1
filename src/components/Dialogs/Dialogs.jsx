import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>

                { dialogsElements }

            </div>
            <Messages meMessages={props.state.meMessages} usersMessages={props.state.usersMessages} />
        </div>
    )
}

export default Dialogs;