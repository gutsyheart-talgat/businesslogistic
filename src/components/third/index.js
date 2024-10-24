import React, { forwardRef } from "react";
import style from './third.module.scss'
import logistic from '../../img/logistic.png'
import customs from '../../img/customs.png'
import certificate from '../../img/certificate.png'
import consult from '../../img/consult.png'
import Logistic from '../../img/logistic.png'

const Third = forwardRef((props,ref)=>{
    const element = [
        {id:1, name: "Международные грузоперевозки", text: "Мы помогаем нашим клиентам с  консолидированной и полной загрузкой, разгрузкой, перегрузкой и упаковкой грузов", img:Logistic},
        {id:2, name: "Таможенное оформление", text: "Оформление грузов таможенными брокерами.Таможенная очистка грузов, в том числе санкционные грузы", img:customs},
        {id:3, name: "Сертификация", text: "Получение разрешительных документов в государственных органах Кыргызской Республики для импорта и экспорта. получение декларации соответствия, сертификатов соответствия и пр.", img:certificate},
        {id:4, name: "Консультации", text: "Наша компания помогает по вопросам таможенного, налогово законодательных моментов по Кыргызской Республике, Евразийскому экономическому союзу и Всемирной торговой организации", img:consult},
        {id:5, name: "Страхование", text: "По запросу клиентов обеспечиваем страхование грузов через партнерские страховые комплексы", img:logistic},
    ]
    return(
        <div className={style.third} ref={ref}>
            <div className="container">
                <h3 className={style.zagolovok}>Услуги, предоставляемые нами</h3>
                <div className={style.elements}>
                    {
                        element.map((el)=>
                        <div id={el.id} className={style.element}>
                            <div className={style.elFoto}>
                                <img src={el.img} ></img>
                                <h3 className={style.elName}>{el.name}</h3>
                            </div>
                            <p className={style.elText}>{el.text}</p>
                        </div>
                    )
                    }
                </div>
                <div className={style.button}>
                    <button><a href="https://wa.me/996558227877?text=hello!">Сделать заказ</a></button>
                </div>
            </div>
        </div>
    )
})

export default Third