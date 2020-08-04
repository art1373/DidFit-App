import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import { Helpers, Fonts, Colors } from 'App/Theme'
import { useDimensions } from '@react-native-community/hooks'
import { smDevice } from '../../Theme/Metrics'

function ButtonFollow({ title, onPress, disabled, myProfile }) {
  const { width } = useDimensions().window

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.6}
      style={width > smDevice ? styles.container : styles.containerSM}
    >
      <Text style={styles.text}>{!myProfile ? title : 'Edit Profile'}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    ...Helpers.rowCenter,
    backgroundColor: Colors.blueNeon,
    borderRadius: 2,
    height: 60,
    width: 220,
  },
  containerSM: {
    ...Helpers.rowCenter,
    backgroundColor: Colors.blueNeon,
    borderRadius: 2,
    height: 50,
    width: 160,
  },
  text: {
    ...Fonts.h4,
    color: Colors.primary,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

ButtonFollow.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  myProfile: PropTypes.bool.isRequired,
}

export default ButtonFollow
