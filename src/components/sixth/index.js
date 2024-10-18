import React from "react";
import style from './sixth.module.scss'
import world from '../../img/world.svg'
export default function Sixth(){
    return(
        <div className={style.sixth}>
            <div className="container">
                <p>Направления грузовых перевозок</p>
                <img src={world} alt="world"/>
            </div>
        </div>
    )
}