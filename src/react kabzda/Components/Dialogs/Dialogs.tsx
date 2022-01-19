import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Massage from './Massage/Massage';
import AddMessageForm from './AddMessageFrom/AddMessageFrom'
import {InitialStateType} from '../../redux/dialogs-reduser'

type OwnPropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
    
}
export type NewMessageFormValuesType = {
    newMessageBody: string    
}


const Dialogs: React.FC<OwnPropsType> = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogsItem image={d.image} key={d.id} altname={d.altname} name={d.name} id={d.id} />);
    let messagesElements = state.messagesData.map(m => <Massage message={m.message} key={m.id} />);
    // let newMessageBody = state.newMessageBody;


       
    let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody); 
    }
    


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


// if (!props.isAuth) return <Redirect to={'/Login'} />; ранее использовали как редирект, потом сделали HOCRedireckt
// и надобности его использования в пюр комп. нету. 