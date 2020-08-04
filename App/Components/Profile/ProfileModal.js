import React from 'react'
import { Text, StyleSheet, Animated, Easing } from 'react-native'

import { Colors } from 'App/Theme'
import { PropTypes } from 'prop-types'
const slideY = new Animated.Value(-500)

const handleOpen = () => {
  Animated.spring(slideY, {
    duration: 6000,
    toValue: 0,
    easing: Easing.inOut(1),
  }).start()
}
const handleClose = () => {
  Animated.spring(slideY, {
    duration: 6000,
    toValue: -1000,
    easing: Easing.inOut(1),
  }).start()
}

function ProfileModal({ show }) {
  React.useEffect(() => {
    if (show) {
      handleClose()
    } else {
      handleOpen()
    }
  }, [show])
  React.useEffect(() => {
    handleOpen(show)
  })
  return (
    <>
      {!show ? null : (
        <Animated.View style={[styles.container, { bottom: slideY }]}>
          <Text>modal</Text>
        </Animated.View>
      )}
    </>
  )
}

ProfileModal.propTypes = {
  show: PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.modal,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: '50%',
    position: 'absolute',
    width: '100%',
  },
})

export default ProfileModal
