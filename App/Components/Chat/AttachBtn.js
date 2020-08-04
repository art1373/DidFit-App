import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Images } from 'App/Theme'
import { PropTypes } from 'prop-types'
import { isAndroid } from '../../Theme/Metrics'

function AttachButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.6}>
      <Image resizeMode="contain" style={styles.icon} source={Images.attachIcon} />
    </TouchableOpacity>
  )
}
AttachButton.propTypes = {
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: isAndroid ? 20 : null,
    padding: 10,
  },
  icon: {
    height: 30,
    width: 30,
  },
})

export default AttachButton
