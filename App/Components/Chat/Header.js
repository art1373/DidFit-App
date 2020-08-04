import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Images, Fonts, Colors } from 'App/Theme'
import { useDimensions } from '@react-native-community/hooks'
import { smDevice } from '../../Theme/Metrics'
import { PropTypes } from 'prop-types'
import Avatar from './Avatar'

function ChatHeader({ goBack, title, avatar }) {
  const { width } = useDimensions().window
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity onPress={goBack}>
          <View style={styles.backSection}>
            <Image
              style={width > smDevice ? styles.img : styles.imgSM}
              resizeMode="contain"
              source={Images.backIcon}
            />
            <Text style={styles.backText}>Chats</Text>
          </View>
        </TouchableOpacity>
        <Text style={width > smDevice ? styles.text : styles.textSM}>{title}</Text>
        <Avatar avatarUrl={avatar} />
      </View>
    </View>
  )
}

ChatHeader.propTypes = {
  goBack: PropTypes.func.isRequired,
  title: PropTypes.string,
  avatar: PropTypes.number,
}

const styles = StyleSheet.create({
  backSection: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  backText: {
    ...Fonts.input,
    color: Colors.lightNeon,
    paddingLeft: 5,
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
    width: '100%',
  },
  text: {
    ...Fonts.h4,
    color: Colors.lightNeon,
  },
  textSM: {
    ...Fonts.input,
    color: Colors.lightNeon,
  },
})

export default ChatHeader
