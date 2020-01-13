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
    paints: []
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

// -------------- reducers

const navigator = (state = initialState, action) => {

    switch(action.type) {
  
        case 'CHANGE_PAGE':
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
        
        default:
            return state
    }
}
  
export const rootReducer = combineReducers({ navigator })