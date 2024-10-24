import React, { forwardRef } from "react";
import style from './seventh.module.scss'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";

const Seventh=forwardRef((props,ref)=>{
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
          />
        );
      }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
          />
        );
      }
    const settings = {
        className:style.slider,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
      };
    return(
        <div className={style.seventh} ref={ref}>
            <h3>Наши клиенты - наша гордость</h3>
            <div className="container">
                <Slider {...settings}>
                    <div className={style.card}>
                        <div className={style.logo}></div>
                        <div className={style.feedback}>
                            <div className={style.company}>
                                <p className={style.h}>Название компании</p>
                                <p className={style.p}>20/10/2024</p>
                            </div>
                            <p>Спасибо за отличный сервис и профессиональную поддержку. Пользуюсь не в первый раз услугами данной компании и с уверенностью могу порекомендовать друзьям и знакомым</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.logo}></div>
                        <div className={style.feedback}>
                            <div className={style.company}>
                                <p className={style.h}>Название компании</p>
                                <p className={style.p}>20/10/2024</p>
                            </div>
                            <p>Спасибо за отличный сервис и профессиональную поддержку. Пользуюсь не в первый раз услугами данной компании и с уверенностью могу порекомендовать друзьям и знакомым</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.logo}></div>
                        <div className={style.feedback}>
                            <div className={style.company}>
                                <p className={style.h}>Название компании</p>
                                <p className={style.p}>20/10/2024</p>
                            </div>
                            <p>Спасибо за отличный сервис и профессиональную поддержку. Пользуюсь не в первый раз услугами данной компании и с уверенностью могу порекомендовать друзьям и знакомым</p>
                        </div>
                    </div>
                </Slider>
            </div>
            
        </div>
    )
})

export default Seventh