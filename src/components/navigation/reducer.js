const initialState = {
    list:""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "GETDATA":
        var newState={...state};
        newState.list={...payload}
        // console.log(newState.list)
        return newState

    default:
        return state
    }
}
