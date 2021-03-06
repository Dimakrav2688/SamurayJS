import { instance, ResponseType, resultCodeEnum, ResultCodeForCaptchaEnum } from './api';


type MeResponseDataType = {
    id: number 
    email: string 
    login: string 
}
type LoginResponseDataType = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get <ResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data);
    },
    Login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<ResponseType<LoginResponseDataType, resultCodeEnum | ResultCodeForCaptchaEnum>>(`auth/login`, { email, password, rememberMe, captcha })
            .then(res => res.data)
    },
    Logout() {
        return instance.delete(`auth/login`);
    }
}