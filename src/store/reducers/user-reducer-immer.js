import produce from 'immer'


// 기본값
const initialState = {
  isPending: false,
  err: null,
	isLogin: false,
	info: null
}

const userReducer = produce((draft, action) => {
	switch(action.type) {
		case 'USER_LOGIN_PENDING':
				draft.isPending = true
        break

		case 'USER_LOGIN_FULFILLED':
				draft.isPending = false			// 대기상황이 종료되었으므로 false가 들어간다.
				draft.isLogin = true
				draft.info = action.payload
				draft.err = null
        break

		case 'USER_LOGIN_REJECTED':
				draft.isPending = false
				draft.isLogin = false
				draft.info = null
				draft.err = action.payload
        break

		case 'USER_LOGOUT':
				draft.isPending = false
				draft.isLogin = false
				draft.info = null
				draft.err = null
        break

		default: 
			return draft
	}
}, initialState)

export default userReducer