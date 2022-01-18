import React from "react";
import { useState } from "react";

import styles from './Paginator.module.css';

type PropsType = {
    totalItemCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNuber: number)=> void
    portionSize?: number
}


const Paginator: React.FC<PropsType> = ({ totalItemCount, pageSize, currentPage, onPageChanged, portionSize = 20 }) => {
    // const pages = [];
    // for (const i = 1; i <= 21; i++) {
    //     pages.push(i);
    // }
    
    const pagesCount = Math.ceil(totalItemCount / pageSize)

    const pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    // if(portionNumber === null) portionNumber = 1; если бы указывали что в стейте может быть и null ||||| 
    //в присвоении такое писали бы useState<number | null>(1);
    
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;



    return <div className={styles.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}> PREV </button>}
        {pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(page => {
                return <span className={`${styles.hover} ${currentPage === page && styles.selectedPage}`}
                    key={page}
                    onClick={() => onPageChanged(page)}>{page}</span>
            })}
            {portionCount > portionNumber && 
            <button onClick={() => {setPortionNumber(portionNumber + 1) } }> NEXT</button>}

    </div>
}

export default Paginator;
