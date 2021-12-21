import { authAPI } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

}



const authReduser = (state = initialState, action) => {
  
    switch (action.type) {
        case SET_USER_DATA:
           
            return {
                ...state,
                ...action.payload,
                

            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: 
    {userId, email, login, isAuth} });

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
    .then(response => {        
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
}


export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.Login(email, password, rememberMe, )
    .then(response => {        
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
    })
}

export const logout = (email, password, rememberMe, isAuth) => (dispatch) => {
    authAPI.Logout()
    .then(response => {        
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData(null, null, null, false));
      }
    })
}

export default authReduser;