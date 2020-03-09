import {createStore,applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import reducer from "./reducer"
import {watchAll,watchChoic,watchChoicenes,watchTardemakData,
    nationalPavilion,details,classify,classifyDataCh,
    newProduct,newProductScrolls,newGetSolrGrop,notCodeDatas} from "./saga"
var sagaMiddleware=createSagaMiddleware()
var store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchAll)
sagaMiddleware.run(watchChoic)
sagaMiddleware.run(watchChoicenes)
sagaMiddleware.run(watchTardemakData)
sagaMiddleware.run(nationalPavilion)
sagaMiddleware.run(details)
sagaMiddleware.run(classify)
sagaMiddleware.run(classifyDataCh)
sagaMiddleware.run(newProduct)
sagaMiddleware.run(newProductScrolls)
sagaMiddleware.run(newGetSolrGrop)
sagaMiddleware.run(notCodeDatas)
export default store