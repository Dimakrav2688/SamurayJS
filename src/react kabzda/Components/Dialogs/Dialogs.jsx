import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Massage from './Massage/Massage';



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogsItem image={d.image} key={d.id} altname={d.altname} name={d.name} id={d.id} />);
    let messagesElements = state.messagesData.map(m => <Massage message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    }
    
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody (body);
        
    }


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your massege'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>


        </div>
    );
}

export default Dialogs;
