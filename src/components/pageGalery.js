import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { Paint } from './paint'
import axios from 'axios'
import { loadPaints, appendPaints } from './../state'

export const PageGalery = () => {
    const paints = useSelector(state => state.navigator.paints);
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = 'Галерея - BunkerMuz';
        if (paints.length === 0) {
            axios.get('/api/paints/getstart.json')
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
                src={ paint.src }
                id={ paint.id }
                author={ paint.author }
                title={ paint.title }
            />
        </div>
    );
    // append paints and switch to galery
    function loadMorePaits() {
        return () => {
            axios.get('/api/paints/getstart.json')
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
                Більше картин <img src="/images/icon-arrow-right.svg" alt=">" />
            </div>
        </div>
        </>
    )
}