import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'



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
                <ProfileStatus status={'Hello my friends'} />
            </div>
        </div>
    );
}
export default ProfileInfo;
