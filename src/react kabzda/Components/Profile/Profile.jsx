import React from "react";
import MyPostContainer from './MyPosts/MyPostsConteiner';
// import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {    
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} 
            status={props.status} updateStatus={props.updateStatus} 
            savePhoto={props.savePhoto}/>
            <MyPostContainer  />
            
                
        </div>
    );
}

export default Profile;


