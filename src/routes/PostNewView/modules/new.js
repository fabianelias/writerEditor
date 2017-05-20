// import helpers
import { getInfoUser , logoutHelper } from '.././../../helpers/AuthService';
import api from '.././../../helpers/ClientApi'

const info = JSON.parse(getInfoUser())

// Constants
const RECEIVE_NEW = 'RECEIVE_NEW'
const REQUEST_NEW = 'REQUEST_NEW'

// Actions

function requestNew () {
  return {
    type: REQUEST_NEW
  }
}

export const receiveNew = (value) => ({
    type: RECEIVE_NEW,
    payload: value.data
})

export function fetchNew(postTitle, bodyPost) {
    return (dispatch, getState) => {

        if (getState().new.fetching) return

        dispatch(requestNew())

        const data = JSON.stringify({
          title: postTitle,
          postBody: bodyPost,
          idUser: info.identifier,
          isPubli: true
        });

        return fetch(api.new ,{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'x-access-token' : info.appSession
                    },
                    body: data
                  })
                .then(data => data.json())
                .then(json => dispatch(receiveNew(json)))

    }
}

export const actions = {
  requestNew,
  receiveNew,
  fetchNew
}


// Actions Handlers
  const ACTION_HANDLERS = {
      [REQUEST_NEW] : (state) => {
        return ({...state, fetching: true})
      },
      [RECEIVE_NEW] : (state, action) => {
        return ({...state, fetching: false, res: action.payload})
      }
  }

 // Reducer
 const initialState = {
   fetching: false,
   res: []
 }

 export default function (state = initialState, action) {
   const handler = ACTION_HANDLERS[action.type]

   return handler ? handler(state, action) : state
 }
