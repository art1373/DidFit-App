import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'
import { PropTypes } from 'prop-types'

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.txt}>Delete</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
ListItemDeleteAction.propTypes = {
  onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.error,
    justifyContent: 'center',
    width: 70,
  },
  txt: {
    color: Colors.white,
  },
})
export default ListItemDeleteAction
