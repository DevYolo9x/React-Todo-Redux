import { stringify, v4 as uuidv4 } from 'uuid';
import * as types from '../constans/actionTypes';
import * as config from '../constans/config';

let defaultState = { id: '', name: '', level: 0 }
let items = (state = defaultState, action) => {
    switch(action.type){
        case types.SELECT_ITEM:

            let item = action.item
            
            // const data = {
            //     id: action.items.id,
            //     name: action.items.name,
            //     level: action.items.level,
            // }
            return item;
            // state.id = !action.items.id ? '' : action.items.id
            // state.name = action.items.name
            // state.level = action.items.level
            //return [...item] // Tạo ra 1 đôi tượng và sao chép các item ban đầU
        default:
            return state;
    }
    return state;
}

export default items;