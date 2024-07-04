import { createStore } from 'redux';
import appReducer from './reducers/index';
import { actCloseForm, actOpenForm, actToggleForm, actSortForm} from './actions/index';

const Store = createStore(
    appReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
console.log("Init: ", Store.getState());

// Subcribe -- Phương thức khi thay đổi lại các giá trị nó sẽ cập nhật lại thông tin qua subcribe
Store.subscribe(() => {
    console.log("Sort: ", Store.getState());
})

// Close Form
Store.dispatch(actCloseForm());
console.log("Close: ", Store.getState());

// Open Form
Store.dispatch(actOpenForm());
console.log("Open: ", Store.getState());

// Toggle Form
Store.dispatch(actToggleForm());
console.log("Toggle: ", Store.getState());

// Sort Form
Store.dispatch(actSortForm('name', 'asc'));
console.log("Sort: ", Store.getState());

export default Store;