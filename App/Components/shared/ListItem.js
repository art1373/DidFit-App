import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Images, Colors, Fonts } from 'App/Theme'
import { PropTypes } from 'prop-types'

function ListItem({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.txt}>{title}</Text>
        <Image style={styles.img} resizeMode="contain" source={Images.nextIcon} />
      </View>
    </TouchableOpacity>
  )
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  img: {
    height: 15,
    width: 15,
  },
  txt: {
    ...Fonts.normal,
    color: Colors.blueNeon,
  },
})

export default ListItem
