import React from "react";
import style from './header.module.scss'
import logo from '../../img/BusinessLogistic.svg'


export default function Header ({first,two,three,five,six,seven,eigth}){
    React.useEffect(()=>{

        const head = document.getElementById('header')

        window.addEventListener('scroll',function(){
            const scrollPos = window.scrollY
            console.log(scrollPos)
            if(scrollPos>48){
                head.classList.add('head-fixed')
            } else{
                head.classList.remove('head-fixed')
            }
            if(scrollPos>1086){
                head.classList.add("head-back")
            } else{
                head.classList.remove("head-back")
            }
        })

    },[])
    const scrollHandler = (elRef)=>{
        window.scrollTo({top:elRef.current.offsetTop,behavior:"smooth"})
    }
    return(
        <div className={style.headerBack} id="header">
            <div className="container">
                <header className={style.header}>
                    <p onClick={()=>scrollHandler(first)} className={style.logo}><img src={logo} /></p>
                    <menu className={style.menu}>
                        <p className={style.reference} onClick={()=>scrollHandler(two)}>О нас</p>
                        <p className={style.reference} onClick={()=>scrollHandler(three)}>Услуги</p>
                        <p className={style.reference} onClick={()=>scrollHandler(five)}>Преимущества</p>
                        <p className={style.reference} onClick={()=>scrollHandler(six)}>Направления</p>
                        <p className={style.reference} onClick={()=>scrollHandler(seven)}>Клиенты</p>
                    </menu>
                    <p className={style.phone} onClick={()=>scrollHandler(eigth)}>КОНТАКТЫ</p>
                </header>
            </div>
        </div>
    )
}