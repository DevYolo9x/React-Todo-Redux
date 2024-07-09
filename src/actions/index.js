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

export const actSearch = (search) => {
    return {
        'type': types.CHANGE_SEARCH,
        search
    }
}

export const actDelete = (id) => {
    return {
        'type': types.DELETE,
        id
    }
}

export const actSubmitForm = (item) => {
    return {
        'type': types.SUBMIT_FORM,
        item
    }
}

export const actSelectedItem = (item) => {
    return {
        'type': types.SELECT_ITEM,
        item
    }
}