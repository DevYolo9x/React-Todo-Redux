import { v4 as uuidv4 } from 'uuid';
let defaultState = JSON.parse(localStorage.getItem('Task'))
defaultState = (defaultState !== null && defaultState.length > 0) ? defaultState : [];
defaultState = [
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
let items = (state = defaultState, action) => {
    return state;
}

export default items;