import styled from 'styled-components'

export const StockWrapper = styled.div`
  width: 400px;
  height: 300px;
  border-style: groove;
`

export const ContnetRow  = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
`

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  align-items: flex-end;
`

export const Input = styled.input`
  flex: 1;
  width: 50%;
  height: 30px;
  border-radius: 5px;
  margin-right: 2px;
`

export const Button = styled.button`
  flex: 1;
  width: 50%;
  height: 30px;
  border-radius: 5px;
  margin-left: 2px;
`
export const TopBar = styled.div`
  padding-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 2px solid #000;
`
