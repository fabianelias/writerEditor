// import helpers
import { getInfoUser , logoutHelper } from '.././../../helpers/AuthService';
import api from '.././../../helpers/ClientApi'

const info = JSON.parse(getInfoUser())

// Constants
const RECEIVE_PROFILEP = 'RECEIVE_PROFILEP'
const REQUEST_PROFILEP = 'REQUEST_PROFILEP'

// Actions

function requestProfile () {
  return {
    type: REQUEST_PROFILEP
  }
}

export const receiveProfile = (value) => ({
    type: RECEIVE_PROFILEP,
    payload: value.data
})

export function fetchProfile() {
    return (dispatch, getState) => {

        if (getState().profile.fetching) return

        dispatch(requestProfile())

        return fetch(api.profilePrivate + info.identifier,{
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'x-access-token' : info.appSession
                    }
                  })
                .then(data => data.json())
                //.then(json => console.log(json))
                .then(json => dispatch(receiveProfile(json)))
    }
}

/**
* comentarios
*/
/*
export function putComment(bodyComment, identifier_post){
  return (dispatch, getState) => {

      //if (getState().new.fetching) return

      //dispatch(requestNew())
      const data = JSON.stringify({
        text: bodyComment,
        userId: info.identifier,
        postId: identifier_post,
      });

      return fetch(api.comment ,{
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-access-token' : info.appSession
                  },
                  body: data
                })
              .then(data => data.json())
              .then(json => dispatch(fetchPost(identifier_post)))
  }
}
*/
export const actions = {
  requestProfile,
  receiveProfile,
  fetchProfile
}


// Actions Handlers
  const ACTION_HANDLERS = {
      [REQUEST_PROFILEP] : (state) => {
        return ({...state, fetching: true})
      },
      [RECEIVE_PROFILEP] : (state, action) => {
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
