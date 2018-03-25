import React from 'react'
import { WidgetBodyWrapper, ContnetRow, Title, Hr, TimeStamp, Heading, Value, StockChangeValue } from './widgetBodyStyles'
import { MoneyFormat } from '../../utils/formatUtils'

function WidgetBody({ stock }) {
  return (
    <WidgetBodyWrapper>
      <ContnetRow>
        <Title>{stock && stock.Name || '-------'}</Title>
      </ContnetRow>
      <ContnetRow>
        <Value style={{fontSize: 24, fontFamily: 'Monospace'}}>{stock && stock.LastPrice || '-------'}</Value>
        <StockChangeValue Change={stock && stock.Change}>{stock && parseFloat(stock.Change).toFixed(2) + ' (' + parseFloat(stock.ChangePercent).toFixed(2) + ')%' || '-------'}</StockChangeValue>
      </ContnetRow>
      <Hr/>
      <ContnetRow>
        <Heading>Range</Heading>
        <Value>{stock && stock.Low + " - " + stock.High || '-------'}</Value>
      </ContnetRow>
      <Hr/>
      <ContnetRow>
        <Heading>Open</Heading>
        <Value>{stock && stock.Open || '-------'}</Value>
      </ContnetRow>
      <Hr/>
      <ContnetRow>
        <Heading>Volume</Heading>
        <Value>{stock && MoneyFormat(stock.Volume) || '-------'}</Value>
      </ContnetRow>
      <Hr/>
      <ContnetRow>
        <Heading>Market Cap</Heading>
        <Value>{stock && MoneyFormat(stock.MarketCap) || '-------'}</Value>
      </ContnetRow>
      <Hr/>
      <TimeStamp>
        {stock && 'As of ' + stock.Timestamp || '-------'}
      </TimeStamp>
      <Hr/>
    </WidgetBodyWrapper>
  )
}

export default WidgetBody