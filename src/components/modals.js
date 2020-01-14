import React from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { hideModal, changePage, updateModalData, showModalAuthor } from './../state'
import axios from 'axios'
import { API_URL, MEDIA_URL } from  './../settings'

const ModalMenu = () => { 
    const currentPage = useSelector(state => state.navigator.currentPage);
    const modalType = useSelector(state => state.navigator.modalType);
    const dispatch = useDispatch();
    function getClass(page) {
        return 'header__menu-item' + ( currentPage === page ? ' header__menu-item--active':'');
    }
    let modalClass = "header__burger-menu" + (modalType === 'menu' ? "": " header__burger-menu--hide");
    return (
        <div className={ modalClass }>
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
                onClick={() => dispatch(changePage('main'))}
                src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="BunkerMuz" />
        </div>
    )
}

const ModalPaint = () => { 
    //const [morePaints, setMorePaints] = useState([])
    const modalData = useSelector(state => state.navigator.modalData);
    const dispatch = useDispatch();
    if (typeof(modalData) === 'number') {
        // дані про картину
        axios.get( API_URL + '/paints/detail/'+modalData)
            .then(res => 
                {
                    const apaint = res.data;
                    dispatch(updateModalData(apaint))
                })
    } else {
        // if (morePaints.length === 0) {
        //     // інші картини автора
        //     axios.get( API_URL + '/paints/byauthor/'+modalData.author_id)
        //         .then( res => { setMorePaints(res.data) } )
        // }
    }
    return (
        <>
            { typeof(modalData) !== 'number' && 
                <div className="modal-paint">
                    <div className="modal-paint__image">
                        <img src={ MEDIA_URL + modalData.src } alt="" />
                    </div>
                    <div className="modal-paint__data">
                        <div className="modal-paint__title">{ modalData.title }</div>
                        <div 
                            onClick={() => dispatch(showModalAuthor( modalData.author_id))}
                            className="modal-paint__author">
                            { modalData.author }
                        </div>
                        <div className="modal-paint__text">{ modalData.material }</div>
                        <div className="modal-paint__text">{ modalData.size }</div>
                        <div className="modal-paint__text">{ modalData.price }</div>
                        
                    </div>
                </div>
            }
            <div className="modal-paint__more">Більше картин автора</div>
        </>
    )
}

const ModalAuthor = () => { 
    const modalData = useSelector(state => state.navigator.modalData);
    const dispatch = useDispatch();
    var title_text = [];
    var ahistory = [];
    if (typeof(modalData) === 'number') {
        // дані про автора
        axios.get( API_URL + '/authors/detail/'+modalData)
            .then(res => 
                {
                    const aauthor = res.data;
                    dispatch(updateModalData(aauthor))
                })
    } else {
        title_text = modalData.title_text.map((text, index) => 
            <div 
                key={index} 
                className="modal-author__text">
                { text }   
            </div>
        )
        ahistory = modalData.history.map((text, index) => 
            <div 
                key={index} 
                className="modal-author__history">
                { text }   
            </div>
        )
    }

    return (
        <>
            { typeof(modalData) !== 'number' &&
                <> 
                    <div className="modal-author">
                        <div className="modal-author__image">
                            <img src={ MEDIA_URL + modalData.image } alt="" />
                        </div>
                        <div className="modal-author__data">
                            <div className="modal-author__name">{ modalData.name }</div>
                            { title_text }
                        </div>
                    </div>
                    { ahistory }
                </>
            }   
        </>
    )
}

const ModalDialog = () => {  
    const modalType = useSelector(state => state.navigator.modalType);
    let modalClass = "modal-dialog" + 
        ((modalType === 'paint') || (modalType === 'author') ? "": " modal-dialog--hide");
    return (
        <div className={ modalClass }>
            <div className="modal-dialog__container">
                <div className="modal-dialog__close">
                    <img src={process.env.PUBLIC_URL + "/images/icon-close.svg"} alt='x' />
                </div>
                <div className="modal-dialog__content">
                    {modalType === 'paint' &&
                        <ModalPaint></ModalPaint>
                    }
                    {modalType === 'author' &&
                        <ModalAuthor></ModalAuthor>
                    }
                </div>
            </div>

        </div>
    )
}

export const ModalCover = (props) => {
    const modalWindow = useSelector(state => state.navigator.modalWindow);
    const dispatch = useDispatch();
    let modalClass = "modal-cover" + (modalWindow ? "": " modal-cover--hide");
    return (
        <div className={ modalClass }>
            <div className="modal-cover__container" 
                onClick={() => dispatch(hideModal())}>

                <ModalMenu></ModalMenu>
                <ModalDialog></ModalDialog>

            </div>
        </div>
    )
}
