import { stringify, v4 as uuidv4 } from 'uuid';
import { remove, reject } from 'lodash';
import * as types from '../constans/actionTypes';
import * as config from '../constans/config';
let defaultState = JSON.parse(localStorage.getItem(config.ITEMS_FROM_LOCAL_STORAGE))

let data = [
    {
        id: uuidv4(),
        name: "LARAVEL",
        level: 1
    },
    {
        id: uuidv4(),
        name: "PYTHON",
        level: 2
    },
    {
        id: uuidv4(),
        name: "HTML",
        level: 0
    },
    {
        id: uuidv4(),
        name: "JAVASCRIPT",
        level: 0
    },
]

if( defaultState === null ) {
    localStorage.setItem(config.ITEMS_FROM_LOCAL_STORAGE, JSON.stringify(data))
    defaultState = JSON.parse(localStorage.getItem(config.ITEMS_FROM_LOCAL_STORAGE))
}

defaultState = (defaultState !== null && defaultState.length > 0) ? defaultState : data;

let items = (state = defaultState, action) => {
    switch(action.type){
        case types.DELETE:
            const id = action.id;
            remove(state, function(item) {
                return item.id === id;
            });
            localStorage.setItem(config.ITEMS_FROM_LOCAL_STORAGE, JSON.stringify(state));
            return [...state] // Tạo ra 1 đôi tượng và sao chép các item ban đầU
        case types.SUBMIT_FORM:
            const item = action.item
            if( item.id !== '' ) {
                state = reject(state, {id: id});
                state.push({id: id, name: item.name, level: item.level});
            } else {
                item.id = uuidv4();
                state.push(item);
            }
            localStorage.setItem(config.ITEMS_FROM_LOCAL_STORAGE, JSON.stringify(state));
            return [...state]
        default:
            return state;
    }
    return state;
}

export default items;