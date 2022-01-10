import { createField, Input, Textarea } from "../../Common/FromsControls/FormsControls";
import { reduxForm } from 'redux-form';
import s from './ProfileInfo.module.css';
import style from '../../Common/FromsControls/FormsControls.module.css'



const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>

        <div><button >Save</button></div>
        {error && <div className={style.formSummeryError}>
            {error}
        </div>
        }
        <div>
            <b>Fuul name</b>: {createField("Full name", 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        </div>

        <div>
            <b>My professional skills</b>:
            {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>

        <div>
            <b>About Me</b>:
            {createField("About Me", 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)} </b>
                </div>
            })}
        </div>


    </form>
}

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataReduxForm;
