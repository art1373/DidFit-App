import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Fonts, Colors } from 'App/Theme'
import { PropTypes } from 'prop-types'

function ActivityHead({ title }) {
  return (
    <View style={styles.msgSubHead}>
      <Text style={styles.msgSubTitle}>{title}</Text>
    </View>
  )
}
ActivityHead.propTypes = {
  title: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  msgSubHead: {
    alignItems: 'center',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    marginTop: '5%',
    width: '95%',
  },
  msgSubTitle: {
    ...Fonts.input,
    color: Colors.white,
    paddingLeft: '3%',
  },
})

export default ActivityHead
