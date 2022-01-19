import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, Textarea } from '../../Common/FromsControls/FormsControls';
import { maxLenghtCreator, required } from '../../../../utils/validators/validator'
import { NewMessageFormValuesType } from '../Dialogs'; 


const maxLenght50 = maxLenghtCreator(50)
type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string> //createField<NewMessageFormValuesKeysType> у меня оно не типизируется как у димона, в чем проблема не понятно.
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType > 
 = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField('Enter your message', 'newMessageBody', [required, maxLenght50], Textarea)}                          
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

export default  reduxForm<NewMessageFormValuesType, PropsType>({form:'dialogAddMessageForm'})(AddMessageForm)

