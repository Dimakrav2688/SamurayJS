import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reduser';
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';



class UsersContainer extends React.Component {

    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)        
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}



export default connect(mapStateToProps, 
    { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})(UsersContainer);












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