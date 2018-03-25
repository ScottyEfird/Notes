import React, { Component } from 'react'
import { TopBar, StockWrapper, ButtonRow, Input, Button } from './stockWidgetStyles'
import dataList from '../../utils'
import WidgetBody from '../WidgetBody/widgetBody'

export default class StockWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imputValue: '',
      stockInfo: undefined
    }
  }

  onChange = (e) => this.setState({ imputValue: e.target.value })
  onSubmit = (e) => {
    e.preventDefault()
    dataList[this.state.imputValue] && this.setState({ stockInfo: dataList[this.state.imputValue]})
  }

  render() {
    return (
      <StockWrapper>
        <TopBar />
        <WidgetBody stock={this.state.stockInfo}/>
        <form onSubmit={this.onSubmit}>
          <ButtonRow>
            <Input placeholder={''} value={this.state.imputValue} onChange={this.onChange} />
            <Button>Get New Quote</Button>
          </ButtonRow>
        </form>
      </StockWrapper>
    )
  }
}
