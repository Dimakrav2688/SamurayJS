import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Massage from './Massage/Massage';
import { Redirect } from 'react-router-dom';
import AddMessageForm from '../Dialogs/AddMessageFrom/AddMessageFrom'



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogsItem image={d.image} key={d.id} altname={d.altname} name={d.name} id={d.id} />);
    let messagesElements = state.messagesData.map(m => <Massage message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;


       
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody); 
    }
    if (!props.isAuth) return <Redirect to={'/Login'} />;


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm onSubmit={addNewMessage} />
                </div>
            </div>


        </div>
    );
}





export default Dialogs;
