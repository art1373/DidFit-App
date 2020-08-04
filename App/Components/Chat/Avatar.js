import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'

function Avatar({ avatarUrl }) {
  return (
    <View>
      <Image style={styles.img} resizeMode="contain" source={avatarUrl} />
    </View>
  )
}

Avatar.propTypes = {
  avatarUrl: PropTypes.number,
}
const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
  },
})

export default Avatar
