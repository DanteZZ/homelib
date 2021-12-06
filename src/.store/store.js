import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Thunk from 'redux-thunk'
import Reducer from './reducer'

const usedMiddleware = [Thunk]

const middleware = composeWithDevTools(applyMiddleware(...usedMiddleware))

const Store = createStore(Reducer, middleware)

export default Store