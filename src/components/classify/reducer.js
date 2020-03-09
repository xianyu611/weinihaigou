const initialState = {
    list: "",
    childList: ""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "CLASSIFYDATA":
            var newState = { ...state };
            newState.list = { ...payload }
            // console.log(newState.list)
            return newState

        case "CLASSIFYDATACHILD":
            var newState = { ...state };
            newState.childList = { ...payload }
            // console.log(newState.list)
            return newState

        default:
            return state
    }
}
