import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Fonts, Colors } from 'App/Theme'
import { PropTypes } from 'prop-types'

function MessageHead({ onPressRequests }) {
  return (
    <View style={styles.msgSubHead}>
      <Text style={styles.msgSubTitle}>Messages</Text>
      <TouchableOpacity onPress={onPressRequests}>
        <Text style={styles.msgRequests}>2 Requests</Text>
      </TouchableOpacity>
    </View>
  )
}
MessageHead.propTypes = {
  onPressRequests: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  msgRequests: {
    ...Fonts.normal,
    color: Colors.blueNeon,
  },
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

export default MessageHead
