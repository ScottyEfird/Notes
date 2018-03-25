import React, { Component } from 'react'
import { StockWrapper, ContnetRow } from './stockWidgetStyles'
import dataList from '../../utils'

export default class StockWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imputValue: '',
    }
  }
  
  onChange = (e) => this.setState({ imputValue: e.target.value })
  onSubmit = (e) => {
    e.preventDefault()
    console.log(dataList[this.state.imputValue])
    // console.log(this.state.imputValue)
  }

  render() {
    return (
      <StockWrapper>
        <form onSubmit={this.onSubmit}>
          <ContnetRow>
            <input placeholder={''} value={this.state.imputValue} onChange={this.onChange} />
            <button>Get New Quote</button>
          </ContnetRow>
        </form>
      </StockWrapper>
    )
  }
}
