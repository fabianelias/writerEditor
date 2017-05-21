// import helpers
import { getInfoUser , logoutHelper } from '.././../../helpers/AuthService';
import api from '.././../../helpers/ClientApi'

const info = JSON.parse(getInfoUser());

// Constants
const RECEIVE_EXPLORE = 'RECEIVE_EXPLORE'
const REQUEST_EXPLORE = 'REQUEST_EXPLORE'

// Actions

function requestExplore () {
  return {
      type: REQUEST_EXPLORE
  }
}

export const receiveExplore = (value) => ({
  type: RECEIVE_EXPLORE,
  payload: value.data
})

export function fetchExplore () {
   return (dispatch, getState) => {

       if (getState().explore.fetching) return

       dispatch(requestExplore())

       return fetch(api.posts,{
                   method: 'GET',
                   headers: {
                     'Content-Type': 'application/json',
                     'x-access-token' : info.appSession
                   }
                 })
               .then(data => data.json())
               .then(json => dispatch(receiveExplore(json)))
   }
}

export const actions = {
 requestExplore,
 receiveExplore,
 fetchExplore
}

// Actions Handlers
const ACTION_HANDLERS = {
    [REQUEST_EXPLORE] : (state) => {
      return ({...state, fetching: true})
    },
    [RECEIVE_EXPLORE] : (state, action) => {
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
