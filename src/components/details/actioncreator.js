export default {
    getDetails(data){
        return {
            type:"WATCHDETAILS",
            data
        }
    },
    addList(payload){
        // console.log("ADDLIST")
        return {
            type:"ADDLIST",
            payload
        }
    }
}