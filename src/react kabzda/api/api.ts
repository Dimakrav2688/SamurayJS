import axios from 'axios'
import { UserType } from '../../Types/Types';



export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "0c0bf6ed-54c6-4295-8ee1-aa596ac404be" },
});


export enum resultCodeEnum {
    Succses = 0,
    Error =1
    }
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type ResponseType<D = {}, RC = resultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}




// любой get post delete возвращает промис.



/* then(response.data) сначала делаем запрос вего масива, далее мы пишем респонс  и передаём только масив дату, когда
заинсертили гетЮзерс, то там когда пишем респорс педаётся этот респонс с значением дата, это промис....

export const getUsers2 = (currentPage, pageSize) => {
    return instance.get(baseUrl + `follow?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data;
});
}; */