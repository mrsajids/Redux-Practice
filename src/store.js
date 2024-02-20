// step 3 install redux react-redux redux-thunk

//step 4 create store
import {createStore,combineReducers,applyMiddleware, compose} from 'redux'
import { thunk } from 'redux-thunk'
import {fetchReducer} from './reducer/fetchReducer'

const initialState={
   fetch:{ 'initialstate':"initial value"}
}

const reducer=combineReducers({
    fetch:fetchReducer
})

//this is for redux extension
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer, initialState,  composeEnhancer(applyMiddleware(...[thunk]))
)

export default store