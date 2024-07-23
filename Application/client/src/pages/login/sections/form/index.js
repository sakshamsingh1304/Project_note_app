import React, { useState } from 'react'

import BrandLogo from '../../../../components/shared/brand';
// import {Icon} from '@iconify/react';
import styles from './form.module.scss';
import Input from "../../../../components/atoms/input"
import Button from '../../../../components/atoms/button';
import { useNavigate } from 'react-router-dom';
function Form(){
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate()
    return(
        <section className={styles["form-container"]}>
            <BrandLogo />
            <div className={styles.form}>
            <Button 
                text="Join with google"
                icon="bi:google"
                className={styles.google}
            />
            <div className={styles.option}>
                <span>or join with email address</span>
            </div>
            <article className={styles.details}>
                <Input
                type="email"
                value={email} 
                placeholder={"Type your Email"}
                onChange={(e) => setEmail(e.target.value)}></Input>
                <Input
                type="password"
                value={password} 
                placeholder={"Type your password"}
                onChange={(e) => setPassword(e.target.value)}></Input>
            <Button 
                text="Join with email"
                icon="material-symbols:login"
                className={styles.emailBtn}
                handleClick={() => navigate("/notes")}
            />
            </article>
            </div>
        </section>
    )   
}

export default Form