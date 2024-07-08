import * as types from '../constans/actionTypes'

let defaultState = {
    orderBy: 'level',
    orderDir: 'asc',
};

let sortReducer = (state = defaultState, action) => {
    let {orderBy, orderDir} = action;
    switch(action.type){
        case types.SORT:
            return { orderBy, orderDir};
        default:
            return state;
    }
    return state;
}

export default sortReducer;