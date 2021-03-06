import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Fonts } from "App/Theme";
import PropTypes from "prop-types";

const SigninHeaders = ({ desc1, desc2, desc3, desc4 }) => {
  return (
    <View style={styles.textWraps}>
      <Text style={styles.heading}>{desc1}</Text>
      <Text style={styles.heading}>{desc2}</Text>
      <Text style={styles.heading}>{desc3}</Text>
      <Text style={styles.heading}>{desc4}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    ...Fonts.h1,
    color: Colors.white,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  textWraps: {
    padding: 40,
  },
});

SigninHeaders.propTypes = {
  desc1: PropTypes.string.isRequired,
  desc2: PropTypes.string.isRequired,
  desc3: PropTypes.string.isRequired,
  desc4: PropTypes.string.isRequired,
  otherText: PropTypes.string,
};

export default SigninHeaders;
