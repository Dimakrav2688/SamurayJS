import React from "react";
import s from './Post.module.css';

type PropsType = {
    likesCount: number
    message: string
}

const Post: React.FC<PropsType> = ({ likesCount, message }) => {
    return (
        <div className={s.item}>
            <div>
                <img src='https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg'
                    alt={'img'} /> {message}
            </div>
            <div>
                <span>like</span> {likesCount}
            </div>
        </div>
    );
}
export default Post;
