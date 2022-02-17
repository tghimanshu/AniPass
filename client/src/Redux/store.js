import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { passwordsReducer } from "./Reducers/reducers";

const reducers = combineReducers({
  passwords: passwordsReducer,
});

const initialState = {};

const middlewares = [thunk];

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);
