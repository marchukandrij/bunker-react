import React, { useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { Paint } from './paint'
// Import Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'
import { changePage, loadPaints, loadAuthorsSlider, showModalAuthor } from './../state'
import { API_URL, MEDIA_URL } from  './../settings'

const AuthorSlider = () => {
    const authorsSlider = useSelector(state => state.navigator.authorsSlider);
    const dispatch = useDispatch();
    // load data on start
    useEffect(() => {
        if (!authorsSlider) {
            axios.get(API_URL + '/authors/get5')
                .then(res => 
                    { dispatch(loadAuthorsSlider(res.data)) })
        }
    });
    var SliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "ease-out"
    }
    var authors = [];
    if (authorsSlider) {
        // render authors 5 
        authors = authorsSlider.map((author) => 
            <div
                key={author.id} 
                className="main-authors-slider__slide" 
                onClick={() => dispatch(showModalAuthor(author.id))}>
                <div class="main-authors-slider__image">
                    <img src={ MEDIA_URL + author.image } alt="" />
                    <div className="authors__card-name">{ author.name }</div>    
                </div>
            </div>
        )
    }
    return (
        <div className="main-authors-slider__container">
            {authorsSlider &&
                <Slider { ...SliderSettings }>
                    { authors }
                </Slider>
            }
            <div className="main-authors-slider__more" 
                onClick={() => dispatch(changePage('authors'))}>
                Всі автори <img src={process.env.PUBLIC_URL + "/images/icon-arrow-right.svg"} alt=">" />
            </div>
        </div>
    )
}


export const PageMain = () => {
    const paints = useSelector(state => state.navigator.paints);
    const dispatch = useDispatch();
    // load data on start
    useEffect(() => {
        if (paints.length === 0) {
            axios.get(API_URL + '/paints/getstart')
                .then(res => 
                    {
                        const apaints = res.data;
                        dispatch(loadPaints(apaints))
                    })
        }
    });
    // render paints 
    const paintsList = paints.map((paint) =>
        <div className="paints__cell" key={ paint.id }>
            <Paint 
                src={ MEDIA_URL + paint.src }
                id={ paint.id }
                author={ paint.author }
                title={ paint.title }
            />
        </div>
    );
    // main slider 
    var mainSliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "ease-out"
    };
    return (
        <>
            <Slider className="main-slider" { ...mainSliderSettings }>
                <img className="main-slider__slide" src={process.env.PUBLIC_URL + "/images/main-slide-1.jpg"} alt=""/>
                <img className="main-slider__slide" src={process.env.PUBLIC_URL + "/images/main-slide-2.jpg"} alt="" />
                <img className="main-slider__slide" src={process.env.PUBLIC_URL + "/images/main-slide-3.jpg"} alt="" />
                <img className="main-slider__slide" src={process.env.PUBLIC_URL + "/images/main-slide-4.jpg"} alt="" />            
            </Slider>

            <div className="main-text">
                <div className="main-text__container">
                    <p>Колекція Бункермуз наповнюється добірними об'єктами українського сучасного мистецтва через діяльність однойменних галерей.</p>
                    <p>Підземна галерея Бункермуз у Тернополі заснована у 2013-му році, їй передувало два роки діяльності андеґраундного мистецького простору «Штуки». Знаково, що першою виставкою оновленого Бункермузу стала експозиція Дмитра Стецька «Вітрила часу» - перша персональна виставка майстра у рідному місті. Бункермуз позиціонує себе як динамічну та незаконсервовану арт-сцену, створену для представлення артекспозицій та інсталяцій, спілкування митців і глядачів, обміну ідеями.</p>
                    <p>Місія галереї — культпорятунок людства через транслювання відбірних вирізок концептуального мистецтва; введення у світовий артдискурс і формування естетичного світогляду та смаку; демаргіналізовування маргіналій; зміна рівнів дискурсів; операції на герметичності та ампутація стереотипів.</p>
                    <p>Через 6 років, організувавши понад 120 експозицій, Бункермуз вирішив повторити свій успіх вже у Білій Церкві, відкривши другу галерею сучасного мистецтва, атмосферний простір якої поєднує акустичність і масштабність.</p>
                    <img className="main-text__quote" src={process.env.PUBLIC_URL + "/images/icon-quote.svg"} alt='"'/>
                </div> 
            </div>

            <div className="paints">
                <div className="paints__container">
                    { paintsList }
                </div>
                <div className="paints__more" 
                    onClick={() => dispatch(changePage('galery'))}>
                    Більше картин <img src={process.env.PUBLIC_URL + "/images/icon-arrow-right.svg"} alt=">" />
                </div>
            </div>

            <div className="horizontal-divider"></div>

            <AuthorSlider />

            <div className="horizontal-divider"></div>
        </>
    )
}