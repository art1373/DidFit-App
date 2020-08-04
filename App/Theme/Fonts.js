import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const size = {
  h1: wp(10),
  h2: wp(9),
  h3: wp(8),
  h4: wp(5),
  input: wp(4),
  regular: wp(3),
  medium: wp(2),
  small: wp(1),
};

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
  h2: {
    fontSize: size.h2,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
  h3: {
    fontSize: size.h3,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
  h4: {
    fontSize: size.h4,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
  input: {
    fontSize: size.input,
  },
  medium: {
    fontSize: size.medium,
  },
  normal: {
    fontSize: size.regular,
  },
  small: {
    fontSize: size.small,
  },
});
