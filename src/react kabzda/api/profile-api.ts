import { instance, ResponseType } from "./api"
import { PhotosType, ProfileType } from '../../Types/Types';


type SavePhotoResponseDataType = {
    photos: PhotosType
} // там особенность сервера документалка не совпадает с реальным обектом. в дате сидит photos а далее описание типа PhotosType

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status/`, { status: status }).then(res => res.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)

        return instance.put<ResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ResponseType>(`profile`, profile).then(res => res.data)
    }
}