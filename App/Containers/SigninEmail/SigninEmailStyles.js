import { StyleSheet } from 'react-native'
import { Fonts, Helpers, Colors } from 'App/Theme'
import { isIos } from 'App/Theme/Metrics'

const styles = StyleSheet.create({
  backIcon: {
    height: 20,
    width: 20,
  },
  backWrap: {
    marginVertical: 10,
    padding: 20,
  },
  button__wrap: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    width: '100%',
  },
  container: {
    ...Helpers.fill,
    backgroundColor: Colors.primary,
  },
  description: {
    ...Fonts.input,
    color: Colors.white,
    opacity: 0.5,
  },
  heading: {
    ...Fonts.h3,
    color: Colors.blueNeon,
  },
  input: {
    borderBottomColor: isIos ? Colors.lightNeon : Colors.primary,
    color: Colors.lightNeon,
    paddingLeft: 5,
  },
  textWraps: {
    marginTop: 20,
    padding: 20,
  },
})
export default styles
