export default {
    change(payload){
        return {
            type:"CHENGE",
            payload
        }
    },
    all(payload){
        return {
            type:"ALL",
            payload
        }
    },
    del(payload){
        return {
            type:"DEL",
            payload
        }
    }
}