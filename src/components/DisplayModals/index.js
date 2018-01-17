import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { modalStateSelector } from '../../selector'
import { closeModal } from '../../actions/modals'
import { Dialog } from "@blueprintjs/core"

class DisplayModals extends Component {
  render () {
    const { closeModal, modalState } = this.props
    
    return (
      <Dialog
        isOpen={modalState}
        onClose={() => closeModal()}
        canEscapeKeyClose={true}
      >
        <div className='pt-dialog-body'>
          Some content
        </div>       
      </Dialog>
    )
  }
}

DisplayModals.propTypes = {
  closeModal: PropTypes.func,
  modalState: PropTypes.bool
}

function mapStateToProps (state) {
  const modalState = modalStateSelector(state)
  
  return {
    modalState
  }
}

export default connect(mapStateToProps, {closeModal})(DisplayModals)
