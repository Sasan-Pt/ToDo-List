import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import CombineReducer from "./CombineReducer";
import thunk from 'redux-thunk';


 const store=configureStore({reducer:CombineReducer},applyMiddleware(thunk));
export default store
