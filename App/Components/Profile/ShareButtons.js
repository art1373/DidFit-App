import React from 'react'
import { Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { Colors, Images } from 'App/Theme'
import { PropTypes } from 'prop-types'

const renderIcon = (mode) => {
  switch (mode) {
    case 'whatsapp':
      return <Image style={styles.icon} resizeMode="contain" source={Images.whatsAppShare} />
    case 'msg':
      return <Image style={styles.icon} resizeMode="contain" source={Images.msgShare} />
    case 'fb':
      return <Image style={styles.icon} resizeMode="contain" source={Images.fbShare} />
    case 'copy':
      return <Image style={styles.icon} resizeMode="contain" source={Images.copyLinkShare} />
    case 'sms':
      return <Image style={styles.icon} resizeMode="contain" source={Images.smsShare} />
    case 'email':
      return <Image style={styles.icon} resizeMode="contain" source={Images.emailShare} />
    default:
      break
  }
}

function ShareButtons({ onPress, mode, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 50,
          height: 50,
          width: 50,
          alignItems: 'center',
          alignContent: 'center',
          paddingVertical: 10,
        }}
      >
        {renderIcon(mode)}
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

ShareButtons.propTypes = {
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
    width: 80,
  },
  icon: {
    height: 30,
    width: 30,
  },
  title: {
    color: Colors.white,
  },
})
export default ShareButtons
