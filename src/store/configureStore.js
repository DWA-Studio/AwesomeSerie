import { createStore, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

export default function configureStore () {
  const middleware = [thunkMiddleware,loggerMiddleware];
  let store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);
  return store
}
