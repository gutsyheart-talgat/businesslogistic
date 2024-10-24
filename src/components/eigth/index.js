import React, { forwardRef } from "react";
import style from './eigth.module.scss'
import { TextField } from "@mui/material";
import map from '../../img/map.jpg'
import Location from '../../img/Location.png'
import Call from '../../img/Call.png'
import Message from '../../img/Message.png'
import whatsapp from '../../img/whatsapp.png'
import twitter from '../../img/twitter.png'
import facebook from '../../img/facebook.png'

const Eigth= forwardRef((props,ref)=>{
    const right = [
        {id:1,name:"Адрес:", text: " Панфилова, 178 (БЦ ОРИОН 2)",img:Location},
        {id:1,name:"Телефон:", text: " +996707505822",img:Call},
        {id:1,name:"Почта:", text: "bizneslogistik820@gmail.com",img:Message}
    ]
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "34d15331-5d1e-487c-bc19-7468ab5f5625");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
    return(
        <div className={style.eigth} ref={ref}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.left}>
                        <div className={style.top}>
                            <p className={style.h}>Оставьте заявку</p>
                            <p className={style.p}>Оставьте заявку, и наш специалист <br/> свяжется с вами в течение 15 минут.</p>
                        </div>
                        {/* <div className={style.inputs}>
                            <TextField label="Ваше имя" className={style.input} variant="standard"/>
                            <TextField label="Ваш номер"  className={style.input} variant="standard"/>
                            <TextField label="Ваша почта" className={style.input} variant="standard"/>
                            <TextField label="Тип груза или комментарий"  className={style.input} multiline maxRows={3} variant="standard"/>
                        </div> */}
                        <form className={style.form} onSubmit={onSubmit}>
                            <input type="text" name="name" className={style.input} required placeholder="Ваше имя" autoComplete="off"/>
                            <input type="number" name="number" className={style.input} required placeholder="Ваш номер" autoComplete="off"/>
                            <input type="email" name="email" className={style.input} required placeholder="Ваша почта" autoComplete="off"/>
                            <textarea type="text" name="type" placeholder="Тип груза или комментарий" className={style.textarea} autoComplete="off"/>
                            <button type="submit">Сделать заказ</button>
                        </form>
                        
                    </div>
                    <div className={style.right}>
                        <img src={map} className={style.map}/>
                        <div className={style.info}>
                            {
                                right.map(el=>
                                    <div key={el.id} className={style.element}>
                                        <div className={style.img}><img alt={el.name} src={el.img}/></div>
                                        <div className={style.infoText}>
                                            <p className={style.name}>{el.name}</p>
                                            <p className={style.text}>{el.text}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className={style.media}>
                            <p className={style.mediaP}>Социальные сети</p>
                            <div className={style.icons}>
                                <img src={whatsapp} alt="whatsapp"/>
                                <img src={facebook} alt="facebook"/>
                                <img src={twitter} alt="twitter"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Eigth