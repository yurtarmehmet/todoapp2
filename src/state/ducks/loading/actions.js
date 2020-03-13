export function setLoading(loading) {
    return {type: "SET_LOADING", payload: loading}
}

export function hideLoading(loading){
    return {type: "HIDE_LOADING", payload: loading}
}