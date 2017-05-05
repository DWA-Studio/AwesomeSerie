import { combineReducers } from 'redux';
import navReducer from './navReducer';
import fetchReducer from './fetchReducer';

const rootReducer = combineReducers({
  navReducer,
  fetchReducer
})

export default rootReducer
