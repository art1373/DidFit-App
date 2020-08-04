import React from 'react'
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors, Images, Fonts } from 'App/Theme'
import { PropTypes } from 'prop-types'

const renderIcon = (mode) => {
  switch (mode) {
    case 'report':
      return <Image style={styles.icon} resizeMode="contain" source={Images.reportIcon} />
    case 'block':
      return <Image style={styles.icon} resizeMode="contain" source={Images.blockIcon} />
    case 'sendMsg':
      return <Image style={styles.icon} resizeMode="contain" source={Images.sendMsgIcon} />
    default:
      break
  }
}

function ModalActionButton({ onPress, mode, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {renderIcon(mode)}
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

ModalActionButton.propTypes = {
  onPress: PropTypes.func,
  mode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: 80,
    justifyContent: 'space-evenly',
    width: 90,
  },
  icon: {
    height: 40,
    width: 40,
  },
  title: {
    ...Fonts.normal,
    color: Colors.white,
  },
})
export default ModalActionButton
