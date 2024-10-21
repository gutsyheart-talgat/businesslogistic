import React from "react";
import style from './first.module.scss'
import plane from '../../img/plane.svg'
import train from '../../img/train.svg'
import truck from '../../img/truck.svg'
import HeadeR1 from "./HeadeR1";
// import Second from './components/second';
// import Third from './components/third';
// import Fifth from './components/fifth';
// import Seventh from './components/seventh';
// import Footer from './components/footer';
// import Eigth from './components/eigth';
// import Sixth from './components/sixth';
export default function First ({second,third,fifth,sixth,seventh}){
    return (
        <div className={`${style.first}`} id="first">
            <div className="container">
                <HeadeR1 two={second} three={third} five={fifth} six={sixth} seven={seventh}/>
                <div className={style.main}>
                    <h1>Грузоперевозки <span>по всему миру</span></h1>
                    <p>Мы обеспечиваем полный цикл перевозки, включая сертификацию</p>
                    <button>Сделать заказ</button>
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
}