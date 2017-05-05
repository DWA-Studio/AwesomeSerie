import { combineReducers } from 'redux'
import navReducer from './navReducer'
import fecthReducer from './fetchReducer'

const rootReducer = combineReducers({
  navReducer,
  fetchReducer
})

export default rootReducer  
