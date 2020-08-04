import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors, Helpers, Fonts, Images } from 'App/Theme'
import { PropTypes } from 'prop-types'
import { useDimensions } from '@react-native-community/hooks'
import { smDevice } from '../../Theme/Metrics'

function Header({ navigation, myProfile, goBack, addIconPress }) {
  const { width } = useDimensions().window
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.addIconWrap} onPress={myProfile ? goBack : addIconPress}>
        <Image
          style={width > smDevice ? styles.addIcon : styles.addIconSM}
          resizeMode="contain"
          source={myProfile ? Images.backIcon : Images.addIcon}
        />
      </TouchableOpacity>
      <Text style={width > smDevice ? styles.heading : styles.headingSM}>Ehsan</Text>
      <TouchableOpacity
        style={styles.settingIconWrap}
        onPress={() => navigation.navigate('SettingsPrivacy')}
        activeOpacity={0.6}
      >
        <Image style={styles.moreIcon} resizeMode="contain" source={Images.moreIcon} />
      </TouchableOpacity>
    </View>
  )
}

Header.propTypes = {
  navigation: PropTypes.object,
  navigate: PropTypes.func,
  goBack: PropTypes.func,
  addIconPress: PropTypes.func,
  myProfile: PropTypes.bool,
}
const styles = StyleSheet.create({
  addIcon: {
    height: 25,
    marginLeft: 5,
    width: 25,
  },
  addIconSM: {
    height: 20,
    marginLeft: 5,
    width: 20,
  },
  addIconWrap: {
    width: '20%',
  },
  header: {
    ...Helpers.center,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  heading: {
    ...Fonts.h4,
    color: Colors.blueNeon,
  },
  headingSM: {
    ...Fonts.input,
    color: Colors.blueNeon,
  },
  moreIcon: {
    alignSelf: 'flex-end',
    height: 40,
    marginRight: 10,
    width: 20,
  },
  settingIconWrap: {
    width: '20%',
  },
})

export default Header
