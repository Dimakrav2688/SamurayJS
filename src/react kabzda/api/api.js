import * as axios from 'axios'



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "0c0bf6ed-54c6-4295-8ee1-aa596ac404be" },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)            
    },

}

export const authAPI = {
    me() {
     return   instance.get(`auth/me`)
    }
}

/* then(response.data) сначала делаем запрос вего масива, далее мы пишем респонс  и передаём только масив дату, когда
заинсертили гетЮзерс, то там когда пишем респорс педаётся этот респонс с значением дата, это промис....

export const getUsers2 = (currentPage, pageSize) => {
    return instance.get(baseUrl + `follow?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data;
});
}; */