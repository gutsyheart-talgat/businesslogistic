import React,{forwardRef} from "react";
import style from './fifth.module.scss'
import Lock from '../../img/Lock.svg'
import truck from '../../img/truck.svg'
import Discount from '../../img/Discount.svg'
import Paper from '../../img/Paper.svg'
import Heart from '../../img/Heart.svg'
import Shield from '../../img/Shield.svg'

const Fifth = forwardRef((props,ref)=>{
    const elements = [
        {id:1,name:"Безопасность грузов:", text:"Наши специалисты обеспечивают 100% сохранность вашего груза на всех этапах транспортировки.",img:Lock},
        {id:2,name:"Доставка в срок:", text:"Мы гарантируем доставку вашего груза точно в срок, без задержек.",img:truck},
        {id:3,name:"Защита от переплат:", text:"Наша логистическая компания гарантирует подтверждение всех расходов клиенту.",img:Discount},
        {id:4,name:"Полный пакет документов:", text:"Мы предоставляем полный пакет документов для беспрепятственной перевозки через границы.",img:Paper},
        {id:5,name:"Персональный подход:", text:"Каждый клиент для нас важен. Мы предлагаем индивидуальные решения для каждого проекта.",img:Heart},
        {id:6,name:"Безопасность сделок:", text:"Наша логистическая компания предоставляет только надежные маршруты и проверенных поставщиков.",img:Shield}
    ]
    return(
        <div className={style.fifth} ref={ref}>
            <div className="container">
                <h3 className={style.h3}>Наши преимущества</h3>
                <div className={style.elements}>
                    {
                        elements.map(el=>
                            <div id={el.id} className={style.element}>
                                <div className={style.foto}><img src={el.img}/></div>
                                <h3>{el.name}</h3>
                                <p>{el.text}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
})

export default Fifth