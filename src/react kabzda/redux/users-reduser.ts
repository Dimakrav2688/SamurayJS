import { AppStateType, InferActionsTypes } from './redux-store';
import { usersAPI } from '../api/users-api'
import { aupdateObjectInArray } from '../../utils/objectHelpers'
import { UserType } from '../../Types/Types'
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

/*const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETHING = 'TOGGLE_IS_FETHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS ';*/





let initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalItemCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, //array of users ids

}
type InitialState = typeof initialState

const usersReduser = (state = initialState, action: ActionsTypes): InitialState => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: aupdateObjectInArray(state.users, action.userId, 'id', { followed: true })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: aupdateObjectInArray(state.users, action.userId, 'id', { followed: false })
            }
        case 'SET_USERS': {
            return { ...state, users: action.users }
        }
        case 'SET_CURRENT_PAGE': {

            return { ...state, currentPage: action.currentPage }
        }
        case 'SET_TOTAL_USERS_COUNT': {
            return { ...state, totalItemCount: action.count }
        }
        case 'TOGGLE_IS_FETHING': {
            return { ...state, isFetching: action.isFetching }
        }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;

    }
}

type ActionsTypes = InferActionsTypes<typeof actions>


export const actions = {
    followSuccess: (userId: number) => ({ type: 'FOLLOW', userId } as const),
    unfollowSuccess: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
    setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
    setUsersTotalCount: (totalItemCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', count: totalItemCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETHING', isFetching } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const),
}

 



type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> // это берется в документации
// там описывается типизация и эти значения для санок, если асинхронщина то есть промис, есть рут стейт, 
//unknown не ясно что, и ActionsTypes.

export const getUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(page))

        let data = await usersAPI.getUsers(page, pageSize);

        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setUsersTotalCount(data.totalCount));

    }
}

const _followUnfollowFlow = async (dispatch: DispatchType,
    userId: number,
    apiMethod: any,
    actionCreator: (userId: number) => ActionsTypes /*смотри типизацию екшенов выше*/) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId))
}


export const follow = (userId: number): ThunkType => {
    return async (dispatch: DispatchType) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: DispatchType) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
    }
}

export default usersReduser;











// { id: 1, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Volodymyr_Zelensky_Official_portrait.jpg/250px-Volodymyr_Zelensky_Official_portrait.jpg',
//          follwed: false, fullname: 'Vladimir', status: 'I am a boss', location: { city: 'Kiev', country: 'Ukraine' },  },
//         { id: 2, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2825-10-2021%29_%28cropped%29.jpg/250px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2825-10-2021%29_%28cropped%29.jpg',
//         follwed: true, fullname: 'VV Putin', status: 'Moj Pachan', location: { city: 'Moskov', country: 'Russia' },  },
//         { id: 3, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Viktor_Yanukovych_%2801910428%29_%28cropped%29.jpg/274px-Viktor_Yanukovych_%2801910428%29_%28cropped%29.jpg',
//          follwed: false, fullname: 'Dmitriy', status: 'I am separatuga', location: { city: 'Doneck', country: 'DNR' },  },
