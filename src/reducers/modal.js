import * as actions from '../actions/modals'

const initialState = {
  modalState: false,
  modalType: null
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.OPEN_MODAL:
    return Object.assign({}, state, {modalState: true, modalType: action.payload})
  case actions.CLOSE_MODAL:
    return Object.assign({}, state, {modalState: false, modalType: null})
  default:
    return state
  }
}

export default modalReducer
