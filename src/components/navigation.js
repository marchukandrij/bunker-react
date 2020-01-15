import React, { useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { changePage, showModalMenu, loadCustomData } from './../state'
import axios from 'axios'
import { API_URL } from  './../settings'

export const Header = () => {
    const currentPage = useSelector(state => state.navigator.currentPage);
    const dispatch = useDispatch();
    useEffect(() => {
        let ares = 'BunkerMuz';
        if (currentPage === 'main') { ares += ' | Головна ' };
        if (currentPage === 'galery') { ares += ' | Галерея' };
        if (currentPage === 'authors') { ares += ' | Автори' };
        if (currentPage === 'background') { ares += ' | Беґраунд' };
        if (currentPage === 'contact') { ares += ' | Контакти' };       
        document.title = ares;
    });
    function getClass(page) {
        return 'header__menu-item' + ( currentPage === page ? ' header__menu-item--active':'');
    }
    return (
    <>
        <div className="header">
            <div className="header__container">
                <div className="header__logo" 
                    onClick={() => dispatch(changePage('main'))}>
                    <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="BunkerMuz"/>
                </div>
                <div className="header__menu">
                    <div className={getClass('main')}
                        onClick={() => dispatch(changePage('main'))}>
                        Головна
                    </div>
                    <div className={getClass('galery')}
                        onClick={() => dispatch(changePage('galery'))}>
                        Галерея
                    </div>
                    <div className={getClass('authors')}
                        onClick={() => dispatch(changePage('authors'))}>
                        Автори
                    </div>
                    <div className={getClass('background')}
                        onClick={() => dispatch(changePage('background'))}>
                        Беґраунд
                    </div>
                    <div className={getClass('contact')}
                        onClick={() => dispatch(changePage('contact'))}>
                        Контакти
                    </div>
                </div>
                <div className="header__burger" 
                    onClick={() => dispatch(showModalMenu())}>
                    <img src={process.env.PUBLIC_URL + "/images/icon-burger.svg"} alt="+"/>
                </div>
            </div>
        </div>

        
    </>
    )
}

export const Footer = () => {
    const customData = useSelector(state => state.navigator.customData);
    const dispatch = useDispatch();
    // load data on start
    useEffect(() => {
        if (!customData) {
            axios.get(API_URL + '/custom/getdata')
                .then(res => 
                    {
                        const apaints = res.data;
                        dispatch(loadCustomData(apaints))
                    })
        }
    })
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__logos">
                    <img src={process.env.PUBLIC_URL + "/images/logo-white.svg"} alt="+"/>
                    <div className="footer__socials">
                        {customData &&
                            <>
                                <a href={ customData.facebook_page } target="blank"><img src={process.env.PUBLIC_URL + "/images/icon-facebook.svg"} alt="+" /></a>
                                <a href={ customData.instagram_page } target="black"><img src={process.env.PUBLIC_URL + "/images/icon-instagram.svg"} alt="+" /></a>
                            </>
                        }
                    </div>
                </div>
                <div className="footer__navs">
                    <div className="footer__navs-item" onClick={() => dispatch(changePage('main'))}>
                        Головна
                    </div>
                    <div className="footer__navs-item" onClick={() => dispatch(changePage('galery'))}>
                        Галерея
                    </div>
                    <div className="footer__navs-item" onClick={() => dispatch(changePage('authors'))}>
                        Автори
                    </div>
                    <div className="footer__navs-item" onClick={() => dispatch(changePage('background'))}>
                        Беґраунд
                    </div>
                    <div className="footer__navs-item" onClick={() => dispatch(changePage('contact'))}>
                        Контакти
                    </div>
                </div>
                <div className="footer__contacts">
                    {customData &&
                        <>
                            <div className="footer__contacts-item">{ customData.phone }</div>
                            <div className="footer__contacts-item">{ customData.address }</div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}