import React, { forwardRef } from "react";
import style from './sixth.module.scss'
import world from '../../img/world.svg'
import { useTranslation} from 'react-i18next'

const Sixth=forwardRef((props,ref)=>{
    const {t}=useTranslation()

    return(
        <div className={style.sixth} ref={ref}>
            <div className="container">
                <p>{t("sixth_p")}</p>
                <img src={world} alt="world"/>
            </div>
        </div>
    )
})

export default Sixth