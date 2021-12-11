const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETHING = 'TOGGLE_IS_FETHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS ';


let initialState = {
    users: [
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

}

const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        case SET_USERS: {            
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {  
                
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {            
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETHING: {            
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {            
            return { 
                ...state, 
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id!=action.userId)
             }
            }
        default:
            return state;

    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETHING, isFetching })
export const toggleFollowingProgress= (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })


export default usersReduser;











// { id: 1, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Volodymyr_Zelensky_Official_portrait.jpg/250px-Volodymyr_Zelensky_Official_portrait.jpg',
//          follwed: false, fullname: 'Vladimir', status: 'I am a boss', location: { city: 'Kiev', country: 'Ukraine' },  },
//         { id: 2, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2825-10-2021%29_%28cropped%29.jpg/250px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2825-10-2021%29_%28cropped%29.jpg', 
//         follwed: true, fullname: 'VV Putin', status: 'Moj Pachan', location: { city: 'Moskov', country: 'Russia' },  },
//         { id: 3, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Viktor_Yanukovych_%2801910428%29_%28cropped%29.jpg/274px-Viktor_Yanukovych_%2801910428%29_%28cropped%29.jpg',
//          follwed: false, fullname: 'Dmitriy', status: 'I am separatuga', location: { city: 'Doneck', country: 'DNR' },  },
