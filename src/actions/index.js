import * as types from '../constans/actionTypes';

export const actCloseForm = () => {
    return {
        'type': types.CLOSE_FORM
    }
}

export const actOpenForm = () => {
    return {
        'type': types.OPEN_FORM
    }
}

export const actToggleForm = () => {
    return {
        'type': types.TOGGLE_FORM
    }
}

export const actSortForm = (orderBy, orderDir) => {
    return {
        'type': types.SORT,
        orderBy,
        orderDir
    }
}