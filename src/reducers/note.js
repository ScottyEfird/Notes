import * as actions from '../actions/notes'
import { createUuid } from '../utils'
import * as colors from '../../style/colors'

// Pretend there is a magic API call here to GET some notes 🚀
const preloadedNotes = [
  {
    id: 1,
    title: 'Buy more stuff',
    body: 'Milk, cheese, bread',
    color: colors.SELECTABLE_BLUE
  },
  {
    id: 2,
    title: 'Check bitcoin losses',
    body: 'Hint, it is a lot... 🔥',
    color: colors.SELECTABLE_RED
  },
  {
    id: 3,
    title: 'Lunch plans',
    body: 'Five Guys, Burger King or MickyDs? (There is a clear choice)',
    color: colors.SELECTABLE_GREEN
  },
  {
    id: 4,
    title: 'Card Title!',
    body: 'Isnt React neat? Redux too!',
    color: colors.SELECTABLE_YELLOW
  },
  {
    id: 5,
    title: 'More text here',
    body: 'words and stuff',
    color: colors.SELECTABLE_BLUE
  },
  {
    id: 6,
    title: 'Stuff',
    body: 'Body',
    color: colors.SELECTABLE_YELLOW
  },
  {
    id: 7,
    title: 'More text!',
    body: '...',
    color: colors.SELECTABLE_GREEN
  }
]
//

const initialState = {
  notes: preloadedNotes
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

    const notes = state.notes
    notes.push(newNote)

    return Object.assign({}, state, {notes})
  }
  case actions.DELETE_NOTE: {
    let notes = state.notes
    for (let index in notes) {
      notes[index].id === action.payload && notes.splice(index, 1)
    }

    return Object.assign({}, state, {notes})
  }
  case actions.EDIT_NOTE: {
    const { title, color, body, id } = action.payload
    let notes = state.notes

    for (let index in notes) {
      if(notes[index].id === id) {
        notes[index].body = body
        notes[index].title = title
        notes[index].color = color
      }
    }

    return Object.assign({}, state, {notes})
  }
  default:
    return state
  }
}

export default noteReducers
