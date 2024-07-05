import * as types from '../constans/actionTypes'
let defaultState = false;

console.log(defaultState);

let isShowFormReducer = (state = defaultState, action) => {
    switch(action.type){
        case types.CLOSE_FORM:
            state = false;
            return state;
        case types.OPEN_FORM:
            state = true;
            return state;
        case types.TOGGLE_FORM:
            state = !state;
            return state;
        default:
            return state;
    }
    return state;
}

export default isShowFormReducer;