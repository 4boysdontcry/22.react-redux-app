/* 
1. 요청을 보내고 대기상태 pending(await)
2. 결과가 성공으로 받음   fulfilled
3. 에러를 받음            rejected

action에서 비동기로 만들면서 세단계로 나누었다면, reducer에서도 동일한 이름의 세단계를 만들어줘야 한다.
*/

// actUserLogin을 실행하고, 그 결과에 따른 요청을 보내는 역할
const actUserLoginPending = () => {
  return {
    type: 'USER_LOGIN_PENDING'
  }
}
const actUserLoginFulfilled = (payload) => {
  return {
    type: 'USER_LOGIN_FULFILLED',
    payload
  }
}
const actUserLoginRejected = (err) => {
  return {
    type: 'USER_LOGIN_ERROR',
    err
  }
}


const actUserLogin = (payload) => {
  return async (dispatch, getState) => {
    try {
      dispatch(actUserLoginPending())
      setTimeout(async function(){
        dispatch(await actUserLoginFulfilled(payload))
      }, 2000)
    }
    catch(err){
      dispatch(actUserLoginRejected(err))
    }
  }
// 	return { type: 'USER_LOGIN', payload }
}

const actUserLogout = () => {
	return { type: 'USER_LOGOUT' }
}

export { actUserLogin, actUserLogout }