import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import profileReduser from './profile-reduser'
import dialogsReduser from './dialogs-reduser'
import sidebarReduser from './sidebar-reduser'
import usersReduser from './users-reduser'
import authReduser from './auth-reduser'
import appReduser from './app-reduser'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
// import thunk from 'redux-thunk'

let rootReducers =  combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser,
})

type RootReduserType = typeof rootReducers
export type AppStateType = ReturnType<RootReduserType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends {[key: string]: (...args: any[])=> any}> =  ReturnType <PropertiesTypes<T>>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
//@ts-ignore
window.__store__= store

export default store

 