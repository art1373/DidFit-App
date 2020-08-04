import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import { Helpers, Fonts, Colors } from 'App/Theme'
import { useDimensions } from '@react-native-community/hooks'
import { smDevice } from 'App/Theme/Metrics'

function ButtonSignup({ title, onPress, disabled }) {
  const { width } = useDimensions().window

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={width > smDevice ? styles.container : styles.containerSM}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    ...Helpers.rowCenter,
    backgroundColor: Colors.blueNeon,
    borderRadius: 5,
    height: 35,
    width: '50%',
  },
  containerSM: {
    ...Helpers.rowCenter,
    backgroundColor: Colors.blueNeon,
    borderRadius: 5,
    height: 35,
    width: '50%',
  },
  text: {
    ...Fonts.normal,
    color: Colors.lightPrimary,
    fontWeight: '500',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

ButtonSignup.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
}

export default ButtonSignup
