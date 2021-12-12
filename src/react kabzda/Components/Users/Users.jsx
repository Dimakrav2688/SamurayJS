import React from "react";
import UserPhoto from '../../../assets/images/avatarka.png';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';



let Users = (props) => {


    let pages = [];
    for (let i = 1; i <= 21; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(page => {
                return <span className={`${styles.hover} ${props.currentPage === page && styles.selectedPage}`}
                    onClick={() => props.onPageChanged(page)}>{page}</span>
            })}
        </div>
        {
            props.users.map(user => <div key={user.id} >
                <span>
                    <NavLink to={'profile/' + user.id}>
                        <div>
                            <img src={user.photos.small ? user.photos.small : UserPhoto} alt={user.id} className={styles.userPhoto} />
                        </div>
                    </NavLink>

                    {user.followed
                        ? <button disabled={props.followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => {props.unfollow(user.id)}} >
                                Unfollow</button>

                        : <button disabled={props.followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => {props.follow(user.id)}} >
                                Follow</button>
                    }


                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>
}

export default Users;
