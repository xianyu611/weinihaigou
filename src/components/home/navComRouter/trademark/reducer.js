const initialState = {
    hotSaleData: "",
    hotSaleDataS:""
}

export default (state = initialState, { type, payload ,result}) => {
    switch (type) {

        case "TRADEMARK":
            // console.log(payload,3333)
            var newState = { ...state };
            console.log(222, payload)
            newState.hotSaleData = { ...payload }
            // console.log(newState.hotSaleData)
            return newState
        // case "TRADEMARKS":
        //     // console.log(payload,3333)
        //     var newState = { ...state };
        //     // console.log(222, result)
        //     newState.hotSaleDataS = { ...result }
        //     console.log(newState.hotSaleDataS)
        //     return newState

        default:
            return state
    }
}