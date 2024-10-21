import React from "react";
import style from './first.module.scss'
import logo from '../../img/BusinessLogistic.svg'


export default function Header ({two,three,five,six,seven}){
    React.useEffect(()=>{
       console.log(two,'two')
       console.log(three,'three')
       console.log(five,'five')
       console.log(six,'six')
       console.log(seven,'seven')

    },[])
    const scrollHandler = (elRef)=>{
        window.scrollTo({top:elRef.current.offsetTop,behavior:"smooth"})
    }
    return(
        <header className={style.header}>
            <a href="#first"><img src={logo} /></a>
            <menu>
                <p className={style.reference} onClick={()=>scrollHandler(two)}>О нас</p>
                <p className={style.reference} onClick={()=>scrollHandler(three)}>Услуги</p>
                <p className={style.reference} onClick={()=>scrollHandler(five)}>Преимущества</p>
                <p className={style.reference} onClick={()=>scrollHandler(six)}>Направления</p>
                <p className={style.reference} onClick={()=>scrollHandler(seven)}>Клиенты</p>
            </menu>
            <p>+996 777 77 77 77</p>
        </header>
    )
}