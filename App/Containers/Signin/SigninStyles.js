import { StyleSheet, Dimensions } from "react-native";
import { Fonts, Helpers, Colors } from "App/Theme";
import { isIos, smallHeightDevice } from "App/Theme/Metrics";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    ...Helpers.fill,
    backgroundColor: Colors.black,
  },
  btnWrap: {
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "white",
    width: "100%",
    height: "30%",
    marginTop: 100,
  },
  footerDescription: {
    alignSelf: "center",
    color: Colors.white,
    fontWeight: "400",
    marginTop: 10,
  },
});
export default styles;
