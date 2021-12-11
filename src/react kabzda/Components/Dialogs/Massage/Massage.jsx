import React from 'react';
import s from './../Dialogs.module.css';


const Massage = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
} // это к нижней части 


export default Massage;
