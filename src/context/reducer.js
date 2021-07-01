function reducer(state, action) {
    switch (action.type) {
        case "INCREASE_COUNTER":
            state.counter = state.counter + 1;
            return { ...state }
        case "DECREASE_COUNTER":
            state.counter = state.counter - 1;
            return { ...state }
        case "CHANGE_NAME":
            state.name = action.payload.userName
            return {...state}
        default:
            return state;
    }
}

export default reducer;