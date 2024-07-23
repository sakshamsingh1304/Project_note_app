import React from 'react'

import BrandDarkImg from '../../../assets/brand-dark.svg'
import BrandLightImg from '../../../assets/brand-light.svg'
import styles from './brand.module.scss'

function BrandLogo(props){
    const {logoOnly, type = "light", className} =props;

    return (
        <article className={`${styles.brand} ${className}`}>
            <img src={type=="light" ? BrandLightImg : BrandDarkImg} alt='brand-logo'/>
            {!logoOnly ?(
                <h1>
                    Note.<span>me</span>
                </h1>
            ) : null}
        </article>
    )
}
export default BrandLogo