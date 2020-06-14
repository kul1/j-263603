import React from 'react'
import PropTypes from 'prop-types'

const HelloWorld = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

export default HelloWorld

