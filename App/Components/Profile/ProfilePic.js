import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Images, Helpers, Fonts, Colors } from 'App/Theme'

function ProfilePic() {
  return (
    <View style={styles.profilePicWrap}>
      <Image style={styles.profPic} resizeMode="cover" source={Images.profilePic} />
      <Text style={styles.text}>@ehsan</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  profPic: {
    height: 100,
    marginTop: '5%',
    width: 100,
  },
  profilePicWrap: {
    ...Helpers.center,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    ...Fonts.input,
    color: Colors.blueNeon,
    paddingTop: '3%',
  },
})

export default ProfilePic
