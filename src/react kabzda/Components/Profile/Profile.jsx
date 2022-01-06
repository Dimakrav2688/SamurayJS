import React from "react";
import MyPostContainer from './MyPosts/MyPostsConteiner';
// import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {    
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostContainer  />
            
                
        </div>
    );
}

export default Profile;


