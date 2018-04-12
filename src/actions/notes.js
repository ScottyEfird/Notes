export const ADD_NOTE = 'ADD_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export const addNote = (payload) => {
  return {
    type: ADD_NOTE,
    payload
  }
}

export const updateNote = (payload) => {
  return {
    type: EDIT_NOTE,
    payload
  }
}

export const deleteNote = (payload) => {
  return {
    type: DELETE_NOTE,
    payload
  }
}