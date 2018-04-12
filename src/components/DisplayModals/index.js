import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddNoteModal from './Modals/AddNoteModal'
import DeleteNoteModal from './Modals/DeleteNoteModal'
import { connect } from 'react-redux'
import { modalStateSelector, modalTypeSelector, modalPayloadSelector } from '../../selector'
import { closeModal } from '../../actions/modals'
import { Dialog } from "@blueprintjs/core"
import { modalTypes, modalSize } from  '../../utils'

class DisplayModals extends Component {
  renderModalContent() {
    const { modalPayload, modalType } = this.props

    switch(modalType) {
    case modalTypes.ADD_NOTE_MODAL:
    case modalTypes.EDIT_NOTE_MODAL:
      return <AddNoteModal editNote={modalPayload} />
    case modalTypes.DELETE_NOTE_MODAL:
      return <DeleteNoteModal modalPayload={modalPayload} />
    }
  }

  render () {
    const { closeModal, modalState, modalType } = this.props
    const MODAL_SIZE = modalSize(modalType)

    return (
      <Dialog
        isOpen={modalState}
        onClose={() => closeModal()}
        canEscapeKeyClose={true}
        style={{width: MODAL_SIZE}}
      >
        <div className='pt-dialog-body'>
          {this.renderModalContent()}
        </div>
      </Dialog>
    )
  }
}

DisplayModals.propTypes = {
  closeModal: PropTypes.func,
  modalState: PropTypes.bool,
  modalType: PropTypes.string,
  modalPayload: PropTypes.object
}

function mapStateToProps (state) {
  const modalState = modalStateSelector(state)
  const modalType = modalTypeSelector(state)
  const modalPayload = modalPayloadSelector(state)

  return {
    modalState,
    modalType,
    modalPayload
  }
}

export default connect(mapStateToProps, {closeModal})(DisplayModals)
