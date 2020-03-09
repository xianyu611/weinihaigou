const initialState = {
    detailsData:""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "DETAILS":
        var newState={...state};
        
        newState.detailsData={...payload}
        // console.log(newState.detailsData,2222)
        return newState

    default:
        return state
    }
}
