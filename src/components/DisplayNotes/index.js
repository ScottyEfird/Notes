import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { notesSelector, modalStateSelector } from '../../selector'
import { NoteGrid, CardBody, CardColorBar, Title } from './styles'

class DisplayNotes extends Component {
  renderNoteCards () {
    const { notes } = this.props

    return notes.map((note) => {
      return (
        <CardBody key={note.id}>
          <CardColorBar color={note.color} />
          <Title>
            {note.title}
          </Title>
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

export default connect(mapStateToProps)(DisplayNotes)
