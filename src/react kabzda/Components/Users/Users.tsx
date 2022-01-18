import React from "react";
import { UserType } from "../../../Types/Types";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


type PropsType = {
    totalItemCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNuber: number)=> void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow:(userId: number) => void
}
    


let Users: React.FC<PropsType> = ({ totalItemCount, pageSize, currentPage, onPageChanged,
    users, ...props }) => {


    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemCount={totalItemCount} pageSize={pageSize} />
        <div>
            {
                users.map(user => <User user={user}
                    // key={users.id}
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
