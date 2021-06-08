import {combineReducers} from "redux";
import listItemReducer from "./listItem";
const rootReducer = combineReducers({
    listItem : listItemReducer
})
export default rootReducer;