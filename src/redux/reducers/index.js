import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
// used when we have multiple reducers by using combine reducer

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})

// const index = combineReducers({

// })

export default reducers 