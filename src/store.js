import {createStore, applyMiddleware, combineReducers} from "redux";
import reduxthunk from "redux-thunk";
import {REMOVE_USER, SET_TODOS, SET_FILTER, SET_LOADING, TOGGLE_TODO} from "./constants";

const initialState = {
    dataFromReduxStore: "This is from redux",
    users: [{
        name: "John",
        surname: "Doe",
        id: 1
    }, {
        name: "Jane",
        surname: "Doe",
        id: 2
    }]
};


const todosState = {
    todos:  []
};

const filterState = {
    filter: "all"
};

const loadingState = {
    loading: false
};

const todosReducer = function (state = todosState, action) {
    switch (action.type) {
        case SET_TODOS:
            return {...state, todos: action.payload};
        case TOGGLE_TODO:
            const newTodos = state.todos.map((todo) => {
                if(todo.id === action.payload){
                    return {...todo, completed: !todo.completed};
                }
                return todo;
            });
            return {...state,
                todos:  newTodos
            };
        default:
            return state;
    }
};

const filterReducer = function (state = filterState, action) {
    switch (action.type) {
        case SET_FILTER:
            return {...state, filter: action.payload};
        default:
            return state;
    }
};

const loadingReducer = function (state = loadingState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: action.payload};
        default:
            return state;
    }
};


const rootReducer = combineReducers({todos: todosReducer, loading: loadingReducer, filter: filterReducer})
const store = createStore(rootReducer, applyMiddleware(reduxthunk));

export default store;
