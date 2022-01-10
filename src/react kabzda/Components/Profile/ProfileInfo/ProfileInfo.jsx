import React, { useState } from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import UserPhoto from '../../../../assets/images/avatarka.png'
import ProfileDataReduxForm from './ProfileDataForm'





const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false);
            })
    }

    return (
        <div className={s.discriptionBlok}>
            <img src={profile.photos.large || UserPhoto} alt={'no img'} className={s.mainPhoto} />
            <div>
                {isOwner && <input type={'file'} onChange={mainPhotoSelected} />}
            </div>

            {editMode
                ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData goToEditMode={() => { setEditMode(true) }}
                    profile={profile}
                    isOwner={isOwner}
                />}

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Fuul name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About Me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactsTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>


    </div>
}


const Contact = ({ contactsTitle, contactValue }) => {
    return <div className={s.contact}> <b> {contactsTitle} </b>: {contactValue} </div>

}



export default ProfileInfo;
