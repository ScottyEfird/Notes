import * as actions from '../actions/notes'
import { createUuid } from '../utils'

const initialState = {
  notes: []
}

const noteReducers = (state = initialState, action) => {
  switch (action.type) {
  case actions.ADD_NOTE: {
    const { title, color, body } = action.payload

    const newNote = {
      id: createUuid(),
      title,
      color,
      body
    }
    console.log(state)
    const notes = state.notes
    notes.push(newNote)

    return Object.assign({}, state, {notes})
  }
  default:
    return state
  }
}

export default noteReducers
