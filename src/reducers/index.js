import { combineReducers } from "redux";
import isShowForm from "./isShowForm";
import sort from "./sort";
import items from "./items";
import search from "./search";
import itemsSelected from "./itemsSelected";

// Dùng hàm combieReducers để gộp phần import
let appReducer = combineReducers({
    isShowForm,
    sort,
    items,
    search,
    itemsSelected
});

export default appReducer