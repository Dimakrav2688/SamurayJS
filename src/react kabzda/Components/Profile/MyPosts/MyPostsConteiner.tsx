import { connect } from "react-redux";
import { actions } from '../../../redux/profile-reduser';
import { AppStateType } from "../../../redux/redux-store";
import MyPosts, { DispatchPropsType, MapPropsType } from "./MyPosts";


const mapStateToProps = (state: AppStateType) =>
{
    return {
        postsData: state.profilePage.postsData      
    } 
}

let MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {addPostData: actions.addPostActionCreator})(MyPosts);

export default MyPostsContainer;



// let state = props.store.getState();

/* const mapDispatchToProps = (dispatch) => {
    //     return {
    //         addPostData: (newPostText) => {
    //             dispatch(actions.addPostActionCreator(newPostText))
    //         }        
    //     }
    // } упрости диспатч ибо только один он */