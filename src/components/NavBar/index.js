import React from 'react'
import { NavBarWrapper, WeirdBlackBoxThing, ButtonWrapper, Button } from './styles'

const NavBar = () => {
  const handleOnClick = () => {
    console.log('button')
  }

  return (
    <NavBarWrapper>
      <WeirdBlackBoxThing />
      <ButtonWrapper>
        <Button onClick={handleOnClick}>
          <span className='pt-icon-plus' style={{paddingRight: 20}}/>
         Add Note 
        </Button>
      </ButtonWrapper>
    </NavBarWrapper>
  )
}

export default NavBar