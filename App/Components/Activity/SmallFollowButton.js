import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import { Colors, Fonts, Helpers } from 'App/Theme'

function SmallFollowButton({ title, onPress, isFollowRequested }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View style={isFollowRequested ? styles.containerRequest : styles.container}>
        <Text style={isFollowRequested ? styles.txtReq : styles.txt}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

SmallFollowButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isFollowRequested: PropTypes.bool,
}

const styles = StyleSheet.create({
  container: {
    ...Helpers.rowCenter,
    backgroundColor: Colors.dirtyNeon,
    borderRadius: 5,
    height: 30,
    justifyContent: 'center',
    width: 90,
  },
  containerRequest: {
    ...Helpers.rowCenter,
    backgroundColor: Colors.white,
    borderRadius: 5,
    elevation: 10,
    height: 30,
    justifyContent: 'center',
    width: 90,
  },
  txt: {
    ...Fonts.input,
    color: Colors.white,
  },
  txtReq: {
    ...Fonts.input,
    color: Colors.primary,
  },
})

export default SmallFollowButton
