/* eslint-disable react/prop-types */
import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from 'App/Theme'
import { PropTypes } from 'prop-types'
import { useDimensions } from '@react-native-community/hooks'
import { smDevice } from '../../Theme/Metrics'

function SquareButton({ ImageUrl, onPress, disabled, isInsta }) {
  const { width } = useDimensions().window
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={width > smDevice ? styles.wrapper : styles.wrapperSM}
    >
      <Image style={isInsta ? styles.img : styles.imgSM} resizeMode="contain" source={ImageUrl} />
    </TouchableOpacity>
  )
}
SquareButton.prototypes = {
  ImageUrl: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  isInsta: PropTypes.bool,
}

const styles = StyleSheet.create({
  img: {
    height: 30,
    width: 30,
  },
  imgSM: {
    height: 15,
    width: 15,
  },
  wrapper: {
    alignItems: 'center',
    borderColor: Colors.white,
    borderRadius: 3,
    borderWidth: 1,
    display: 'flex',
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
  wrapperSM: {
    alignItems: 'center',
    borderColor: Colors.white,
    borderRadius: 3,
    borderWidth: 1,
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
})

export default SquareButton
