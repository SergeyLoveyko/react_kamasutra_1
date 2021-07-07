import React from 'react';
import s from './MeMessages.modelu.css';
import Message from "./Message/Message";



const MeMessages = (props) => {

    let messagesElementsMe = props.messages.map( m => <Message message={m.message} /> );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        debugger;
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div>

            <div>
                {/*<Message message={props.message} />*/}
                <div className={s.message}>

                    { messagesElementsMe }

                </div>
            </div>

            <div>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Send</button>
                </div>
            </div>

        </div>
    )
}


export default MeMessages;