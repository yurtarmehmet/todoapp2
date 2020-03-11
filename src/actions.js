

export function setTodos(todos) {


    // old
    //return { return {type: "SET_TODOS", payload:todos}}
    //  new
    return (dispatch) => {
        dispatch(setLoading(true));
        dispatch({type: "SET_TODOS", payload:todos});
        dispatch(setLoading(false));
    };
}

export function removeUser(id){
    return {type: "REMOVE_USER", payload: id}
}

export function setFilter(filter) {
    return {type: "SET_FILTER", payload: filter}
}

export function setLoading(loading) {
    return {type: "SET_LOADING", payload: loading}
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
