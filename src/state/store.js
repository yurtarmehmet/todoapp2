import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import reduxthunk from "redux-thunk";
import todosReducer from "./ducks/todo";
import loadingReducer from "./ducks/loading";
import loggerMiddleware from "./middlewares/logger";

const rootReducer = combineReducers({todos: todosReducer, loading: loadingReducer})
const store = createStore(rootReducer, compose(applyMiddleware(reduxthunk), applyMiddleware(loggerMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
