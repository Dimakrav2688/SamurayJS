import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import AddPostForm, {AddPostFormValuesType} from './AddPostForm/AddPostForm'
import {PostDataType} from '../../../../Types/Types'

export type MapPropsType = {
    postsData: Array<PostDataType>    
}
export type DispatchPropsType = {    
    addPostData: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType > =  (props => {
    let postsDataElements =
        [...props.postsData]
        .reverse()
        .map(postData => <Post key={postData.id} message={postData.message} likesCount={postData.likesCount} />);



    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPostData(values.newPostText);
    }

  
    return (
        <div className={s.postsBlolk}>
            <div>
                <h4>My post</h4>
            </div>
            <div>
                <AddPostForm onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                {postsDataElements}
            </div>
        </div >
    );
})

const MyPostMemorized = React.memo(MyPosts)

export default MyPostMemorized;

