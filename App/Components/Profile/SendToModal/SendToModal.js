import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native'
import { Colors, Images, Helpers } from 'App/Theme'
import { PropTypes } from 'prop-types'
import { smDevice, isIos, isAndroid } from '../../../Theme/Metrics'
import { useDimensions } from '@react-native-community/hooks'

import Modal from 'react-native-modal'
import ShareButtons from '../ShareButtons'
import ModalActionButton from './ModalActionButton'

function SendToModal({ onCancel, isVisible, onBackButtonPress, onBackdropPress }) {
  const littlePadTop = { paddingTop: 5 }
  const { width } = useDimensions().window
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
        style={
          width <= smDevice && isAndroid
            ? styles.modalContainerAndroidSM
            : width <= smDevice && isIos
            ? styles.modalContainerIosSM
            : styles.modalContainer
        }
      >
        <View style={styles.modal__SendToSection}>
          <Text style={styles.modal__ShareProfileText}>Send to</Text>
          <View style={styles.modal__SendRow}>
            <View>
              <Image
                style={styles.modal__profilePic}
                resizeMode="cover"
                source={Images.carProfile}
              />
              <Text style={[styles.modal__ShareProfileText, littlePadTop]}>Ehsan</Text>
            </View>
            <View>
              <Image style={styles.modal__more} resizeMode="cover" source={Images.moreChevIcon} />
              <Text style={[styles.modal__ShareProfileText, littlePadTop]}>More</Text>
            </View>
          </View>
        </View>
        <View style={styles.modal__shareWrap}>
          <Text style={styles.modal__ShareProfileText}>Share to</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ShareButtons mode="whatsapp" title="whatsapp" />
            <ShareButtons mode="msg" title="Message" />
            <ShareButtons mode="fb" title="Facebook" />
            <ShareButtons mode="copy" title="Copy Link" />
            <ShareButtons mode="sms" title="SMS" />
            <ShareButtons mode="email" title="E-Mail" />
          </ScrollView>
        </View>
        <View style={styles.modal__actionButtons}>
          <ModalActionButton mode="report" title="Report" onPress={() => Alert.alert('reported')} />
          <ModalActionButton mode="block" title="Block" onPress={() => Alert.alert('blocked')} />
          <ModalActionButton
            mode="sendMsg"
            title="Send Message"
            onPress={() => Alert.alert('navigate to chat')}
          />
        </View>
        <TouchableOpacity onPress={onCancel} activeOpacity={0.6}>
          <Text style={styles.moda__footerCancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}
SendToModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.bool.isRequired,
  onBackButtonPress: PropTypes.func.isRequired,
  onBackdropPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  moda__footerCancel: {
    alignSelf: 'center',
    color: Colors.white,
    fontSize: 15,
    marginTop: 20,
  },
  modalBackDrop: {
    alignSelf: 'center',
    width: '100%',
  },
  modalContainer: {
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: isIos ? '80%' : '100%',
    marginTop: '100%',
  },
  modalContainerAndroidSM: {
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: isIos ? '80%' : '100%',
    marginTop: '30%',
  },
  modalContainerIosSM: {
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: isIos ? '80%' : '100%',
    marginTop: '60%',
  },
  modal__SendRow: {
    ...Helpers.rowCenter,
    justifyContent: 'space-between',
    marginLeft: 20,
    width: '35%',
  },
  modal__SendToSection: {
    ...Helpers.colMain,
    alignSelf: 'center',
    backgroundColor: Colors.modalLight,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    width: '100%',
  },
  modal__ShareProfileText: {
    alignSelf: 'center',
    color: Colors.white,
    paddingBottom: 10,
  },
  modal__actionButtons: {
    ...Helpers.rowCenter,
    backgroundColor: Colors.primary,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    padding: 15,
  },
  modal__more: {
    alignSelf: 'center',
    height: 50,
    width: 50,
  },
  modal__profilePic: {
    alignSelf: 'center',
    height: 50,
    width: 50,
  },
  modal__shareWrap: {
    backgroundColor: Colors.primary,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    padding: 15,
  },
})

export default SendToModal
