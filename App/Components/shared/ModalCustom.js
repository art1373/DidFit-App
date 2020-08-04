import React from 'react'
import { View, Modal, SafeAreaView } from 'react-native'

import { PropTypes } from 'prop-types'
import { Colors } from 'App/Theme'

function ModalCustom({ children, isVisible, close, style }) {
  return (
    <Modal animated animationType={'slide'} visible={isVisible} onRequestClose={close}>
      <View style={style}>
        <SafeAreaView style={{ backgroundColor: Colors.primary }} />
        {children}
      </View>
    </Modal>
  )
}

ModalCustom.propTypes = {
  children: PropTypes.array,
  isVisible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  style: PropTypes.object,
}

export default ModalCustom
