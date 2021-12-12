import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;




//   Ручной вариант Context теперь выше мы делаем спомощью библиотеки ReactRedux

// const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//         {(store) => {

//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             }

//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body));
//             }
//             return <Dialogs updateNewMessageBody={onNewMessageChange}
//                 sendMessage={onSendMessageClick}
//                 dialogsPage={store.getState().dialogsPage} />
//         }
//         }
//     </StoreContext.Consumer>
// }