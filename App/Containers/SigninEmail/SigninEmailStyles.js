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
    borderWidth: 2,
    backgroundColor: "gray",
  },
  backWrap: {
    position: "absolute",
    top: -10,
    left: -40,
    zIndex: 2,
  },

  screenInner: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.white,
    height: "100%",
    marginBottom: "-150%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  Screen__Wrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "baseline",
  },

  Slider__Wrapper: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});
