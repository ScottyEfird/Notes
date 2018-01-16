import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class MainDisplay extends Component {
  render () {
    return (
      <div>
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
