import { FETCH_START, FETCH_DONE,FETCH_FAILED } from '../constants/ActionTypes'

const initialState = {
  series:[],
  nextPage:1,
  hasMoreResult:true,
  fetchSuccess:false,
  isFetching:false,
  errorMsg:'',
}

function fetchState (state = initialState, action) {
  switch (action.type) {

    case FETCH_START:
    return {...state,isFetching:true}


    case FETCH_DONE:
    return {...state,fetchSuccess:true,isFetching:false,hasMoreResult:action.data.hasMoreResult,nextPage:action.data.nextPage,series:[...state.series, ...action.data.series]}

    case FETCH_FAILED:
    return {...state,fetchSuccess:false,isFetching:false,errorMsg:action.msg}

    default:
    return state

  }
}

export default fetchState
