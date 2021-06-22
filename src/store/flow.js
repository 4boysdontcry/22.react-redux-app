const reducer = (state, action) => {
  switch(action.type){
    case 'LOGIN':
      return {
        isAuth: true,
        info:{
          userid: 'boysdontcry',
          username:'henry',
          grade: 3
        }
      }
  }
}


// 
const actLogin = (payload) => {
  return payload;
  paload
}



// component
dispatch({
  type: 'LOGIN',
  payload:{
    userid: 'boysdontcry',
    userpw: 'adsdqsdq'
  }
})

dispatch({
  type: 'LOGOUT',
  payload:{
    userid: 'boysdontcry',
    userpw: 'adsdqsdq'
  }
})