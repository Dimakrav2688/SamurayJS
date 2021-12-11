import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    // debugger;
    // console.log(typeof  props.updateNewPostText)
        let postsDataElements =
        props.postsData.map(postData => <Post key={postData.id} message={postData.message} likesCount={postData.likesCount} />);


    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPostData();
    }

let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
   }



    return (
        <div className={s.postsBlolk}>
            <div>
                <h4>My post</h4>
            </div>

            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder="it's our placeholder"> </textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsDataElements}
            </div>
        </div >
    );
}
export default MyPosts;

