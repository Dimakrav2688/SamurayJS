import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";




let Users = ({ totalItemCount, pageSize, currentPage, onPageChanged,
    users, ...props }) => {


    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemCount={totalItemCount} pageSize={pageSize} />
        <div>
            {
                users.map(user => <User user={user}
                    key={users.id}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
                )
            }
        </div>
    </div>
}

export default Users;
