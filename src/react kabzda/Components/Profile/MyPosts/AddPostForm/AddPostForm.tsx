import { InjectedFormProps, reduxForm } from 'redux-form'
import {createField, Input} from '../../../Common/FromsControls/FormsControls'
import { required } from '../../../../../utils/validators/validator'



type PropsType = {}
export type AddPostFormValuesType = {newPostText: string}
type GetStringKeys<T> = Extract<keyof T, string>
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>


const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> &PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostFormValuesTypeKeys>('Your post', 'postText', [required], Input)}                
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({form: 'profile-add-post'})(AddPostForm)





