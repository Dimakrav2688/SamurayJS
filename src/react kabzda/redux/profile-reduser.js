import { usersAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SET_USER_PROFILE';

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 57 },
        { id: 3, message: "bla bla", likesCount: 57 },
        { id: 4, message: "Dadada", likesCount: 57 },
    ], // это к MyPosts елементам
    newPostText: '',
    profile: null,
}

const profileReduser = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                 ...state,
                 postsData: [...state.postsData, newPost],
                 newPostText: ''
                 }        
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }          
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    
}
}

export const addPostActionCreator = () => ({ type: ADD_POST, });
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const getUserProfile = (userId) =>(dispatch) => {
    usersAPI.getProfile(userId)    
            .then(response => {
                dispatch(setUsersProfile(response.data));  
            });
} ;
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReduser;










