// ------------------------------------
// Constants
// ------------------------------------
const REQUEST_LOGIN = 'REQUEST_LOGIN'

// ------------------------------------
// Actions
// ------------------------------------

function requestLogin () {
  return {
    type: REQUEST_LOGIN
  }
}

export function fetchLogin () {
  console.log('as');
  return (dispatch, getState) => {
    if (getState().login.fetching) return

    dispatch(requestZen())
    return fetch('https://api.github.com/zen')
      .then(data => data.text())
      .then(text => dispatch(receiveZen(text)))
  }
}

export const actions = {
  requestLogin,
  fetchLogin
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_LOGIN]: (state) => {
    return ({...state, fetching: true})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  json: []
}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
