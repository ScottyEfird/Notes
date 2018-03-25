import styled from 'styled-components'

export const WidgetBodyWrapper = styled.div`
  padding: 10px;
`

export const ContnetRow  = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
`
export const Title = styled.div`
  font-family: "Monospace";
  font-size: 24px;
  padding-bottom: 5px;
`

export const Hr = styled.div`
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom: 1px solid #d3d3d3;
`

export const Heading = styled.div`
  color: #909090;
`

export const Value = styled.div`
  font-weight: bold;
`

export const TimeStamp = styled.div`
  font-size: 12px;
  color: #909090;
  display: flex;
  padding-top: 5px;
	justify-content: flex-end;
`

export const StockChangeValue = styled.div`
  font-size: 24px;
  color: ${props => props.Change > 0 ? 'green' : props.Change ? 'red' : 'black'};
`