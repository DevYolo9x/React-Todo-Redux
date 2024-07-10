import * as types from '../constans/actionTypes';

let defaultState = { id: '1', name: 's1', level: 2 }
const itemsSelectedReducer = (state = defaultState, action) => {
    switch(action.type){
        case types.SELECT_ITEM:
            return state
        case types.UN_SELECT_ITEM:
            return state
        default:
            return state
    }
}

export default itemsSelectedReducer;