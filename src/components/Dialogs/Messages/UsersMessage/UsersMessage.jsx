import React from 'react';
import s from './UsersMessage.modelu.css';



const UsersMessage = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export default UsersMessage;