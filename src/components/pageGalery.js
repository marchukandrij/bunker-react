import React, { useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { Paint } from './paint'
import axios from 'axios'
import { loadPaints, appendPaints } from './../state'
import { API_URL, MEDIA_URL } from  './../settings'

export const PageGalery = () => {
    const paints = useSelector(state => state.navigator.paints);
    const dispatch = useDispatch();
    useEffect(() => {
        if (paints.length === 0) {
            axios.get( API_URL + '/paints/getstart')
                .then(res => 
                    {
                        const apaints = res.data;
                        dispatch(loadPaints(apaints))
                    })
        }
    });
    // render paints 
    const paintsList = paints.map((paint) =>
        <div className="paints__cell">
            <Paint 
                src={ MEDIA_URL + paint.src }
                id={ paint.id }
                author={ paint.author }
                title={ paint.title }
            />
        </div>
    );
    // append paints and switch to galery
    function loadMorePaits() {
        let paintsCount = paints.length;
        return () => {
            axios.get( API_URL + '/paints/get/'+paintsCount+'/8')
                .then(res => 
                    {
                        const apaints = res.data;
                        dispatch(appendPaints(apaints))
                    })
        }
    }
    return (
        <>
        <div className="paints">
            <div className="paints__container">
                { paintsList }
            </div>
            <div className="paints__more" onClick={loadMorePaits()}>
                Більше картин <img src={process.env.PUBLIC_URL + "/images/icon-arrow-right.svg"} alt=">" />
            </div>
        </div>
        </>
    )
}