import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Switch } from 'react-native'
import { PropTypes } from 'prop-types'

import { Colors, Fonts, Images } from 'App/Theme'

function SettingItem({ title, img, onPress, settingName, withSwitch, swtichEnable, toggleSwitch }) {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.txtHead}>{title}</Text>}
      <TouchableOpacity onPress={onPress}>
        <View style={styles.row}>
          <View style={styles.settingWrap}>
            <Image style={styles.icon} resizeMode="contain" source={img} />
            <Text style={styles.txt}>{settingName}</Text>
          </View>
          {withSwitch ? (
            <View style={styles.switchWrap}>
              <Switch
                trackColor={{ false: Colors.white, true: Colors.blueNeon }}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.white}
                onValueChange={toggleSwitch}
                value={swtichEnable}
              />
            </View>
          ) : (
            <Image style={styles.chevron} resizeMode="contain" source={Images.nextIcon} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}

SettingItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  settingName: PropTypes.string.isRequired,
  withSwitch: PropTypes.bool,
  swtichEnable: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  toggleSwitch: PropTypes.func,
}

const styles = StyleSheet.create({
  chevron: {
    height: 15,
    marginRight: 20,
    width: 15,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    height: 20,
    width: 20,
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  settingWrap: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    width: '80%',
  },
  switchWrap: {
    paddingRight: 20,
  },
  txt: {
    ...Fonts.normal,
    color: Colors.blueNeon,
    paddingLeft: 10,
  },
  txtHead: {
    ...Fonts.normal,
    color: Colors.blueNeon,
    marginBottom: 20,
    marginLeft: 30,
    marginTop: 10,
  },
})

export default SettingItem
