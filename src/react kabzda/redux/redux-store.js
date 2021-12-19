import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReduser from './profile-reduser'
import dialogsReduser from './dialogs-reduser'
import sidebarReduser from './sidebar-reduser'
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
// import thunk from 'redux-thunk'

let reducers =  combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
});



export let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;

export default store;

 