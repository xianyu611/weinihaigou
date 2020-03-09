const initialState = {
    newProducer: "",
    newProducerScroll: "2222",
    newSolrGroup:""
}

export default (state = initialState, { type, payload, sort }) => {
    switch (type) {

        case "NEWPRODUCRDATA":
            var newState = { ...state };
            newState.newProducer = { ...payload }
            return newState

        case "NEWPRODUCRSCROLLDATA":
            var newState = { ...state };
            if (!sort) {
                for (var i in newState.newProducer.list) {
                    payload.list.unshift(newState.newProducer.list[i])
                }
            }
            newState.newProducer = { ...payload }
            return newState

        case "GETSOLRGROUPDATA":
            var newState = { ...state };
            
            newState.newSolrGroup = { ...payload }
            return newState

        default:
            return state
    }
}
