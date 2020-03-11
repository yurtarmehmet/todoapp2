import {createStore} from "redux";

const initialState = {
    dataFromReduxStore: "This is from redux",
    _todos: [],
    todos:  [],
    loading: true,
    filter: "all"
};

const SET_TODOS = "SET_TODOS";

const rootReducer = function (state = initialState, action) {
    switch (action.type) {
        case SET_TODOS:
            return {...state, todos: action.payload};
        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;
