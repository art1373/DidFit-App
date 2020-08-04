import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Colors, Fonts } from 'App/Theme'
import PropTypes from 'prop-types'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

const ButtonCurve = ({ title, color, onPress, txtColor, borderColor, width, disabled }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={disabled}
      style={[
        styles.button,
        { width: width || '80%', backgroundColor: color, borderColor: borderColor },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: disabled ? Colors.white : txtColor }]}>{title}</Text>
    </TouchableOpacity>
  )
}
ButtonCurve.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  width: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.blueNeon,
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: 10,
    padding: wp(4),
    width: '80%',
  },
  text: {
    ...Fonts.input,
    color: Colors.primary,
    textTransform: 'uppercase',
  },
})
export default ButtonCurve
