export const ADD_NOTE = 'ADD_NOTE'

export const addNote = (payload) => {
  return {
    type: ADD_NOTE,
    payload
  }
}