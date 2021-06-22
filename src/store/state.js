const state = {
	user: {
    isPending: false,   // 요청 후 대기중일때 true -> 이때 로딩바를 돌린다.
		isLogin: false,     // login상태면 true 아니면 false
		info: null,         // login일때 사용자 정보를 담는다.
    err: null           // error가 발생하면 에러를 담는다.
	},
	comments: []
}

export default state