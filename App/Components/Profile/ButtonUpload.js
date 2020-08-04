import React from 'react'
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Fonts, Colors, Images } from 'App/Theme'
import { PropTypes } from 'prop-types'

function ButtonUpload({ onPress }) {
  return (
    <>
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <Image style={styles.profPic} resizeMode="contain" source={Images.manProfile} />
        <Image style={styles.upIcon} resizeMode="cover" source={Images.uploadIcon} />
      </TouchableOpacity>
      <Text style={styles.uploadTxt}>Change photo</Text>
    </>
  )
}

ButtonUpload.propTypes = {
  onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  profPic: {
    height: 100,
    width: 100,
  },
  upIcon: {
    height: 100,
    position: 'absolute',
    width: 100,
  },
  uploadTxt: {
    ...Fonts.normal,
    alignSelf: 'center',
    color: Colors.lightNeon,
    paddingTop: 10,
  },
})

export default ButtonUpload
