import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Colors, Fonts } from 'App/Theme'
import { PropTypes } from 'prop-types'

function LogoutFooter({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.logout} onPress={onPress}>
      <Text style={styles.logoutTxt}>{title}</Text>
    </TouchableOpacity>
  )
}

LogoutFooter.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
}
const styles = StyleSheet.create({
  logout: {
    alignSelf: 'center',
    marginBottom: 60,
    marginTop: 60,
  },
  logoutTxt: {
    ...Fonts.input,
    color: Colors.red,
  },
})
export default LogoutFooter
