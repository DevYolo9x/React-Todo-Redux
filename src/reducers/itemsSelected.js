import * as types from '../constans/actionTypes';

let defaultState = { id: '', name: '', level: 0 }
const itemsSelectedReducer = (state = defaultState, action) => {
    switch(action.type){
        case types.SELECT_ITEM:
            return action.item
        case types.UN_SELECT_ITEM:
            return defaultState
        default:
            return state
    }
}

export default itemsSelectedReducer;