import React from "react";

import styles from './Paginator.module.css';




let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
    // let pages = [];
    // for (let i = 1; i <= 21; i++) {
    //     pages.push(i);
    // }
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {pages.map(page => {
                return <span className={`${styles.hover} ${currentPage === page && styles.selectedPage}`}
                    onClick={() => onPageChanged(page)}>{page}</span>
            })}
        </div>
    </div>
}

export default Paginator;
