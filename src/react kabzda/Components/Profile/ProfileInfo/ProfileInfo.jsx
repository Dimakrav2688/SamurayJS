import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import UserPhoto from '../../../../assets/images/avatarka.png'
import { prototype } from "form-data";



const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.discriptionBlok}>
            <img src={profile.photos.large || UserPhoto} alt={'no img'} className={s.mainPhoto} />
            <div>
                {isOwner && <input type={'file'} onChange={mainPhotoSelected} />}
            </div>
            {/* <div>
                Looking for a job: {profile.}
            </div> */}

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    );
}
export default ProfileInfo;
