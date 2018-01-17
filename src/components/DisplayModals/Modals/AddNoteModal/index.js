import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ColorBar, AddModalWrapper, ColorCube, Input, TextArea, ButtonWrapper, Button } from './styles'
import { closeModal } from '../../../../actions/modals'
import * as colors from '../../../../../style/colors'
import { addNote, updateNote } from '../../../../actions/notes'

class AddNoteModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: null,
      title: '',
      body: '',
      update: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    if(!this.props.editNote){
      this.setState({update: false})
    } else {
      const {note: {color, title, body, id} } = this.props.editNote

      color && this.setState({color})
      title && this.setState({title})
      body && this.setState({body})
      id && this.setState({id})
      this.setState({update: true})
    }
  }

  renderColorRow () {
    const selectedColor = this.state.color

    return (
      <div style={{display: 'flex'}}>
        <ColorCube
          selected={selectedColor === colors.SELECTABLE_RED}
          color={colors.SELECTABLE_RED}
          onClick={() => this.setState({color: colors.SELECTABLE_RED})}/>
        <ColorCube
          selected={selectedColor === colors.SELECTABLE_GREEN}
          color={colors.SELECTABLE_GREEN}
          onClick={() => this.setState({color: colors.SELECTABLE_GREEN})}/>
        <ColorCube
          selected={selectedColor === colors.SELECTABLE_YELLOW}
          color={colors.SELECTABLE_YELLOW}
          onClick={() => this.setState({color: colors.SELECTABLE_YELLOW})}/>
        <ColorCube
          selected={selectedColor === colors.SELECTABLE_BLUE}
          color={colors.SELECTABLE_BLUE}
          onClick={() => this.setState({color: colors.SELECTABLE_BLUE})}/>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    const { addNote, updateNote, closeModal } = this.props
    const { title, body, color, id, update } = this.state

    !update ? addNote({title, body, color}) : updateNote({title, body, color, id})
    closeModal()
  }

  render () {
    const { closeModal } = this.props
    const { update, title, body } = this.state

    return (
      <AddModalWrapper>
        {this.state.color && <ColorBar color={this.state.color}/>}
        {this.renderColorRow()}
        <form onSubmit={this.handleSubmit}>
          <Input
            placeholder='Untitled'
            type='text'
            name='noteTitle'
            value={title}
            onChange={(e) => this.setState({title: e.target.value})}/>
          <TextArea
            defaultValue={body || 'Just start typing here'}
            onChange={(e) => this.setState({body: e.target.value})}
          />

          <ButtonWrapper>
            <Button
              color={colors.GRAY}
              onClick={(e) => {
                e.preventDefault()
                closeModal()
              }}>
              Cancel
            </Button>
            {
              !update && (
                <Button
                  color={this.state.title === '' ? colors.LIGHT_CYAN : colors.CYAN}
                  onClick={(e) => {
                    e.preventDefault()
                    this.handleSubmit(e)
                  }}>
                Add
                </Button>
              )
            }
            {
              update && (
                <Button
                  color={
                    this.state.title === this.props.editNote.note.title &&
                    this.state.body === this.props.editNote.note.body &&
                    this.state.color === this.props.editNote.note.color
                      ? colors.LIGHT_CYAN
                      : colors.CYAN
                  }
                  onClick={(e) => {
                    e.preventDefault()
                    this.handleSubmit(e)
                  }}>
                Add
                </Button>
              )
            }

          </ButtonWrapper>
        </form>
      </AddModalWrapper>
    )
  }
}

AddNoteModal.propTypes = {
  closeModal: PropTypes.func,
  addNote: PropTypes.func,
  updateNote: PropTypes.func,
  editNote: PropTypes.object,
  color: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
}

export default connect(null, {addNote, updateNote, closeModal})(AddNoteModal)
