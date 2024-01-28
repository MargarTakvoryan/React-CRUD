import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";


const Store = createStore(
    combineReducers(
        {

        }
    ),
    applyMiddleware(thunk))

export default Store