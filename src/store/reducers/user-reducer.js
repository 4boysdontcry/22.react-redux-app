// 기본값
const initialState = {
  isPending: false,
  err: null,
	isLogin: false,
	info: null
}

const userReducer = (state = initialState, action) => {
	switch(action.type) {
		/* case 'USER_LOGIN':
			return {
				...state,
				isLogin: true,
				info: action.payload
			} */
		case 'USER_LOGIN_PENDING':
			return {		// 리턴 안에는 바꿀 값만 적으면 된다.
				...state,
				isPending: true,
				isLogin: false,
				info: null,
				err: null
			}
		case 'USER_LOGIN_FULFILLED':
			return {
				...state,
				isPending: false,			// 대기상황이 종료되었으므로 false가 들어간다.
				isLogin: true,
				info: action.payload,
				err: null
			}
		case 'USER_LOGIN_REJECTED':
			return {
				...state,
				isPending: false,
				isLogin: false,
				info: null,
				err: action.payload
			}
		case 'USER_LOGOUT':
			return {
				...state,
				isPending: false,
				isLogin: false,
				info: null,
				err: null
			}
		default: 
			return state
	}
}

export default userReducer