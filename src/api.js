import axios from 'axios';

export const getTodos = () => {
    return axios({
        method: 'get',
        url: 'http://5e692522d426c00016b7ebaf.mockapi.io/todos',
        responseType: 'json'
    })
};

