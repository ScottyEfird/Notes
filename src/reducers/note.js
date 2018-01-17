import * as actions from '../actions/notes'

const initialState = {
  notes: []
}

const noteReducers = (state = initialState, action) => {
  switch (action.type) {
  case actions.ADD_NOTE:
    return state
  default:
    return state
  }
}

export default noteReducers
