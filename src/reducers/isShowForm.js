let defaultState = false;

let isShowFormReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'CLOSE_FORM':
            state = false;
            return state;
        case 'OPEN_FORM':
            state = true;
            return state;
        case 'TOGGLE_FORM':
            state = !state;
            return state;
        default:
            return state;
    }
    return state;
}

export default isShowFormReducer;