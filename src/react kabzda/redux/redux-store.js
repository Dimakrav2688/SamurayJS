import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReduser from './profile-reduser'
import dialogsReduser from './dialogs-reduser'
import sidebarReduser from './sidebar-reduser'
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import appReduser from './app-reduser'
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
    app: appReduser,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;

 