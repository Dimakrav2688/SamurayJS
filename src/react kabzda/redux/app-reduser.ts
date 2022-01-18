import { AppStateType } from './redux-store';
import { Dispatch } from 'redux';
import { getAuthUserData } from "./auth-reduser";
import { ThunkAction } from 'redux-thunk';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


export type  initialStateType = {
  initialized: boolean
}
let initialState: initialStateType = {
  initialized: false
}



const appReduser = (state = initialState, action: any):initialStateType  => {

  switch (action.type) {
    case INITIALIZED_SUCCESS:

      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }
}

type initializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): initializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS
});

type DispatchTypes = Dispatch<initializedSuccessActionType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, initializedSuccessActionType >

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess())
    });


}




export default appReduser;