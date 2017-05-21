// import helpers
import { getInfoUser , logoutHelper } from '.././../../helpers/AuthService';
import api from '.././../../helpers/ClientApi'

const info = JSON.parse(getInfoUser());

// Constants
const RECEIVE_JOB = 'RECEIVE_JOB'
const REQUEST_JOB = 'REQUEST_JOB'

// Actions

function requestJob () {
  return {
      type: REQUEST_JOB
  }
}

export const receiveJob = (value) => ({
  type: RECEIVE_JOB,
  payload: value.data
})

export function fetchJob () {
   return (dispatch, getState) => {

       if (getState().job.fetching) return

       dispatch(requestJob())

       return fetch(api.myPost + info.identifier,{
                   method: 'GET',
                   headers: {
                     'Content-Type': 'application/json',
                     'x-access-token' : info.appSession
                   }
                 })
               .then(data => data.json())
               .then(json => dispatch(receiveJob(json)))
   }
}

export const actions = {
 requestJob,
 receiveJob,
 fetchJob
}

// Actions Handlers
const ACTION_HANDLERS = {
    [REQUEST_JOB] : (state) => {
      return ({...state, fetching: true})
    },
    [RECEIVE_JOB] : (state, action) => {
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
