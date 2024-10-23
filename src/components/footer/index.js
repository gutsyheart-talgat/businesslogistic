import React from "react";
import style from './footer.module.scss'

export default function Footer(){
    return(
        <div className={style.footer}>
            <div className="container">
                <div className={style.content}>
                    <p>Business<span>Logistic</span></p>
                    <button><a href="https://wa.me/996558227877?text=hello!">Сделать заказ</a></button>
                </div>
            </div>
        </div>
    )
}