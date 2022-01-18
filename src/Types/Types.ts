import { AnyAction } from "redux"

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    fecebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
userId: number
lookingForAJob: boolean
lookingForAJobDescription: boolean
fullName: string
contacts: ContactsType
photos: PhotosType
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
    key: any 
}