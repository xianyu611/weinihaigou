const initialState = {
    HotList:""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "HOTSALE":
        var newState={...state};
        // console.log(payload)
        newState.HotList={...payload}
        
        return newState

    default:
        return state
    }
}
