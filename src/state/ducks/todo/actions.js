import {getTodos, addTodo as addTodoToApi, removeTodo as removeTodoFromApi} from "../../../utils/api";
import {setLoading, hideLoading} from "../loading/actions";

export function setTodos(todos) {
    return (dispatch) => {
        dispatch(setLoading("loadingTodo"));
        getTodos().then((result) => {
            dispatch(hideLoading("loadingTodo"));
            dispatch({type: "SET_TODOS", payload:result.data});
        })
    };
}

export function removeUser(id){
    return {type: "REMOVE_USER", payload: id}
}

export function setFilter(filter) {
    return {type: "SET_FILTER", payload: filter}
}

export function toggleTodo(id) {
    // old
    //return {type: "TOGGLE_TODO", payload: id}

    // new
    return (dispatch, getState) => {
        dispatch({type: "TOGGLE_TODO", payload: id});
        const {todos} = getState();
        localStorage.setItem('todos', JSON.stringify(todos));
    };
}

export function addTodo(todo) {
    return (dispatch) => {
        dispatch(setLoading("addingTodo"));
        addTodoToApi(todo).then((result) => {
            dispatch(hideLoading("addingTodo"));
            dispatch({type: "ADD_TODO", payload:result.data})
        }).catch((err) => {
            console.log(err);
        })
    }
}

export function removeTodo(id) {
    return (dispatch) => {
        dispatch(setLoading("removingTodo"));
        removeTodoFromApi(id).then((result) => {
            console.log(result);
            dispatch(hideLoading("removingTodo"));
            dispatch({type: "REMOVE_TODO", payload:id})
        }).catch((err) => {
            console.log(err);
        })
    }
}
