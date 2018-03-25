import React, { Component } from 'react'
import AppWrapper from './AppWrapper'
import StockWidget from '../StockWidget/stockWidget'

export default class App extends Component {
  render() {
    return (
      <AppWrapper>
        <StockWidget />
      </AppWrapper>
    )
  }
}
