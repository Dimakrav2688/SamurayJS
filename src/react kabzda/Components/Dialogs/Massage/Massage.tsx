import React from 'react';
import s from './../Dialogs.module.css';

type PropsType = {
    message: string
}

const Massage: React.FC<PropsType> = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
} // это к нижней части 


export default Massage;
