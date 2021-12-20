import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../Common/FromsControls/FormsControls';
import { maxLenghtCreator, required } from '../../../../utils/validators/validator'


const maxLenght50 = maxLenghtCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLenght50]}
                name={'newMessageBody'} placeholder={'Enter your massege'} />                
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

export default  reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

