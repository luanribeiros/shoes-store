import { combineReducers } from 'redux';
import cardReducer from './card'
import messageReducer from '../reducers/message'

const reducers = combineReducers ({
  card: cardReducer,
  message: messageReducer
})

export default reducers