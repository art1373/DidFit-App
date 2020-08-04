import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native'
import { PropTypes } from 'prop-types'

import { Colors, Fonts } from 'App/Theme'

function ActivityItem({ title, subTitle, image, IconComponent, onPress, index, postImage }) {
  return (
    <TouchableHighlight underlayColor={Colors.primary} onPress={onPress}>
      <View style={styles.container}>
        {image && <Image style={styles.image} source={image} />}
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
        {postImage ? <Image style={styles.postImg} source={postImage} /> : IconComponent}
      </View>
    </TouchableHighlight>
  )
}

ActivityItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
  postImage: PropTypes.number,
  IconComponent: PropTypes.elementType,
  onPress: PropTypes.func,
  renderRightActions: PropTypes.func,
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
  postImg: {
    borderColor: Colors.listItemBorder,
    borderRadius: 5,
    borderWidth: 1,
    height: 60,
    width: 60,
  },

  subTitle: {
    ...Fonts.normal,
    color: Colors.lightNeon,
    opacity: 0.7,
  },
  title: {
    ...Fonts.input,
    color: Colors.mildPurple,
    marginBottom: 10,
  },
})

export default ActivityItem
