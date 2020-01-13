import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { changePage } from './../state'

export const Header = () => {
    const currentPage = useSelector(state => state.navigator.currentPage);
    const dispatch = useDispatch();
    const [modalState, changeModal] = useState(false)
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
                <div className="header__burger" onClick={() => changeModal(true)}>
                    <img src={process.env.PUBLIC_URL + "/images/icon-burger.svg"} alt="+"/>
                </div>
            </div>
        </div>
        {modalState &&
            <div class="modal-cover" onClick={() => changeModal(false)}>
                <div className="header__burger-menu">
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
                    <img className="header__burger-menu-logo" 
                        src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="BunkerMuz"/>
                </div>
            </div>
        }

    </>)
}