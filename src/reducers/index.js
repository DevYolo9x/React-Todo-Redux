import { combineReducers } from "redux";
import isShowForm from "./isShowForm";
import sort from "./sort";
import items from "./items";
import search from "./search";

// Dùng hàm combieReducers để gộp phần import
let appReducer = combineReducers({
    isShowForm,
    sort,
    items,
    search
});

export default appReducer