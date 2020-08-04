import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Fonts } from 'App/Theme'
import PropTypes from 'prop-types'

const SigninHeaders = ({ description, description2, otherText }) => {
  return (
    <View style={styles.textWraps}>
      <Text style={styles.heading}>{description}</Text>
      <Text style={styles.heading} numberOfLines={1}>
        {description2} {otherText && otherText}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    ...Fonts.h3,
    color: Colors.lightNeon,
    fontWeight: '400',
  },
  textWraps: {
    padding: 20,
  },
})

SigninHeaders.propTypes = {
  description: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  otherText: PropTypes.string,
}

export default SigninHeaders
