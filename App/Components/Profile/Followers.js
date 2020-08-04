import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Helpers, Fonts, Colors } from 'App/Theme'
import { useDimensions } from '@react-native-community/hooks'
import { smDevice } from '../../Theme/Metrics'
import { PropTypes } from 'prop-types'

function Followers({ onFollowingPress, onFollowerPress }) {
  const { width } = useDimensions().window
  return (
    <View style={styles.flwrsWrap}>
      <TouchableOpacity
        onPress={onFollowingPress}
        activeOpacity={0.6}
        style={width > smDevice ? styles.flwrsHeading : styles.flwrsHeadingSM}
      >
        <>
          <Text style={styles.flwrText}>10</Text>
          <Text style={[styles.flwrText, { color: Colors.white }]}>Following</Text>
        </>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onFollowerPress}
        activeOpacity={0.6}
        style={width > smDevice ? styles.flwrsHeading : styles.flwrsHeadingSM}
      >
        <>
          <Text style={styles.flwrText}>10 M</Text>
          <Text style={[styles.flwrText, { color: Colors.white }]}>Followers</Text>
        </>
      </TouchableOpacity>
      <View style={width > smDevice ? styles.flwrsHeading : styles.flwrsHeadingSM}>
        <Text style={styles.flwrText}>50,5</Text>
        <Text style={[styles.flwrText, { color: Colors.white }]}>Likes</Text>
      </View>
    </View>
  )
}

Followers.propTypes = {
  onFollowingPress: PropTypes.func,
  onFollowerPress: PropTypes.func,
}

const styles = StyleSheet.create({
  flwrText: {
    ...Fonts.input,
    color: Colors.blueNeon,
    paddingBottom: '2%',
  },
  flwrsHeading: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '20%',
  },
  flwrsHeadingSM: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '25%',
  },
  flwrsWrap: {
    ...Helpers.rowCenter,
    justifyContent: 'space-evenly',
    marginTop: '5%',
  },
})

export default Followers
