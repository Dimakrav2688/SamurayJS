import { instance, GetItemsType, ResponseType} from './api'



export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>
    },
    // getProfile(userId: number) {
    //     console.warn('Obsolete metod. Please profileAPI object.')
    //     return profileAPI.getProfile(userId);
    // },

}