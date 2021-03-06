// Bunker 2020
// Redux store
import {combineReducers} from 'redux'

// -------------- initialState

const initialState = { 
    currentPage: 'main',
    modalWindow: false,
    modalType: '',
    modalData: {},
    paints: [],
    authors: [],
    customData: false,
    authorsSlider: false
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
export const showModalMenu = () => ({ 
    type: 'MODAL_MENU', 
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
export const updateModalData = data => ({
    value: data,
    type: 'UPDATE_MODAL_DATA',
})
export const loadCustomData = data => ({ 
    value: data,
    type: 'LOAD_CUSTOM_DATA', 
})
export const loadAuthorsSlider = data => ({ 
    value: data,
    type: 'LOAD_AUTHORS_SLIDER', 
})

// -------------- reducers

function bodyLock() {
    const body = document.body;
    body.classList.add('modal-open');
}

function bodyUnLock() {
    const body = document.body;
    body.classList.remove('modal-open');
}

const navigator = (state = initialState, action) => {

    switch(action.type) {
  
        case 'CHANGE_PAGE':
            bodyUnLock();
            window.scrollTo(0,0);
            return {...state, 
                currentPage: action.value,
                modalWindow: false }

        case 'MODAL_AUTHOR':
            bodyLock();
            return {...state, 
                modalWindow: true, 
                modalType: 'author', 
                modalData: action.value }

        case 'MODAL_PAINT':
            bodyLock();
            return {...state, 
                modalWindow: true, 
                modalType: 'paint', 
                modalData: action.value }    

        case 'MODAL_MENU':
            bodyLock();
            return {...state, 
                modalWindow: true, 
                modalType: 'menu'}           

        case 'MODAL_HIDE':
            bodyUnLock();
            return {...state, 
                modalWindow: false,
                modalType: '',
                modalData: {}}

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
                
        case 'UPDATE_MODAL_DATA':
            return {...state, 
                modalData: action.value}    

        case 'LOAD_CUSTOM_DATA':
            return {...state, 
                customData: action.value}    

        case 'LOAD_AUTHORS_SLIDER':
            return {...state, 
                authorsSlider: action.value}  

        default:
            return state
    }
}
  
export const rootReducer = combineReducers({ navigator })