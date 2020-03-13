import {SET_FILTER, SET_TODOS, TOGGLE_TODO, ADD_TODO, REMOVE_TODO} from "./constants";

const todosState = {
    todos:  [],
    filter: "all"
};

export const todosReducer = function (state = todosState, action) {
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
        case SET_FILTER:
            return {...state, filter: action.payload};
        case  ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case  REMOVE_TODO:
            return {...state, todos: state.todos.filter((todo) => {
                    return todo.id !== action.payload
                })}
        default:
            return state;
    }
};