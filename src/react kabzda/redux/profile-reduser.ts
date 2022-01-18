import { stopSubmit } from "redux-form";
import { usersAPI } from "../api/users-api";
import { profileAPI } from "../api/profile-api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const DELETE_POST = 'DELETE_POST'

type PostDataType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    github: string
    vk: string
    fecebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string | null
    large: string | null
}
type ProfileType = {
userId: number
lookingForAJob: boolean
lookingForAJobDescription: boolean
fullName: string
contacts: ContactsType
photos: PhotosType
}


let initialState = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 57 },
        { id: 3, message: "bla bla", likesCount: 57 },
        { id: 4, message: "Dadada", likesCount: 57 },
    ] as Array<PostDataType>, // это к MyPosts елементам    
    profile: null as ProfileType | null,
    status: '',
    savePhoto: '',
    newPostText: '',
}
export type InitialStateType = typeof initialState

const profileReduser = (state = initialState, action: any): InitialStateType  => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],

            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case DELETE_POST: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType} 
        }
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
        }

        default:
            return state;

    }
}

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({ type: ADD_POST, newPostText });

type SetUsersProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType // мы его указали в самом верху по этому сразу присваиваем логику.
}
export const setUsersProfile = (profile: ProfileType): SetUsersProfileActionType => ({ type: SET_USER_PROFILE, profile });

type SetStatusAtionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusAtionType  => ({ type: SET_STATUS, status });

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})

type SavePhotoSuccess = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType //мы его указали в самом верху по этому сразу присваиваем логику.
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccess => ({ type: SAVE_PHOTO_SUCCESS, photos });




export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUsersProfile(data));

};

export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));

};

export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    };
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    };
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }))
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReduser;










