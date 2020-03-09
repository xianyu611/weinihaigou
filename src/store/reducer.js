import {combineReducers}  from "redux"
import  listReducer from '../components/navigation/reducer'
import  choiceness from "../components/home/components/choiceness/reducer"
import  hotSaleData from "../components/home/navComRouter/hotSale/reducer"
import  tardemakData from "../components/home/navComRouter/trademark/reducer"
import details from "../components/details/reducer"
import classifyData from "../components/classify/reducer"
import  newProductData from "../components/home/navComRouter/newProduct/reducer"
import  notCodeData from "../components/person/reducer"
import  shoppingCart from "../components/cart/reducer"
var reducer = combineReducers({
    todos:listReducer,
    choiceness,
    hotSaleData,
    tardemakData,
    details,
    classifyData,
    newProductData,
    notCodeData,
    shoppingCart
})
export default reducer;