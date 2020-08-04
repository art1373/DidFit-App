import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native'
import { PropTypes } from 'prop-types'
import { useDimensions } from '@react-native-community/hooks'

import { Colors, Fonts, Images } from 'App/Theme'
import { smDevice } from '../../Theme/Metrics'

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  time,
  index,
}) {
  const { width } = useDimensions().window
  return (
    // <TouchableHighlight underlayColor={Colors.primary} onPress={onPress}>
    <View style={styles.container}>
      {IconComponent}
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
      <TouchableOpacity
        style={styles.moreIconWrap}
        onPress={() => Alert.alert('more options')}
        activeOpacity={0.6}
      >
        <Image style={styles.moreIcon} resizeMode="contain" source={Images.moreIcon} />
      </TouchableOpacity>
    </View>
  )
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
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
    backgroundColor: Colors.primaryDark,
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

  moreIcon: {
    alignSelf: 'flex-end',
    height: 20,
    width: 20,
  },
  moreIconWrap: { alignItems: 'center', height: 10, width: 70 },
  subTitle: {
    ...Fonts.normal,
    color: Colors.lightNeon,
  },
  title: {
    ...Fonts.input,
    color: Colors.mildPurple,
    marginBottom: 10,
  },
})

export default ListItem
