import { combineReducers } from 'redux'
import note from './note'
import modal from './modal'

const rootReducer = combineReducers({
  note,
  modal
})

export default rootReducer
