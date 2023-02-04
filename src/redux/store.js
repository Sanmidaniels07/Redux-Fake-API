import {configureStore} from '@reduxjs/toolkit'
import reducers from './reducers/index'
// the store takes the first argument which is the reducers while the second is the middleware if it's bn used

const store =  configureStore( 
   {reducer: reducers} ,
 {}, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())  // two arguments with the ist reducers and the other the state WHILE the WIndows. helps us to see our state when we inspect

export default store