import styled from 'styled-components'
import * as colors from '../../../../../style/colors'

export const ColorBar = styled.div`
  width: 840px;
  height: 15px;
  border-radius: 10px 10px 10px 0px;
  position: absolute;
  margin-top: -20px;
  margin-left: -20px;
  background-color: ${props => props.color};
`

export const AddModalWrapper = styled.div`
  width: 840px;
  height: 770px;
  display: flex;
  flex-direction: column;
`

export const ColorCube = styled.div`
  width: 30px;
  height: 30px;
  margin: 5px;
  border-radius: 5px;
  background-color: ${props => props.color};
  border-width: ${props => props.selected ? '2px;' : '0px;'}
  border-color: gray;
  border-style: solid;
`

export const Input = styled.input`
  width: 800px;
  border: none;
  height: 40px;
  font-size: 26px;  
  margin-top: 10px;
  background-color: ${colors.BACKGROUND_LIGHT_BLUE};
  
  :placeholder-shown {
    font-style: italic;
    letter-spacing: 2px;
    font-size: 26px;
  }
`
export const TextArea = styled.textarea`
  width: 800px;
  margin-top: 10px;
  height: 600px;
  font-size: 18px;
  border: none;
  background-color: ${colors.BACKGROUND_LIGHT_BLUE};
`

export const ButtonWrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-around;
`

export const Button = styled.button`
  background-color: ${props => props.color};
  color: white;
  border-radius: 4px;
  border: none;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 100;
  width: 140px;
  height: 60px;
  margin-top: 10px;
`