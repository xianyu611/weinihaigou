const initialState = {
    list: [],
    info: true
}

export default (state = initialState, { type, payload }) => {
    var newState = JSON.parse(JSON.stringify(state))
    switch (type) {

        case "ADDLIST":
            if (!newState.list.length) {
                newState.list.push(payload)
                return newState
            } else {
                var queryid = newState.list.findIndex((item) => item.goodsId == payload.goodsId)
                if (queryid !== -1) {
                    newState.list[queryid].sun += payload.sun
                } else {
                    newState.list.push(payload)
                    newState.info = true
                }
            }
            return newState

        case "CHENGE":
            var idx = newState.list.findIndex((item) => item.goodsId == payload[1])
            if (payload[0]) {
                newState.list[idx].sun++
                return newState
            }
            if (newState.list[idx].sun > 1) {
                newState.list[idx].sun--
            }
            return newState
        case "ALL":
            if (payload == "all") {
                newState.list.forEach(element => {
                    element.info = false
                });
                newState.info = false
                return newState
            }

            newState.list.forEach(element => {
                if (element.goodsId === payload) {
                    element.info = !element.info
                }
            });
            if (newState.list.filter((item) => !item.info).length === newState.list.length) {
                newState.info = false
            } else {
                newState.info = true
            }

            return newState
            case "DEL":
                var idx = newState.list.findIndex((item) => item.goodsId == payload)
                newState.list.splice(idx,1)
                // var newState=newState.list.filter((item)=>item.goodsId!==payload)
                // newState.list.forEach((item)=>{
                //     if(item.goodsId==payload){
                //         newState.list
                //     }
                // })
                // console.log(a)
                return newState

        default:
            return state
    }
}
