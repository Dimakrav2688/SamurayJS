import { AppStateType } from './redux-store';
import {createSelector} from 'reselect'

export const getUserSuper = createSelector(() => {
    
}) 


export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users;
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
}

export const getTotalItemsCount = (state: AppStateType) => {
    return state.usersPage.totalItemCount;
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
}

export const getIsFetching  = (state: AppStateType) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress;
}