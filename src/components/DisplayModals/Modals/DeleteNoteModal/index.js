import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DeleteModalWrapper, ButtonWrapper } from './styles'
import { Title, TextBody } from '../../../DisplayNotes/styles'
import { Button } from '../AddNoteModal/styles'
import * as colors from '../../../../../style/colors'
import { deleteNote } from '../../../../actions/notes'
import { closeModal } from '../../../../actions/modals'

const DeleteNoteModal = ({ modalPayload, closeModal, deleteNote }) => {
  return (
    <DeleteModalWrapper>
      <Title>
        Delete Note
      </Title>
      <TextBody style={{marginBottom: 80, marginTop: 30}}>
        Are you sure you want to delete this note?
      </TextBody>
      <ButtonWrapper>
        <Button
          color={colors.GRAY}
          onClick={(e) => {
            e.preventDefault()
            closeModal()
          }}>
            Cancel
        </Button>
        <Button
          color={colors.CYAN}
          onClick={(e) => {
            e.preventDefault()
            deleteNote(modalPayload.noteId)
            closeModal()
          }}>
            Delete
        </Button>
      </ButtonWrapper>
    </DeleteModalWrapper>
  )
}

DeleteNoteModal.propTypes = {
  closeModal: PropTypes.func,
  deleteNote: PropTypes.func,
  modalPayload: PropTypes.object
}

export default connect(null, {closeModal, deleteNote})(DeleteNoteModal)