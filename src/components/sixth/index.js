import React, { forwardRef } from "react";
import style from './sixth.module.scss'
import world from '../../img/world.svg'
const Sixth=forwardRef((props,ref)=>{
    return(
        <div className={style.sixth} ref={ref}>
            <div className="container">
                <p>Направления грузовых перевозок</p>
                <img src={world} alt="world"/>
            </div>
        </div>
    )
})

export default Sixth