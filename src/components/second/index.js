import React, { forwardRef } from "react";
import style from './second.module.scss'
import second from '../../img/second.jpg'
const Second = forwardRef ((props,ref)=>{
    return(
        <div className={style.second} ref={ref}>
            <div className='container'>
                <div className={style.content}>
                    <img src={second}/>
                    <div className={style.text}>
                        <h3>О нашей компании:</h3>
                        <div>
                            <p>Наша главная цель - обеспечение бесперебойных и безопасных поставок наших клиентов “под ключ”:</p>
                            <ul >
                                <li>Координация всех участников процесса</li>
                                <li>Контроль движения груза</li>
                                <li>Взаимодействие с государственными органами для получения необходимых документов</li>
                                <li>Отправка грузов покупателю</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
 })

export default Second