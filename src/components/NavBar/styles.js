import styled from 'styled-components'
import * as colros from '../../../style/colors'

export const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  height: 110px;
  background-color: ${colros.DARK_BLUE_GRAY};
`

export const WeirdBlackBoxThing = styled.div`
  height: 60px;
  width: 250px;
  margin-left: 100px;
  margin-top: 25px;
  background-color: ${colros.BLUE_GRAY};
`

export const ButtonWrapper = styled.div`
  margin-right: 100px;
  margin-top: 25px;
`

export const Button = styled.button`
  height: 60px;
  width: 250px;
  background-color: ${colros.CYAN};
  color: white;
  border-radius: 4px;
  border: none;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 100;

  :hover {
    background-color: ${colros.DARK_CYAN};
  }
`