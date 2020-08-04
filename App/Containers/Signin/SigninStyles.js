import { StyleSheet, Dimensions } from "react-native";
import { Helpers, Colors } from "App/Theme";

const styles = StyleSheet.create({
  container: {
    ...Helpers.fill,
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
