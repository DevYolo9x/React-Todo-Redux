let defaultState = {
    orderBy: 'level',
    orderDir: 'desc',
};

let sortReducer = (state = defaultState, action) => {
    let {orderBy, orderDir} = action;
    switch(action.type){
        case 'SORT':
            return { orderBy, orderDir};
        default:
            return state;
    }
    return state;
}

export default sortReducer;