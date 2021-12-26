import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div>
            {/* <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqGXWxnqPFnard5hLpVbESctI66fKrfJ8Bw&usqp=CAU' alt='' />
            </div> */}
            <div className={s.discriptionBlok}>
                <img src={props.profile.photos.large} />
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}
export default ProfileInfo;
