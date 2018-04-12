// Modal Types
export const modalTypes = {
  ADD_NOTE_MODAL:  'ADD_NOTE_MODAL',
  EDIT_NOTE_MODAL:  'ADD_NOTE_MODAL',
  DELETE_NOTE_MODAL: 'DELETE_NOTE_MODAL'
}

export function modalSize (type) {
  switch(type) {
  case modalTypes.ADD_NOTE_MODAL:
  case modalTypes.EDIT_NOTE_MODAL:
    return 840
  case modalTypes.DELETE_NOTE_MODAL:
    return 600
  }
}

//RFC4122
export function createUuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4()
}