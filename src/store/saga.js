import { takeEvery, call, put } from "redux-saga/effects"
import axios from "../api"

function* banner() {
    var result = yield call(() => {
        return axios.post("/indexMobileTop.shtml")
    })

    yield put({
        type: "GETDATA",
        payload: result
    })
}


function* hotSaleData() {
    var result = yield call(() => {
        return axios.post("/indexHotList.shtml")
    })

    yield put({
        type: "HOTSALE",
        payload: result
    })
}


function* choicenessData() {
    //  console.log(222)
    var result = yield call(() => {
        return axios.post("/goods/queryCountryList.shtml")
    })

    yield put({
        type: "CHOICENESS",
        payload: result
    })
}


function* tardemakData() {

    var result = yield call(() => {
        return axios.post("/brand/queryBrandList.shtml")
    })

    yield put({
        type: "TRADEMARK",
        payload: result
    })
}

function* nationalPaviliondata() {
    //  console.log("/solr/searchGoods.shtml")
    var result = yield call(() => {
        return axios.post("/solr/searchGoods.shtml?pageNum=1&pageSize=20&themeId=317")
    })

    yield put({
        type: "HOTSALE",
        payload: result
    })
}

function* getDetailsData(data) {
    // console.log(data.data)
    var result = yield call(() => {
        return axios.post("/goods/getDetailMo.shtml?goodsNo=" + data.data + "")
    })

    yield put({
        type: "DETAILS",
        payload: result
    })
}


function* classifyData(data) {
    // console.log(data.data)
    var result = yield call(() => {
        return axios.post("/category/getCategory.shtml")
    })

    yield put({
        type: "CLASSIFYDATA",
        payload: result
    })
}

function* classifyDataChild(data) {
    // console.log(data.data)
    var result = yield call(() => {
        return axios.post("/category/getCategoryTwo.shtml?categoryId=" + data.data + "")
    })

    yield put({
        type: "CLASSIFYDATACHILD",
        payload: result
    })
}

function* newProductData(data) {
    //pageNum  页数
    //sort 搜索表示
    //order  上下箭头表示 下2 上1
    //threeCategory 选择商品的id
    //ifNew
    var result = yield call(() => {
        return axios.post("/solr/searchGoods.shtml?threeCategory="+data.threeCategory+"&ifNew="+data.ifNew+"&pageNum=" + data.pageNum + "&pageSize=20&sort=" + data.sort + "&order=" + data.order + "")
        // return axios.post("/solr/searchGoods.shtml?threeCategory="+26+"&ifNew="+""+"&pageNum=" + data.pageNum + "&pageSize=20&sort=" + data.sort + "&order=" + data.order + "")
    })

    yield put({
        type: "NEWPRODUCRDATA",
        payload: result
    })
}


function* newProductDataScroll(data) {
    //pageNum  页数
    //sort 搜索表示
    //order  上下箭头表示 下2 上1
    var result = yield call(() => {
        return axios.post("/solr/searchGoods.shtml?ifNew=1&pageNum=" + data.pageNum + "&pageSize=20&sort=" + data.sort + "&order=" + data.order + "")
    })

    yield put({
        type: "NEWPRODUCRSCROLLDATA",
        payload: result,
        sort:data.sort
    })
}

function *newGetSolrGropData(){
    var result = yield call(() => {
        return axios.post("/solrGoods/getSolrGroup.shtml")
    })

    yield put({
        type: "GETSOLRGROUPDATA",
        payload: result
    })
}

function *CodeData(data){
    console.log(222)
    var result = yield call(() => {
        return axios.get("/user/sendMoRandmoCode.shtml?mobile=15827018735&type=2")
    })
console.log(result)
    yield put({
        type: "NOTCODEDATA",
        payload: result
    })
}

export function* watchAll() {
    yield takeEvery("WATCHBANNER", banner)
}


export function* watchChoic() {
    yield takeEvery("WATCHCHOIC", hotSaleData)
}

export function* watchChoicenes() {
    yield takeEvery("WATCHCHOICENES", choicenessData)
}


export function* watchTardemakData() {
    yield takeEvery("TRADEMARK", tardemakData)
}

export function* nationalPavilion() {
    // console.log("NATIONALDATA")
    yield takeEvery("NATIONALDATA", nationalPaviliondata)
}


export function* details() {
    yield takeEvery("WATCHDETAILS", getDetailsData)
}


export function* classify() {
    yield takeEvery("CLASSIFY", classifyData)
}

export function* classifyDataCh() {
    yield takeEvery("CLASSIFYCHLID", classifyDataChild)
}

export function* newProduct() {
    yield takeEvery("NEWPRODUCR", newProductData)
}

export function* newProductScrolls() {
    yield takeEvery("NEWPRODUCRSCROLL", newProductDataScroll)
}

export function* newGetSolrGrop() {
    yield takeEvery("GETSOLRGROUP", newGetSolrGropData)
}

export function* notCodeDatas() {
    console.log(222)
    yield takeEvery("NOTCODE", CodeData)
}
