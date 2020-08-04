import { StyleSheet, Dimensions } from "react-native";
import { ApplicationStyles } from "App/Theme";
import { Colors, Helpers, Fonts } from "App/Theme";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const wp = (percentage) => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};

const slideHeight = viewportHeight * 0.5;
const slideWidth = wp(100);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default StyleSheet.create({
  Screen__TopSafeArea: {
    flex: 0,
  },
  container: {
    ...Helpers.fill,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.137709)",
  },
  backWrap: {
    position: "absolute",
    top: -40,
    left: -40,
    zIndex: 2,
  },
  sliderWrap: {
    position: "absolute",
    top: 60,
  },
  screenInner: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: "absolute",
    zIndex: 2,
    width: "100%",
    backgroundColor: Colors.white,
    height: "100%",
    bottom: -290,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  heading: {
    ...Helpers.colCenter,
    alignSelf: "center",
    marginTop: 20,
  },
  headingText: {
    ...Fonts.h2,
    color: Colors.elegantBlack,
  },
  description: {
    ...Fonts.input,
    color: Colors.lightGray,
    marginTop: 10,
  },
  formWrapper: {
    alignItems: "center",
    marginTop: 20,
  },
  forgotPassword: {
    ...Fonts.input,
    alignSelf: "center",
    marginTop: 60,
  },
  footerTextWrap: {
    ...Helpers.rowCenter,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 70,
  },
  footerFirstLine: {
    ...Fonts.input,
    color: Colors.mediumGray,
  },
  footerSecondLine: {
    ...Fonts.input,
    color: Colors.grass,
    paddingHorizontal: 5,
  },
});
