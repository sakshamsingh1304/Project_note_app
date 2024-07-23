import React from "react";
import {Icon} from '@iconify/react'
import styles from './button.module.scss'
function Button(props) {
    const {text, icon, handleClick, className, isDisabled} = props;
    return(
        <article className={`${styles.button} ${className}`} onClick={handleClick} disabled={isDisabled}>
            <Icon icon={icon} />
                <h3>{text}</h3>
            </article>
    )
}

export default Button 