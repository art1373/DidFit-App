import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Colors } from 'App/Theme'

function ListItemSeparator() {
  return <View style={styles.separator} />
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: Colors.primary,
    height: 1,
    width: '100%',
  },
})

export default ListItemSeparator
