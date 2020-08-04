import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import { Colors, Images } from 'App/Theme'

function FabCirlce({ onPress, disabled }) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={styles.container}>
        <Image style={styles.plus} resizeMode="cover" source={Images.plusIcon} />
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.blueNeon,
    borderRadius: 50,
    display: 'flex',
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
  plus: {
    height: 40,
    width: 40,
  },
})

FabCirlce.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
}

export default FabCirlce
