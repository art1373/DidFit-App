import { StyleSheet } from 'react-native'
import { Fonts, Helpers, Colors } from 'App/Theme'

const styles = StyleSheet.create({
  container: {
    ...Helpers.colCenter,
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: '20%',
  },
  img: {
    height: 100,
    paddingBottom: 60,
    width: 100,
  },
  signupWrap: {
    ...Helpers.colCenter,
  },
  txt: {
    ...Fonts.normal,
    color: Colors.white,
    paddingBottom: 20,
    paddingTop: 20,
  },
})

export default styles
