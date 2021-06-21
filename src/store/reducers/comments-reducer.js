const initialState = null

const commentsReducer = (prevState = initialState, action) => {
  switch(action.type) {
		case 'COMMENTS_ADD':
			return {
				...prevState,
				comments: [...prevState.comments, action.payload]
			}
		case 'COMMENTS_REMOVE':
			return {
				...prevState,
				comments: prevState.comments.filter( v => v.id !== action.payload )
			}
  }
}

export default commentsReducer