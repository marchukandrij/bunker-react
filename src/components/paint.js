import React from 'react';
import { useDispatch  } from 'react-redux'
import { showModalPaint } from './../state'

export const Paint = (props) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="paint">
                <div className="paint__image-container">
                    <img src={ props.src } alt="" />
                    <div className="paint__author">{ props.author }</div>
                    <div className="paint__title">{ props.title }</div>
                    <div className="paint__button"
                        onClick={() => dispatch(showModalPaint(props.id))}>
                        Детальніше
                    </div>
                </div>
            </div>
        </>
    )
}