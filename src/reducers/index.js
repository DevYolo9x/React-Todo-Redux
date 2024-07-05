import { combineReducers } from "redux";
import isShowForm from "./isShowForm";
import sort from "./sort";
import items from "./items";


// Dùng hàm combieReducers để gộp phần import
let appReducer = combineReducers({
    isShowForm,
    sort,
    items
});

export default appReducer