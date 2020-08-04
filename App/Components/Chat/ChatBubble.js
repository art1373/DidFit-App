import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'
import { Colors, Fonts } from 'App/Theme'

function ChatBubble(props) {
  return (
    <View
      style={props.position === 'left' ? styles.bubbleContianerLeft : styles.bubbleContianerRight}
    >
      <Text style={props.position === 'left' ? styles.chatTextLeft : styles.chatTextRight}>
        {props.currentMessage.text}
      </Text>
    </View>
  )
}

ChatBubble.propTypes = {
  currentMessage: PropTypes.object,
  position: PropTypes.string,
}
const styles = StyleSheet.create({
  bubbleContianerLeft: {
    backgroundColor: Colors.primary,
    borderRadius: 50,
    maxWidth: '70%',
    padding: 10,
  },
  bubbleContianerRight: {
    backgroundColor: Colors.blueNeon,
    borderRadius: 50,
    maxWidth: '70%',
    padding: 10,
  },
  chatTextLeft: {
    ...Fonts.normal,
    color: Colors.lightNeon,
  },
  chatTextRight: {
    ...Fonts.normal,
    color: Colors.primary,
  },
})

export default ChatBubble
