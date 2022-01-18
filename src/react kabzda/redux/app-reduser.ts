import { AppStateType } from './redux-store';
import { Dispatch } from 'redux';
import { getAuthUserData } from "./auth-reduser";
import { ThunkAction } from 'redux-thunk';
import { InferActionsTypes } from './redux-store'




export type InitialStateType = typeof initialState

let initialState = {
  initialized: false
}
type ActionsType = InferActionsTypes<typeof actions>


const appReduser = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
    case 'INITIALIZED_SUCCESS':

      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }
}



export const actions = {
  initializedSuccess: () => ({ type: 'INITIALIZED_SUCCESS' } as const)
}

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise])
    .then(() => {
      dispatch(actions.initializedSuccess())
    });


}




export default appReduser;