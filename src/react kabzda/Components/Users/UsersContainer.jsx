import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reduser';
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';
// import { withAuthRedirectHOC } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux'
import {
    getUsersSelector, getPageSize, getTotalItemsCount,
    getCurrentPage, getIsFetching,
    getFollowingInProgress
} from '../../redux/users-selectors'



class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize } = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }
// было this.props.pageSize  почему стало {pageSize} = this.props === pageSize  не совсем ясно.. Димон памагити
    render() {

        return <>
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


let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalItemCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}



export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }),
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

