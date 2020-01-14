import React, { useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import axios from 'axios'
import { loadAuthors, appendAuthors } from './../state'
import { API_URL, MEDIA_URL } from  './../settings'

const AuthorsGroup = (props) => {
    const styles = "authors__card" + (props.type === 3 ? " authors__card--2": "");
    const list = props.data.map((author) => 
        <div key={author.id} className={ styles }>
            <img src={ MEDIA_URL + author.image } alt="" />
            <div className="authors__card-name">{ author.name }</div>    
        </div>
    );
    return (
        <div className="authors__group">
            { list }
        </div>
    )
}

export const PageAuthors = () => {
    const authors = useSelector(state => state.navigator.authors);
    const dispatch = useDispatch();
    // load data on start
    useEffect(() => {
        if (authors.length === 0) {
            axios.get(API_URL + '/authors/getstart')
                .then(res => 
                    {
                        const aauthors = res.data;
                        dispatch(loadAuthors(aauthors))
                    })
        }
    });
    // render authors 
    const authorList = authors.map((group, index) => 
        <AuthorsGroup key={ index } data={group.authors} type={group.type}></AuthorsGroup>
    );
    // завантажити ще авторів
    function loadMoreAuthors() {
        let authorsCount = authors.length+1;
        return () => {
            axios.get( API_URL + '/authors/get/'+authorsCount+'/5')
                .then(res => 
                    {
                        const aauthors = res.data;
                        dispatch(appendAuthors(aauthors))
                    })
        }
    }
    return (
        <>
            <div className="authors">
                <div className="authors__container">
                    { authorList }
                    <div className="paints__more" onClick={loadMoreAuthors()}>
                        Більше авторів <img src={process.env.PUBLIC_URL + "/images/icon-arrow-right.svg"} alt=">" />
                    </div>
                </div>
            </div>
        </>
    )
}