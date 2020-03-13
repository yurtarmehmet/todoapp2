import {SET_LOADING, HIDE_LOADING} from "./constants";

const loadingState = {
    loading: []
};

export const loadingReducer = function (state = loadingState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: [...state.loading, action.payload]};
        case HIDE_LOADING:
            return {...state, loading: state.loading.filter((n) => {
                return n !==  action.payload
            })};
        default:
            return state;
    }
};