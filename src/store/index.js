import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import state from './state'
import reducers from './reducers'
import { middleware } from 'yargs'

const middleware = (store) => (next) => (action) => {
  // dispatch 이전
  next(action)
  // dispatch 이후 리듀서 가기 전

}

const enhancer = composeWithDevTools({})
const store = createStore(reducers, state, enhancer(applyMiddleware(...middleware(thunk, middleware)))


export default store

