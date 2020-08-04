import { StyleSheet, Dimensions } from 'react-native'
import { Fonts, Helpers, Colors } from 'App/Theme'
import { isIos, smallHeightDevice } from 'App/Theme/Metrics'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  container: {
    ...Helpers.fill,
    backgroundColor: Colors.primary,
  },
  customMargin: {
    marginLeft: 15,
  },
  customPadding: {
    paddingHorizontal: 3,
  },
  footerText__first__section: {
    marginTop: 30,
  },
  footer__text: {
    ...Fonts.normal,
    alignSelf: 'center',
    color: Colors.white,
  },
  footer__text__underline: {
    ...Fonts.normal,
    color: Colors.white,
    paddingHorizontal: 1,
    textDecorationLine: 'underline',
  },
  headingWrap: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingBottom: 5,
  },
  heading__firstPart: {
    ...Fonts.h3,
    color: Colors.white,
    fontWeight: 'bold',
  },
  heading__secondPart: {
    ...Fonts.h3,
    backgroundColor: Colors.lightNeon,
    color: Colors.white,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  heading__textWrap: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  login__buttonsWrap: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    alignSelf: 'center',
    height: isIos ? 200 : hp(20),
    marginTop: isIos ? 55 : 45,
    width: isIos ? 200 : wp(55),
  },
  troubleSignIn: {
    alignSelf: 'center',
    color: Colors.lightNeon,
    marginTop: Dimensions.get('window').height <= smallHeightDevice ? '5%' : '10%',
  },
  underline__footer__Wraper: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
})
export default styles
