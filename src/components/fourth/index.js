import React from "react";
import style from './fourth.module.scss'

export default function Fourth(){
    return (
        <div className={style.fourth}>
            <h3>Если Ваш груз готов к отправке</h3>
            <p>Заполните Заявку и получите цену на свою перевозку</p>
            <button>Заполнить заявку</button>
        </div>
    )
}