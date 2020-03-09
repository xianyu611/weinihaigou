export default {
    getData(pageNum=1,sort="",order="",ifNew=1,threeCategory=""){
        return {
            type:"NEWPRODUCR",
            pageNum,
            sort,
            order,
            ifNew,
            threeCategory
        }
    },
    getDataScroll(pageNum=2,sort="",order=""){
        console.log("getDataScroll22222222")
        return {
            type:"NEWPRODUCRSCROLL",
            pageNum,
            sort,
            order,
        }
    },
    getSolrGroup(){
        return {
            type:"GETSOLRGROUP" 
        }
    }
}