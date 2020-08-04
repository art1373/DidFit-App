import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Images, Fonts, Colors } from 'App/Theme'
import { useDimensions } from '@react-native-community/hooks'
import { smDevice } from '../../Theme/Metrics'
import { PropTypes } from 'prop-types'

function Header({ goBack, title }) {
  const { width } = useDimensions().window

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity onPress={goBack} style={styles.backWrap}>
          <Image
            style={width > smDevice ? styles.img : styles.imgSM}
            resizeMode="contain"
            source={Images.backIcon}
          />
        </TouchableOpacity>

        <Text style={width > smDevice ? styles.text : styles.textSM}>{title}</Text>
      </View>
    </View>
  )
}
Header.propTypes = {
  goBack: PropTypes.func,
  title: PropTypes.string,
}

const styles = StyleSheet.create({
  backWrap: {
    width: '20%',
  },
  container: {
    alignItems: 'flex-start',
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
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
    width: '75%',
  },
  text: {
    ...Fonts.h4,
    color: Colors.blueNeon,
  },
  textSM: {
    ...Fonts.input,
    color: Colors.blueNeon,
  },
})

export default Header
