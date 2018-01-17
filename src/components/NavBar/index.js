import React from 'react'
import PropTypes from 'prop-types'
import { NavBarWrapper, WeirdBlackBoxThing, ButtonWrapper, Button } from './styles'
import { connect } from 'react-redux'
import { openModal } from '../../actions/modals'
import modalTypes from  '../../utils'

const NavBar = ({ openModal }) => {
  return (
    <NavBarWrapper>
      <WeirdBlackBoxThing />
      <ButtonWrapper>
        <Button onClick={() => openModal(modalTypes.ADD_NOTE_MODAL)}>
          <span className='pt-icon-plus' style={{paddingRight: 20}}/>
         Add Note 
        </Button>
      </ButtonWrapper>
    </NavBarWrapper>
  )
}

NavBar.propTypes = {
  openModal: PropTypes.func
}

export default connect(null, {openModal})(NavBar)