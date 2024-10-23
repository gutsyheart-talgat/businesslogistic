import React from "react";
import style from './fourth.module.scss'

export default function Fourth({eigth}){
    const scrollHandler = (elRef)=>{
        window.scrollTo({top:elRef.current.offsetTop,behavior:"smooth"})
    }
    return (
        <div className={style.fourth}>
            <h3>Если Ваш груз готов к отправке</h3>
            <p>Заполните Заявку и получите цену на свою перевозку</p>
            <button onClick={()=>scrollHandler(eigth)}>Заполнить заявку</button>
        </div>
    )
}