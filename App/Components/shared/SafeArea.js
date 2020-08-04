/* eslint-disable react/prop-types */
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

const SafeArea = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
})

export default SafeArea
