const loggerMiddleware = store => next => action => {
    console.log("STATE BEFORE", store.getState());
    console.log("ACTION DISPATCHED", action);
    next(action);
    console.log("STATE AFTER", store.getState());
};

export default loggerMiddleware;