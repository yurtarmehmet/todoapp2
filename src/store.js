import {createStore, applyMiddleware} from "redux";
import reduxthunk from "redux-thunk";
import {REMOVE_USER, SET_TODOS, SET_FILTER, SET_LOADING, TOGGLE_TODO} from "./constants";

const initialState = {
    dataFromReduxStore: "This is from redux",
    todos:  [],
    loading: false,
    filter: "all",
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


const rootReducer = function (state = initialState, action) {
    switch (action.type) {
        case SET_TODOS:
            return {...state, todos: action.payload};
        case REMOVE_USER:
            return {...state, users: state.users.filter((user) => {
                    return user.id !== action.payload;
                })};
        case SET_FILTER:
            return {...state, filter: action.payload};
        case SET_LOADING:
            return {...state, loading: action.payload};
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

const store = createStore(rootReducer, applyMiddleware(reduxthunk));

export default store;
