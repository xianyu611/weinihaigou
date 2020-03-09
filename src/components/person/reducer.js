const initialState = {
    notCodeData:""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "NOTCODEDATA":
        console.log(payload)
        var newState={...state};
        newState.notCodeData={...payload}

        return newState

    default:
        return state
    }
}
