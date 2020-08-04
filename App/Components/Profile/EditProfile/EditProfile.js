import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { PropTypes } from 'prop-types'
import { Colors, Images, Helpers } from 'App/Theme'

import Header from '../../shared/Header'
import Modal from '../../shared/ModalCustom'
import ButtonUpload from '../ButtonUpload'

function EditProfile({ isVisible, closeModal }) {
  return (
    <Modal isVisible={isVisible} close={closeModal} style={styles.modal}>
      <Header title="Edit Profile" goBack={closeModal} sectionWidth={'65%'} />
      <View style={styles.uploadPicWrap}>
        <ButtonUpload onPress={null} />
      </View>
      <View style={styles.profileInfoWrap}>
        <View style={styles.profileInfoRow}>
          <Text style={styles.infoTxt}>Name</Text>
          <View style={{ ...Helpers.rowCenter }}>
            <Text style={styles.infoTxt}>Ehsan Ahmadi</Text>
            <Image style={styles.next} resizeMode="contain" source={Images.nextIcon} />
          </View>
        </View>
        <View style={styles.profileInfoRow}>
          <Text style={styles.infoTxt}>Username</Text>
          <View style={styles.rowEnd}>
            <Text style={styles.infoTxt}>ehsanahmadi</Text>
            <Image style={styles.next} resizeMode="contain" source={Images.nextIcon} />
          </View>
        </View>
        <View style={styles.profileInfoRow}>
          <View style={styles.questLink}>
            <TouchableOpacity
              style={styles.questLink}
              activeOpacity={0.6}
              onPress={() => Alert.alert('Clipboard')}
            >
              <Text style={styles.infoTxt}>quest.com/@ehsan</Text>
              <Image style={styles.next} resizeMode="contain" source={Images.copyIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileInfoRow}>
          <Text style={styles.infoTxt}>Bio</Text>
          <View style={styles.rowEnd}>
            <Text style={styles.infoTxt}>Add a bio to your profile</Text>
            <TouchableOpacity activeOpacity={0.6} onPress={() => Alert.alert('Clipboard')}>
              <Image style={styles.next} resizeMode="contain" source={Images.nextIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

EditProfile.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  infoTxt: {
    color: Colors.lightNeon,
    opacity: 0.8,
    paddingRight: '2%',
  },
  modal: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  next: {
    height: 15,
    width: 15,
  },
  profileInfoRow: {
    ...Helpers.rowCenter,
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },
  profileInfoWrap: {
    ...Helpers.col,
    height: '30%',
    justifyContent: 'space-between',
  },
  questLink: {
    ...Helpers.rowCenter,
    justifyContent: 'flex-end',
    width: '100%',
  },
  rowEnd: {
    ...Helpers.rowCenter,
    justifyContent: 'space-between',
  },
  uploadPicWrap: {
    ...Helpers.colCenter,
    alignSelf: 'center',
    marginTop: '10%',
  },
})

export default EditProfile
