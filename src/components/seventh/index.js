import React from "react";
import style from './seventh.module.scss'


export default function Seventh(){

    return(
        <div className={style.seventh}>
            <h3>Наши клиенты - наша гордость</h3>
            <div className={style.card}>
                <div className={style.logo}></div>
                <div className={style.feedback}>
                    <div className={style.company}>
                        <p className={style.h}>Название компании</p>
                        <p className={style.p}>20/10/2024</p>
                    </div>
                    <p>Спасибо за отличный сервис и профессиональную поддержку. Пользуюсь не в первый раз услугами данной компании и с уверенностью могу порекомендовать друзьям и знакомым</p>
                </div>
            </div>
            
        </div>
    )
}