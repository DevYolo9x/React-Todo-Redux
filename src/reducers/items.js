let defaultState = JSON.parse(localStorage.getItem('Task'))
defaultState = (defaultState !== null && defaultState.length > 0) ? defaultState : [];
defaultState = [
    {
        id: 1,
        name: "Coding",
        level: 1
    },
]
let items = (state = defaultState, action) => {
    return state;
}

export default items;