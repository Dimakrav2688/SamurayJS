import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
    id: number
    image: string
    altname: string
    name: string
}

const DialogsItem: React.FC<PropsType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsimage}>
                <img src={props.image} alt={props.altname}></img>
                </div>
            <div>
            <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>

    );
} // это к верхней части кода


export default DialogsItem;
