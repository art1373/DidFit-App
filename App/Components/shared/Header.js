import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Images, Fonts, Colors } from 'App/Theme'
import { useDimensions } from '@react-native-community/hooks'
import { smDevice } from '../../Theme/Metrics'
import { PropTypes } from 'prop-types'

function Header({ goBack, title, noBackIcon, titleWhite, sectionWidth }) {
  const { width } = useDimensions().window
  return (
    <View style={!noBackIcon ? styles.container : styles.containerNoBack}>
      <View
        style={
          !noBackIcon ? [styles.section, { width: sectionWidth || '65%' }] : styles.sectionNoBack
        }
      >
        {!noBackIcon && (
          <TouchableOpacity onPress={goBack} style={styles.backWrap}>
            <Image
              style={width > smDevice ? styles.img : styles.imgSM}
              resizeMode="contain"
              source={Images.backIcon}
            />
          </TouchableOpacity>
        )}
        <Text
          style={
            width > smDevice
              ? [styles.text, { color: titleWhite ? Colors.white : Colors.blueNeon }]
              : [styles.text, { color: titleWhite ? Colors.white : Colors.blueNeon }]
          }
        >
          {title}
        </Text>
      </View>
    </View>
  )
}
Header.propTypes = {
  goBack: PropTypes.func.isRequired,
  title: PropTypes.string,
  sectionWidth: PropTypes.string,
  noBackIcon: PropTypes.bool,
  titleWhite: PropTypes.bool,
}

const styles = StyleSheet.create({
  backWrap: {
    width: '30%',
  },
  container: {
    alignItems: 'flex-start',
    backgroundColor: Colors.primary,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  containerNoBack: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    width: '100%',
  },
  img: {
    height: 25,
    width: 25,
  },
  imgSM: {
    height: 20,
    width: 20,
  },
  section: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '65%',
  },
  sectionNoBack: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
  },
  text: {
    ...Fonts.h4,
    color: Colors.blueNeon,
  },
})

export default Header
