import React from "react";
import MyPostContainer from './MyPosts/MyPostsConteiner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../../Types/Types'

type PropsType ={
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {    
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} 
            status={props.status} updateStatus={props.updateStatus} 
            savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
            <MyPostContainer  />
            
                
        </div>
    );
}

export default Profile;


