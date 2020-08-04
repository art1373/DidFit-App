import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { PropTypes } from 'prop-types'
import { useDimensions } from '@react-native-community/hooks'
import * as Animatable from 'react-native-animatable'

import { Colors, Fonts, Images } from 'App/Theme'
import { smDevice } from '../../Theme/Metrics'

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  renderLeftActions,
  time,
  liked,
  index,
}) {
  const { width } = useDimensions().window
  return (
    <Animatable.View animation={'bounceIn'} easing={'linear'} duration={index * 300}>
      {/* <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions}> */}
      <TouchableHighlight underlayColor={Colors.primary} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && (
            <>
              {liked && (
                <Image
                  style={width > smDevice ? styles.liked : styles.likedSM}
                  resizeMode="contain"
                  source={Images.heartIcon}
                />
              )}
              <Image style={styles.image} source={image} />
            </>
          )}
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
          </View>
          <Text style={styles.subTitle}>{time}</Text>
        </View>
      </TouchableHighlight>
      {/* </Swipeable> */}
    </Animatable.View>
  )
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
  IconComponent: PropTypes.elementType,
  onPress: PropTypes.func,
  renderRightActions: PropTypes.func,
  renderLeftActions: PropTypes.func,
  time: PropTypes.string,
  liked: PropTypes.bool.isRequired,
  index: PropTypes.number,
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    padding: 15,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  image: {
    borderColor: Colors.listItemBorder,
    borderRadius: 35,
    borderWidth: 1,
    height: 70,
    width: 70,
  },
  liked: {
    height: 20,
    left: '12%',
    position: 'absolute',
    top: '20%',
    zIndex: 2,
  },
  likedSM: {
    height: 20,
    left: '18%',
    position: 'absolute',
    top: '22%',
    width: 20,
    zIndex: 2,
  },
  subTitle: {
    color: Colors.mildPurple,
  },
  title: {
    ...Fonts.normal,
    color: Colors.mildPurple,
    marginBottom: 10,
  },
})

export default ListItem
