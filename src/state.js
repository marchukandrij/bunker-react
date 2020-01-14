// Bunker 2020
// Redux store
import {combineReducers} from 'redux'

// -------------- initialState

const initialState = { 
    currentPage: 'main',
    modalWindow: false,
    modalType: 'type',
    authorID: 'ida',
    paintID: 'idp',
    paints: [],
    authors: []
}

// -------------- actions

export const changePage = page => ({ 
    value: page,
    type: 'CHANGE_PAGE', 
})
export const showModalAuthor = authorID => ({ 
    value: authorID,
    type: 'MODAL_AUTHOR', 
})
export const showModalPaint = paintID => ({ 
    value: paintID,
    type: 'MODAL_PAINT', 
})
export const hideModal = () => ({ type: 'MODAL_HIDE'})
export const loadPaints = paints => ({ 
    value: paints,
    type: 'LOAD_PAINTS', 
})
export const appendPaints = paints => ({ 
    value: paints,
    type: 'APPEND_PAINTS', 
})
export const loadAuthors = authors => ({ 
    value: authors,
    type: 'LOAD_AUTHORS', 
})
export const appendAuthors = authors => ({ 
    value: authors,
    type: 'APPEND_AUTHORS', 
})

// -------------- reducers

const navigator = (state = initialState, action) => {

    switch(action.type) {
  
        case 'CHANGE_PAGE':
            window.scrollTo(0,0);
            return {...state, 
                currentPage: action.value,
                modalWindow: false }

        case 'MODAL_AUTHOR':
            return {...state, 
                modalWindow: true, 
                modalType: 'author', 
                authorID: action.value }

        case 'MODAL_PAINT':
            return {...state, 
                modalWindow: true, 
                modalType: 'paint', 
                paintID: action.value }            

        case 'MODAL_HIDE':
            return {...state, 
                modalWindow: false,
                modalType: ''}

        case 'LOAD_PAINTS':
            return {...state, 
                paints: action.value}

        case 'APPEND_PAINTS':
            return {...state, 
                paints: state.paints.concat(action.value),
                currentPage: 'galery' }
        
        case 'LOAD_AUTHORS':
            return {...state, 
                authors: action.value}

        case 'APPEND_AUTHORS':
            return {...state, 
                authors: state.authors.concat(action.value)}                

        default:
            return state
    }
}
  
export const rootReducer = combineReducers({ navigator })