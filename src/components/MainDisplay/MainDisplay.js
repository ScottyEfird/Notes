import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from '../NavBar'

class MainDisplay extends Component {
  render () {
    return (
      <div>
        <NavBar />
        Hello!
      </div>
    )
  }
}

MainDisplay.propTypes = {
}

function mapStateToProps (state, ownProps) {
  return {
  }
}

export default connect(mapStateToProps)(MainDisplay)
