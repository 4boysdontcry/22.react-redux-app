/* 
1. redux에서 비동기 처리를 하기 위해서는 redux-thunk, redux-saga 등이 필요
2. 단 @redduxjs/toolkit에서는 필요없음
3. redux-thunk는 미들웨어다.
4. 비동기 
*/


import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'   // 비동기 액션을 담당한다.
import { composeWithDevTools } from 'redux-devtools-extension'
import state from './state'
import reducers from './reducers'


// dispatch 할 때 변경 전의 state와 변경 후의 state사이에서 작업하는 모듈
const middleware = (store) => (next) => (action) => {
  // dispatch 이전
  // console.log(store.getState())
  next(action)
  // dispatch 이후 리듀서 가기 전
  // console.log(store.getState())

}

const enhancer = composeWithDevTools({})
const store = createStore(reducers, state, enhancer(applyMiddleware(thunk, middleware)))


export default store

