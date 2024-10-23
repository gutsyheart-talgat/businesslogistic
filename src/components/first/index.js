import React,{ forwardRef }  from "react";
import style from './first.module.scss'
import plane from '../../img/plane.svg'
import train from '../../img/train.svg'
import truck from '../../img/truck.svg'

const First=forwardRef ((props,ref)=>{
    return (
        <div className={`${style.first}`} ref={ref}>
            <div className="container">
                <div className={style.main}>
                    <h1>Грузоперевозки <span>по всему миру</span></h1>
                    <p>Мы обеспечиваем полный цикл перевозки, включая сертификацию</p>
                    <button className={style.btn}><a href="https://wa.me/996558227877?text=hello!">Сделать заказ</a></button>
                </div>
                <div className={style.footer}>
                    <div className={style.element}>
                        <div><img src={plane}/></div>
                        <p>Авиа перевозки</p>
                    </div>
                    <div className={style.line}/>
                    <div  className={style.element}>
                        <div><img src={train}/></div>
                        <p>ЖД перевозки</p>
                    </div>
                    <div className={style.line}/>
                    <div className={style.element}>
                        <div><img src={truck}/></div>
                        <p>Авто перевозки</p>
                    </div>
                </div>
            </div>
        
        </div>
    )
})

export default First