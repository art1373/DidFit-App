import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'App/Theme'

const styles = StyleSheet.create({
  BtnWrap: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '5%',
    width: '88%',
  },
  atEnd: {
    alignItems: 'flex-end',
  },
  atStart: {
    alignItems: 'flex-start',
  },
  likeIcon: {
    height: 25,
    width: 25,
  },
  linkIcon: {
    height: 15,
    marginRight: 10,
    width: 15,
  },
  linkWrap: {
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderColor: Colors.primaryDark,
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    width: '100%',
  },
  linkWrap2: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  staticText: {
    ...Fonts.input,
    color: Colors.white,
    paddingRight: '2%',
  },
  staticTextSM: {
    ...Fonts.normal,
    color: Colors.white,
    paddingRight: '2%',
  },
  staticWrapFirstSection: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '10%',
    justifyContent: 'center',
    marginTop: '3%',
  },
  tabPressWrap: {
    padding: 5,
    width: '50%',
  },
  tabWrap: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    width: '60%',
  },
})

export default styles
