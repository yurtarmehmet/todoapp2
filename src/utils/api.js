import axios from 'axios';

export const getTodos = () => {
    return axios({
        method: 'get',
        url: 'http://5e692522d426c00016b7ebaf.mockapi.io/todos',
        responseType: 'json'
    })
};

export const addTodo = (data) => {
    return axios({
        method: 'post',
        url: 'http://5e692522d426c00016b7ebaf.mockapi.io/todos',
        responseType: 'json',
        data
    })
};

export const removeTodo = (id) => {
    return axios({
        method: 'delete',
        url: 'http://5e692522d426c00016b7ebaf.mockapi.io/todos/' + id,
        responseType: 'json'
    })
};

