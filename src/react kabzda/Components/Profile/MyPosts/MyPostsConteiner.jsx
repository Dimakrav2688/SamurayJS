import { connect } from "react-redux";
import { addPostActionCreator} from '../../../redux/profile-reduser';
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState();

//             let addPost = () => {
//                 store.dispatch(addPostActionCreator());
//             }

//             let onPostChange = (text) => {
//                 let action = updateNewPostTextActionCreator(text);
//                 store.dispatch(action);
//             }
//             return <MyPosts addPostData={addPost}
//                 updateNewPostText={onPostChange}
//                 postsData={state.profilePage.postsData}
//                 newPostText={state.profilePage.newPostText} />
//         }
//         }
//     </StoreContext.Consumer>
// }

const mapStateToProps = (state) =>
{
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostData: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }        
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;

// let state = props.store.getState();