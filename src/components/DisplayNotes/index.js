import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { notesSelector, modalStateSelector } from '../../selector'
import { NoteGrid, CardBody, TitleButton, TextBody, CardColorBar, TitleBar, Title, Hr } from './styles'
import { openModal } from '../../actions/modals'
import { modalTypes } from  '../../utils'

class DisplayNotes extends Component {
  renderNoteCards () {
    const { notes, openModal } = this.props

    return notes.map((note) => {
      return (
        <CardBody key={note.id}>
          <CardColorBar color={note.color} />
          <TitleBar>
            <Title>
              {note.title}
            </Title>
            <div>
              <TitleButton className='pt-icon-edit' />
              <TitleButton className='pt-icon-trash' onClick={() => openModal(modalTypes.DELETE_NOTE_MODAL, {noteId: note.id})} />
            </div>
          </TitleBar>
          <Hr />
          <TextBody>
            {note.body}
          </TextBody>
        </CardBody>
      )
    })
  }

  render () {
    return (
      <NoteGrid>
        {this.renderNoteCards()}
      </NoteGrid>
    )
  }
}

DisplayNotes.propTypes = {
  notes: PropTypes.array,
  openModal: PropTypes.func,
  modalState: PropTypes.bool,
}

function mapStateToProps (state) {
  const notes = notesSelector(state)
  const modalState = modalStateSelector(state)

  return {
    notes,
    modalState
  }
}

export default connect(mapStateToProps, {openModal})(DisplayNotes)
