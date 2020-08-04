/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Images, Fonts, Colors } from 'App/Theme'
import { useDimensions } from '@react-native-community/hooks'
import { smDevice } from '../../Theme/Metrics'
import * as Animatable from 'react-native-animatable'

function Header(props) {
  const { width } = useDimensions().window
  let { onTabPress, onTabLongPress, getAccessibilityLabel, navigation } = props

  let { routes, index: activeRouteIndex } = navigation.state

  return (
    <Animatable.View animation={'slideInDown'}>
      <View style={styles.container}>
        <View style={width > smDevice ? styles.tabSection1 : styles.tabSectionSM}>
          {routes.map((route, routeIndex) => {
            let isRouteActive = routeIndex === activeRouteIndex
            return (
              <TouchableOpacity
                key={routeIndex}
                activeOpacity={0.6}
                style={styles.tabWrap}
                onPress={() => {
                  onTabPress({ route })
                }}
                onLongPress={() => {
                  onTabLongPress({ route })
                }}
                accessibilityLabel={getAccessibilityLabel({ route })}
              >
                <Text style={width > smDevice ? styles.text : styles.textSM}>
                  {route.routeName}
                </Text>
                <Image
                  style={width > smDevice ? styles.Ellipse : styles.EllipseSM}
                  resizeMode="contain"
                  source={isRouteActive && Images.Ellipse}
                />
              </TouchableOpacity>
            )
          })}
        </View>
        <View>
          <Image
            style={width > smDevice ? styles.img : styles.imgSM}
            resizeMode="contain"
            source={Images.manProfile}
          />
        </View>
      </View>
    </Animatable.View>
  )
}
const styles = StyleSheet.create({
  Ellipse: {
    height: 30,
    left: 15,
    position: 'absolute',
    top: 40,
    width: 30,
    zIndex: 2,
  },
  EllipseSM: {
    height: 20,
    position: 'absolute',
    right: 24,
    top: 40,
    width: 20,
    zIndex: 2,
  },
  container: {
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  img: {
    height: 70,
    width: 70,
  },
  imgSM: {
    height: 50,
    width: 50,
  },
  tabSection1: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '35%',
  },
  tabSectionSM: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '45%',
  },
  text: {
    ...Fonts.h4,
    color: Colors.white,
  },
  textSM: {
    ...Fonts.input,
    color: Colors.white,
  },
  tabWrap: {
    paddingVertical: 20,
    width: '50%',
    alignItems: 'center',
    height: '100%',
  },
})

export default Header
