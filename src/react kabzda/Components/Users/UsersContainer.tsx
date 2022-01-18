import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers } from '../../redux/users-reduser';
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';
// import { withAuthRedirectHOC } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux'
import {
    getUsersSelector, getPageSize, getTotalItemsCount,
    getCurrentPage, getIsFetching,
    getFollowingInProgress
} from '../../redux/users-selectors'
import { UserType } from '../../../Types/Types';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalItemCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
    key?: any
}
type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
   
}
  
type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const { pageSize } = this.props
        this.props.getUsers(pageNumber, pageSize)
    }
    // было this.props.pageSize  почему стало {pageSize} = this.props === pageSize  не совсем ясно.. Димон памагити
    render() {

        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalItemCount={this.props.totalItemCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalItemCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


// <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps, { follow, unfollow, getUsers }),
    // withAuthRedirectHOC
)(UsersContainer)













/*let mapDispatchToProps = (dispatch) => {
return {
    follow: (usersId) => {
        dispatch(followAC(usersId))
    },
    unfollow: (usersId) => {
        dispatch(unfollowAC(usersId));
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
        dispatch(setUsersTotalCountAC(totalCount))
    },
   toggleIsFetching: (isFetching) => {
       dispatch(toggleIsFetchingAC(isFetching))
   },
}
} */

