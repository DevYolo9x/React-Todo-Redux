import * as types from '../constans/actionTypes'
let defaultState = '';

let searchFormReducer = (state = defaultState, action) => {
    switch(action.type){
        case types.CHANGE_SEARCH:
            return action.search;
        default:
            return state;
    }
    return state;
}

export default searchFormReducer;