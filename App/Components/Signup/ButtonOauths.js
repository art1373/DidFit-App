import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { PropTypes } from 'prop-types'
import { Helpers, Fonts, Colors, Images } from 'App/Theme'
import { useDimensions } from '@react-native-community/hooks'
import { smDevice, isIos } from '../../Theme/Metrics'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

const renderIcon = (mode) => {
  switch (mode) {
    case 'phoneEmail':
      return <Image style={styles.icon} resizeMode="contain" source={Images.phoneEmailAuth} />
    case 'fb':
      return <Image style={styles.icon} resizeMode="contain" source={Images.fbAuth} />
    case 'twitter':
      return <Image style={styles.icon} resizeMode="contain" source={Images.googleAuth} />
    case 'google':
      return <Image style={styles.icon} resizeMode="contain" source={Images.twitterAuth} />
    // case 'apple':
    //   return <Image style={styles.appleIcon} resizeMode="contain" source={Images.appleAuth} />
    default:
      break
  }
}

function ButtonOauth({ title, onPress, disabled, mode, isApple }) {
  const { width } = useDimensions().window
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.6}>
      {isApple ? (
        <View style={width > smDevice ? styles.container : styles.containerSM}>
          <View style={styles.appleWrap}>
            <Image style={styles.appleIcon} resizeMode="contain" source={Images.appleAuth} />
            <Text style={styles.text}>{title}</Text>
          </View>
        </View>
      ) : (
        <View style={width > smDevice ? styles.container : styles.containerSM}>
          <View style={styles.iconWrap}>{renderIcon(mode)}</View>
          <Text style={styles.text}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  appleIcon: {
    height: 15,
    width: 15,
  },
  appleWrap: {
    ...Helpers.rowCenter,
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: isIos ? '46%' : '43%',
  },
  container: {
    ...Helpers.rowCenter,
    backgroundColor: Colors.white,
    borderRadius: 5,
    height: 55,
    justifyContent: 'center',
    width: '80%',
  },

  containerSM: {
    ...Helpers.rowCenter,
    backgroundColor: Colors.white,
    borderRadius: 2,
    height: isIos ? 45 : hp(8),
    width: '86%',
  },
  icon: {
    height: 25,
    width: 25,
  },
  iconWrap: {
    marginLeft: 20,
  },
  text: {
    ...Fonts.normal,
    color: Colors.black,
    fontWeight: '600',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

ButtonOauth.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  isApple: PropTypes.bool,
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
}

export default ButtonOauth
