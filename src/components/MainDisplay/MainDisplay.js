import React, { Component } from 'react'
import NavBar from '../NavBar'
import DisplayModals from '../DisplayModals'
import { MainDisplayWrapper } from './styles'

class MainDisplay extends Component {
  render () {
    return (
      <MainDisplayWrapper>
        <NavBar />
        <DisplayModals />
      </MainDisplayWrapper>
    )
  }
}

MainDisplay.propTypes = {
}

export default MainDisplay
