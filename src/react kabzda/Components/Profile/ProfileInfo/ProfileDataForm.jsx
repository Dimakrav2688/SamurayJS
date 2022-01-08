import { createField, Input, Textarea } from "../../Common/FromsControls/FormsControls";
import { reduxForm } from 'redux-form';


const ProfileDataForm = ({ handleSubmit, profile }) => {
    return <form onSubmit={handleSubmit}>

        <div><button >Save</button></div>
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
        {/* <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactsTitle={key} contactValue={profile.contacts[key]} />
        })}
    </div> */}


    </form>
}

const ProfileDataReduxForm = reduxForm({ form: 'profile' })(ProfileDataForm)

export default ProfileDataReduxForm;
