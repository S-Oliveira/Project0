import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-looger'
import reducer from './reducer'

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));
export default strore;
