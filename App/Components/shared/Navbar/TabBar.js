/* eslint-disable react/prop-types */
import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
  Dimensions,
} from 'react-native'
import { Images } from 'App/Theme'
import { smDevice, smallHeightDevice } from '../../../Theme/Metrics'
import { useDimensions } from '@react-native-community/hooks'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

function TabBar(props) {
  // React.useEffect(()=>{

  // },[])
  const { width } = useDimensions().window
  let { onTabPress, onTabLongPress, getAccessibilityLabel, navigation } = props

  let { routes, index: activeRouteIndex } = navigation.state

  return (
    <>
      <TouchableOpacity style={styles.newPostWrap} onPress={() => Alert.alert('lets add new post')}>
        <Image
          style={width > smDevice ? styles.newPostBtn : styles.newPostBtnSM}
          resizeMode="contain"
          source={Images.newPostIcon}
        />
      </TouchableOpacity>

      <ImageBackground style={styles.tabBar} source={Images.rect}>
        {routes.map((route, routeIndex) => {
          let isRouteActive = routeIndex === activeRouteIndex

          return (
            <TouchableOpacity
              key={routeIndex}
              style={styles.tab}
              onPress={() => {
                onTabPress({ route })
              }}
              onLongPress={() => {
                onTabLongPress({ route })
              }}
              accessibilityLabel={getAccessibilityLabel({ route })}
            >
              {route.routeName === 'Home' && (
                <Image
                  style={width > smDevice ? styles.Icon : styles.IconSM}
                  resizeMode="contain"
                  source={route.routeName === 'Home' && isRouteActive ? Images.homeA : Images.homeD}
                />
              )}
              {route.routeName === 'Profile' && (
                <Image
                  style={width > smDevice ? styles.Icon : styles.IconSM}
                  resizeMode="contain"
                  source={
                    route.routeName === 'Profile' && isRouteActive
                      ? Images.profileA
                      : Images.profileD
                  }
                />
              )}
              {route.routeName === 'Messages' && (
                <Image
                  style={width > smDevice ? styles.Icon : styles.IconSM}
                  resizeMode="contain"
                  source={
                    route.routeName === 'Messages' && isRouteActive
                      ? Images.messagesA
                      : Images.messagesD
                  }
                />
              )}
              {route.routeName === 'Activity' && (
                <Image
                  style={width > smDevice ? styles.Icon : styles.IconSM}
                  resizeMode="contain"
                  source={
                    route.routeName === 'Activity' && isRouteActive
                      ? Images.activityA
                      : Images.activityD
                  }
                />
              )}
            </TouchableOpacity>
          )
        })}
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  Icon: {
    height: 25,
    width: 25,
  },
  IconSM: {
    height: 20,
    width: 20,
  },
  newPostBtn: {
    alignSelf: 'center',
    height: 75,
    width: 75,
  },
  newPostBtnSM: {
    alignSelf: 'center',
    height: Dimensions.get('window').height < smallHeightDevice ? 60 : 70,
    width: Dimensions.get('window').height < smallHeightDevice ? 60 : 70,
  },
  newPostWrap: {
    alignSelf: 'center',
    bottom: hp(5),
    position: 'absolute',
    width: wp(25),
    zIndex: 401,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    width: wp(15),
  },
  tabBar: {
    alignSelf: 'center',
    bottom: hp(-1),
    flexDirection: 'row',
    height: hp(9.5),
    justifyContent: 'space-around',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
})
export default TabBar
