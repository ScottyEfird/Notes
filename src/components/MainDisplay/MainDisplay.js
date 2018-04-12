import React, { Component } from 'react'
import NavBar from '../NavBar'
import DisplayModals from '../DisplayModals'
import DisplayNotes from '../DisplayNotes'
import { MainDisplayWrapper } from './styles'

class MainDisplay extends Component {
  render () {
    return (
      <MainDisplayWrapper>
        <NavBar />
        <DisplayModals />
        <DisplayNotes />
      </MainDisplayWrapper>
    )
  }
}

MainDisplay.propTypes = {
}

export default MainDisplay
