import React from 'react';

export const Paint = (props) => {
    return (
        <>
            <div className="paint">
                <div className="paint__image-container">
                    <img src={ props.src } alt="" />
                    <div className="paint__author">{ props.author }</div>
                    <div className="paint__title">{ props.title }</div>
                    <div className="paint__button">Детальніше</div>
                </div>
            </div>
        </>
    )
}