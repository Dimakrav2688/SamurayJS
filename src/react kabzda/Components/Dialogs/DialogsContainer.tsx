
import {action} from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirectHOC } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps, {...action}), withAuthRedirectHOC)(Dialogs);




/*const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(action.sendMessage(newMessageBody));
        }
    }
} по не ясно как он деструктиризировал так екшн в конекте.  */ 