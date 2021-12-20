import React from 'react';
import {sendMessageCreator} from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirectHOC } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
//пропс isAuth: state.auth.isAuth вырвали с мапстейт то пропс и потянули в шаблон НОС. потом зарефакторим говорил димон)
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirectHOC)(Dialogs);




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