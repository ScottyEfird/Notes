import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddNoteModal from './Modals/AddNoteModal'
import { connect } from 'react-redux'
import { modalStateSelector, modalTypeSelector } from '../../selector'
import { closeModal } from '../../actions/modals'
import { Dialog } from "@blueprintjs/core"
import modalTypes from  '../../utils'

class DisplayModals extends Component {
  renderModalContent(modalType) {
    switch(modalType) {
    case modalTypes.ADD_NOTE_MODAL:
      return <AddNoteModal />
    }
  }

  render () {
    const { closeModal, modalState, modalType } = this.props
    return (
      <Dialog
        isOpen={modalState}
        onClose={() => closeModal()}
        canEscapeKeyClose={true}
      >
        <div className='pt-dialog-body'>
          {this.renderModalContent(modalType)}
        </div>
      </Dialog>
    )
  }
}

DisplayModals.propTypes = {
  closeModal: PropTypes.func,
  modalState: PropTypes.bool,
  modalType: PropTypes.string
}

function mapStateToProps (state) {
  const modalState = modalStateSelector(state)
  const modalType = modalTypeSelector(state)
  return {
    modalState,
    modalType
  }
}

export default connect(mapStateToProps, {closeModal})(DisplayModals)
