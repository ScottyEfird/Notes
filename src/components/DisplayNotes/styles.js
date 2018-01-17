import styled from 'styled-components'

export const NoteGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-end;
  justify-content: space-evenly;
  flex-flow: row wrap;
`

export const CardBody = styled.div`
  height: 340px;
  width: 410px;
  margin: 15px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 7px 29px 1px rgba(235,235,235,1);
`

export const CardColorBar = styled.div`
width: 410px;
height: 10px;
border-radius: 10px 10px 0px 0px;
position: absolute;
background-color: ${props => props.color};
`

export const Title = styled.div`
  background-color: red;
  margin-top: 20px;

`