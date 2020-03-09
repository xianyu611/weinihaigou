const initialState = {
    hotSaleData:""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "CHOICENESS":
        // console.log(payload,3333)
        var newState={...state};
        
        newState.hotSaleData={...payload}
        // console.log(newState.hotSaleData)
        return newState

    default:
        return state
    }
}
