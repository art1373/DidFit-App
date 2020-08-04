import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import { useDimensions } from '@react-native-community/hooks'

import { Colors, Fonts } from 'App/Theme'
import { smDevice } from '../../Theme/Metrics'

function RoundButton({ onPress, title, disabled, img }) {
  const { width } = useDimensions().window

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={width > smDevice ? styles.row : styles.rowSM}>
        <Image
          style={width > smDevice ? styles.img : styles.imgSM}
          resizeMode="contain"
          source={img}
        />
        <Text style={styles.txt}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
RoundButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  img: PropTypes.number,
}

const styles = StyleSheet.create({
  img: {
    height: 70,
    width: 70,
  },
  imgSM: {
    height: 60,
    width: 60,
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    width: '50%',
  },
  rowSM: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    width: '50%',
  },
  txt: {
    ...Fonts.normal,
    color: Colors.blueNeon,
    minWidth: '100%',
    paddingLeft: 15,
  },
})

export default RoundButton
