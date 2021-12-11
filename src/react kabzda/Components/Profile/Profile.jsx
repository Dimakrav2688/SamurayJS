import React from "react";
import MyPostContainer from './MyPosts/MyPostsConteiner';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
    // console.log('test', props)
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostContainer  />
            
                
        </div>
    );
}

export default Profile;


// postsData={props.profilePage.postsData} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} 