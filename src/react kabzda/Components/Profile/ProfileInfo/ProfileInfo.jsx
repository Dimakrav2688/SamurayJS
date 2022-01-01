import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'



const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    
    return (   
            <div className={s.discriptionBlok}>
                <img src={profile.photos.large} alt={'no img'} />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
    );
}
export default ProfileInfo;
