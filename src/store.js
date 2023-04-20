import { applyMiddleware, createStore } from "redux";
import { todosReducer } from "./services/reducers/todosReducers";
import thunk from "redux-thunk";
export const store = createStore(todosReducer, applyMiddleware(thunk));
