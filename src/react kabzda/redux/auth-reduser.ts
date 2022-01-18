import { ResultCodeForCaptchaEnum } from './../api/api'
import { InferActionsTypes, BaseThunkType } from './redux-store'
import { resultCodeEnum, } from '../api/api'
import { authAPI } from '../api/auth-api'
import { securityAPI } from '../api/security-api'
import { stopSubmit } from 'redux-form'


let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null
  // id: "" as number | null

}

export type InitialStateType = typeof initialState

const authReduser = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
    case 'SET_USER_DATA':
    case 'GET_CAPTHCA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state;
  }
}

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType <typeof stopSubmit> >


export const actions = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET_USER_DATA',
    payload: { userId, email, login, isAuth }
  } as const),

  getCaptchaUrlSuccess: (captchaUrl: string) => ({
    type: 'GET_CAPTHCA_URL_SUCCESS', payload: { captchaUrl }
  } as const),
}


export const getAuthUserData = (): ThunkType  => async (dispatch) => {
  let meData = await authAPI.me();
  if (meData.resultCode === resultCodeEnum.Succses) {
    let { id, email, login } = meData.data
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>
  async (dispatch) => {
    let loginData = await authAPI.Login(email, password, rememberMe, captcha)
    if (loginData.resultCode === resultCodeEnum.Succses) {
      dispatch(getAuthUserData())
    } else {
      if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
        dispatch(actions.getCaptchaUrlSuccess(captcha))
      }

      let message = loginData.messages.length > 0 ? loginData.messages[0] : 'Something is wrong'
      dispatch(stopSubmit('login', { _error: message }))
    }

  }

export const logout = ():ThunkType => async (dispatch) => {
  let response = await authAPI.Logout();

  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }

}

export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
  let data = await securityAPI.getCaptchaUrl()

  const captchaUrl = data.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}



export default authReduser;














///////////////////////Старая локальная типизация как пример на память/////////////////////
/*
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
*/