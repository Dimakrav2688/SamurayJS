import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLenghtCreator } from '../../../../utils/validators/validator'
import { Textarea } from "../../Common/FromsControls/FormsControls";

const MyPosts = (props) => {
    let postsDataElements =
        props.postsData.map(postData => <Post key={postData.id} message={postData.message} likesCount={postData.likesCount} />);



    let onAddPost = (values) => {
        props.addPostData(values.newPostText);
    }

    const maxLength10 = maxLenghtCreator(10); // т.к.система не работает когда криейтор добавляем 
    //на прямую в валидатор ниже, создали 
    //новую переменную и её туда добавили а тут указали за хардженое значение не больше 10 символов.


    const AddNewPostForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="add Your message" name='newPostText' 
                    component={Textarea} validate={[required, maxLength10]} />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        )
    }

    const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);



    return (
        <div className={s.postsBlolk}>
            <div>
                <h4>My post</h4>
            </div>

            <div>
                <AddNewPostFormRedux onSubmit={onAddPost} />
            </div>

            <div className={s.posts}>
                {postsDataElements}
            </div>
        </div >
    );
}


export default MyPosts;

