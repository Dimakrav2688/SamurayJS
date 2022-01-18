import { FormAction, stopSubmit } from "redux-form";
import { usersAPI } from "../api/users-api";
import { profileAPI } from "../api/profile-api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";



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

const profileReduser = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
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
        case 'SET_USER_PROFILE': {
            return { ...state, profile: action.profile }
        }
        case 'SET_STATUS': {
            return { ...state, status: action.status }
        }
        case 'DELETE_POST': {
            return { ...state, postsData: state.postsData.filter(post => post.id != action.postId) }
        }
        case 'SAVE_PHOTO_SUCCESS': {
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
        }

        default:
            return state;

    }
}



export const actions = {
    addPostActionCreator: (newPostText: string) => ({ type: 'ADD_POST', newPostText } as const),
    setUsersProfile: (profile: ProfileType) => ({ type: 'SET_USER_PROFILE', profile } as const),
    setStatus: (status: string) => ({ type: 'SET_STATUS', status } as const),
    deletePost: (postId: number) => ({ type: 'DELETE_POST', postId } as const),
    savePhotoSuccess: (photos: PhotosType) => ({ type: 'SAVE_PHOTO_SUCCESS', photos } as const)
}

type ActionsType = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsType | FormAction>


export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(actions.setUsersProfile(data))

};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))

};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status))
    };
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    };
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)

    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId))
        }
        else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }))
        return Promise.reject(data.messages[0])
    }
}

export default profileReduser;










