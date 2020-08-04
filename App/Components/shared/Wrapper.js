import React from 'react'
import { Image } from 'react-native'
import { PropTypes } from 'prop-types'

function Wrapper({ data }) {
  return <Image resizeMode="center" source={require('App/Assets/Images/mock/1.png')} />
}
Wrapper.propTypes = {
  data: PropTypes.object.isRequired,
  imgUrl: PropTypes.string.isRequired,
}

export default Wrapper
