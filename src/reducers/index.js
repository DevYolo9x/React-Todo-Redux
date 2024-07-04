import { combineReducers } from "redux";
import isShowForm from "./isShowForm";
import sort from "./sort";


// Dùng hàm combieReducers để gộp phần import
let appReducer = combineReducers({
    isShowForm,
    sort,
});

export default appReducer