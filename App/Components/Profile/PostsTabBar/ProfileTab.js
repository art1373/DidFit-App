/* eslint-disable react/prop-types */
import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Images, Colors } from 'App/Theme'

function ProfileTopTab(props) {
  let { onTabPress, onTabLongPress, getAccessibilityLabel, navigation } = props

  let { routes, index: activeRouteIndex } = navigation.state

  return (
    <View style={styles.container}>
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
            {route.routeName === 'Profile' && (
              <Image
                style={styles.img}
                resizeMode="contain"
                source={
                  route.routeName === 'Profile' && isRouteActive
                    ? Images.menuIcon
                    : Images.menuIconD
                }
              />
            )}
            {route.routeName === 'Liked' && (
              <Image
                style={styles.img}
                resizeMode="contain"
                source={
                  route.routeName === 'Liked' && isRouteActive ? Images.likeIconA : Images.likeIconD
                }
              />
            )}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 20,
    position: 'absolute',
    top: 250,
    width: '100%',
  },
  img: {
    height: 20,
    width: 20,
  },

  tabWrap: {
    alignItems: 'center',
    width: '50%',
  },
})

export default ProfileTopTab
