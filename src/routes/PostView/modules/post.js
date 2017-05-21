// import helpers
import { getInfoUser , logoutHelper } from '.././../../helpers/AuthService';
import api from '.././../../helpers/ClientApi'

const info = JSON.parse(getInfoUser())

// Constants
const RECEIVE_POST = 'RECEIVE_POST'
const REQUEST_POST = 'REQUEST_POST'

// Actions

function requestPost () {
  return {
    type: REQUEST_POST
  }
}

export const receivePost = (value) => ({
    type: RECEIVE_POST,
    payload: value.data
})

export function fetchPost(identifier_post) {
    return (dispatch, getState) => {

        if (getState().post.fetching) return

        dispatch(requestPost())

        return fetch(api.post + identifier_post,{
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'x-access-token' : info.appSession
                    }
                  })
                .then(data => data.json())
                .then(json => dispatch(receivePost(json)))
    }
}

export const actions = {
  requestPost,
  receivePost,
  fetchPost
}


// Actions Handlers
  const ACTION_HANDLERS = {
      [REQUEST_POST] : (state) => {
        return ({...state, fetching: true})
      },
      [RECEIVE_POST] : (state, action) => {
        return ({...state, fetching: false, json: action.payload})
      }
  }

 // Reducer
 const initialState = {
   fetching: false,
   json: []
 }

 export default function (state = initialState, action) {
   const handler = ACTION_HANDLERS[action.type]

   return handler ? handler(state, action) : state
 }
