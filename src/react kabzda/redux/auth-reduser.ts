import { Dispatch } from 'react';
import { ResultCodeForCaptchaEnum } from './../api/api'
import { AppStateType } from './redux-store'
import {  resultCodeEnum,  } from '../api/api'
import { authAPI } from '../api/auth-api'
import {  securityAPI } from '../api/security-api'
import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'
const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTHCA_URL_SUCCESS = 'GET_CAPTHCA_URL_SUCCESS'

// export type InitialStateType2 = {
//   userId: number | null
//   email: string | null
//   login: string | null
//   isAuth: boolean
//   captchaUrl: string | null
// }

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null
  // id: "" as number | null

}

export type InitialStateType = typeof initialState

const authReduser = (state = initialState, action: ActionsTypes):InitialStateType => {

  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTHCA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    
    default:
      return state;
  }
}




type setAuthUserDataActionPayloadType = {
  userId: number | null
  email: string  | null
  login: string | null
  isAuth: boolean
}
type setAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: setAuthUserDataActionPayloadType  
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean)
: setAuthUserDataActionType => ({
  type: SET_USER_DATA, 
  payload: { userId, email, login, isAuth }
});


type getCaptchaUrlSuccessActionType = {
type: typeof GET_CAPTHCA_URL_SUCCESS
payload: {captchaUrl: string}
}
export const getCaptchaUrlSuccess = (captchaUrl: string)
: getCaptchaUrlSuccessActionType => ({
  type: GET_CAPTHCA_URL_SUCCESS, payload: { captchaUrl }
});

type ActionsTypes = setAuthUserDataActionType |  getCaptchaUrlSuccessActionType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
 

export const getAuthUserData = ():ThunkType => async (dispatch: any) => {
  let meData = await authAPI.me();
  if (meData.resultCode === resultCodeEnum.Succses) {
    let { id, email, login } = meData.data
    dispatch(setAuthUserData(id, email, login, true));
  }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => 
async (dispatch: any) => {
  let loginData = await authAPI.Login(email, password, rememberMe, captcha)
  if (loginData.resultCode === resultCodeEnum.Succses) {
    dispatch(getAuthUserData())
  } else {
    if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrlSuccess(captcha))
    }
    
    let message = loginData.messages.length > 0 ? loginData.messages[0] : 'Something is wrong'
    dispatch(stopSubmit('login', { _error: message }))
  }

}

export const logout = (): ThunkType => async (dispatch: DispatchType) => {
  let response = await authAPI.Logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }

}

export const getCaptchaUrl = (): ThunkType => async (dispatch: DispatchType) => {
  let response = await securityAPI.getCaptchaUrl();

  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}



export default authReduser;