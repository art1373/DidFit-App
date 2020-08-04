/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, Image, Linking, Alert, TouchableOpacity } from 'react-native'
import styles from './UpperSectionsStyles'
import { Images } from 'App/Theme'
import { useDimensions } from '@react-native-community/hooks'
import { smDevice } from 'App/Theme/Metrics'
import ProfileActions from 'App/Stores/Profile/Actions'
import { connect } from 'react-redux'

import Header from '../Header'
import ProfilePic from '../ProfilePic'
import Followers from '../Followers'
import ButtonFollow from '../ButtonFollow'
import SquareButton from '../SquareButton'
import EditProfile from '../EditProfile/EditProfile'
import ShareModal from '../ShareModal/ShareModal'
import SendToModal from '../SendToModal/SendToModal'

function UpSec(props) {
  const { width } = useDimensions().window
  let { state, navigate } = props.navigation
  return (
    <>
      <Header
        navigation={props.navigation}
        myProfile={props.isMyProfile}
        addIconPress={props.toggleIsMyProfile}
        goBack={() => props.navigation.navigate('Home')}
      />
      <ProfilePic />
      <View>
        <Followers
          onFollowerPress={() => navigate('Followers')}
          onFollowingPress={() => navigate('Following')}
        />
      </View>
      <View style={styles.BtnWrap}>
        <ButtonFollow
          title={props.isMyProfile ? 'Edit Profile' : 'Follow'}
          onPress={props.isMyProfile ? props.toggleModalEdit : () => Alert.alert('request sent')}
        />
        <SquareButton
          ImageUrl={Images.Instagram}
          isInsta={true}
          onPress={() => Linking.openURL('https://www.instagram.com/ehsan/')}
        />
        <SquareButton ImageUrl={Images.downArrow} onPress={props.toggleModalShare} />
      </View>
      <View style={styles.staticWrapFirstSection}>
        <Text style={styles.staticText}>Taking professional portraits</Text>
        <Text style={styles.staticText}>for more picture</Text>
        <Text style={styles.staticText}>visit our instagram page</Text>
      </View>
      <View style={styles.linkWrap}>
        <View style={styles.linkWrap2}>
          <Image style={styles.linkIcon} resizeMode="contain" source={Images.borkenLinkIcon} />
          <Text style={width > smDevice ? styles.staticText : styles.staticTextSM}>
            https://www.instagram.com/ehsnai
          </Text>
        </View>
      </View>
      <View style={styles.tabWrap}>
        <TouchableOpacity
          style={[styles.tabPressWrap, styles.atStart]}
          activeOpacity={0.6}
          onPress={props.menuPress}
        >
          <Image
            style={styles.likeIcon}
            resizeMode="contain"
            source={!props.showLiked ? Images.menuIcon : Images.menuIconD}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabPressWrap, styles.atEnd]}
          activeOpacity={0.6}
          onPress={props.likedPress}
        >
          <Image
            style={styles.likeIcon}
            resizeMode="contain"
            source={props.showLiked ? Images.likeIconA : Images.likeIconD}
          />
        </TouchableOpacity>
      </View>

      <EditProfile isVisible={props.modalEdit} closeModal={props.toggleModalEdit} />
      {props.isMyProfile ? (
        <ShareModal
          isVisible={props.modalShareVisible}
          onBackButtonPress={props.toggleModalShare}
          onBackdropPress={props.toggleModalShare}
          onCancel={props.toggleModalShare}
        />
      ) : (
        <SendToModal
          isVisible={props.modalShareVisible}
          onBackButtonPress={props.toggleModalShare}
          onBackdropPress={props.toggleModalShare}
          onCancel={props.toggleModalShare}
        />
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  modalShareVisible: state.profile.modalShareSendVisible,
  modalEdit: state.profile.modalEditVisible,
  isMyProfile: state.profile.myProfile,
})
const mapDispatchToProps = (dispatch) => ({
  toggleModalEdit: () => dispatch(ProfileActions.toggleEditModal()),
  toggleModalShare: () => dispatch(ProfileActions.toggleShareModal()),
  toggleIsMyProfile: () => dispatch(ProfileActions.toggleIsMyProfile()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UpSec)
