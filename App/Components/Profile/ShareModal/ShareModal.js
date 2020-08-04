import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { Colors, Images } from 'App/Theme'
import { PropTypes } from 'prop-types'
import { smDevice } from '../../../Theme/Metrics'
import { useDimensions } from '@react-native-community/hooks'

import ShareButtons from '../ShareButtons'
import Modal from 'react-native-modal'

function ShareModal({ onCancel, isVisible, onBackButtonPress, onBackdropPress }) {
  const { width, height } = useDimensions().window
  return (
    <Modal
      isVisible={isVisible}
      animationIn={'slideInUp'}
      animationInTiming={600}
      animationOutTiming={600}
      backdropColor={Colors.transparent}
      style={styles.modalBackDrop}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackdropPress}
    >
      <View
        style={[
          width > smDevice ? styles.modalContainer : styles.modalContainerSM,
          // eslint-disable-next-line react-native/no-inline-styles
          { marginTop: width > smDevice ? height / 2.9 : '20%' },
        ]}
      >
        <View style={styles.modal__ProfilePicSection}>
          <Image style={styles.modal__profilePic} resizeMode="cover" source={Images.profilePic} />
        </View>
        <Text style={styles.modal__ShareProfileText}>Share Profile</Text>
        <ScrollView horizontal>
          <ShareButtons mode="whatsapp" title="whatsapp" />
          <ShareButtons mode="msg" title="Message" />
          <ShareButtons mode="fb" title="Facebook" />
          <ShareButtons mode="copy" title="Copy Link" />
          <ShareButtons mode="sms" title="SMS" />
          <ShareButtons mode="email" title="E-Mail" />
        </ScrollView>
        <View style={styles.modal__footerSection}>
          <TouchableOpacity onPress={onCancel} activeOpacity={0.6}>
            <Text style={styles.moda__footerCancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

ShareModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.bool.isRequired,
  onBackButtonPress: PropTypes.func.isRequired,
  onBackdropPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  moda__footerCancel: {
    alignSelf: 'center',
    color: Colors.lightNeon,
    fontSize: 15,
    marginTop: 20,
  },
  modalBackDrop: {
    alignSelf: 'center',
    width: '100%',
  },
  modalContainer: {
    backgroundColor: Colors.modal,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: '70%',
  },
  modalContainerSM: {
    backgroundColor: Colors.modal,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: '100%',
  },
  modal__ProfilePicSection: {
    alignSelf: 'center',
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
    marginTop: 10,
    padding: 20,
    width: '100%',
  },
  modal__ShareProfileText: {
    alignSelf: 'center',
    color: Colors.white,
    marginBottom: smDevice ? '5%' : '10%',
    marginTop: smDevice ? '5%' : '20%',
  },
  modal__footerSection: {
    backgroundColor: Colors.primaryDark,
    bottom: 0,
    height: '15%',
    position: 'absolute',
    width: '100%',
  },
  modal__profilePic: {
    alignSelf: 'center',
    height: 180,
    width: 180,
  },
})

export default ShareModal
