import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Fonts } from "App/Theme";
import PropTypes from "prop-types";

const BodyDescription = ({ line1, line2, line3 }) => {
  return (
    <View style={styles.textWraps}>
      <Text style={styles.heading}>{line1}</Text>
      <Text style={styles.heading}>{line2}</Text>
      <Text style={styles.heading}>{line3}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    ...Fonts.input,
    fontWeight: "500",
    color: Colors.white,
  },
  textWraps: {
    paddingHorizontal: 40,
  },
});

BodyDescription.propTypes = {
  desc1: PropTypes.string.isRequired,
  desc2: PropTypes.string.isRequired,
  desc3: PropTypes.string.isRequired,
  desc4: PropTypes.string.isRequired,
  otherText: PropTypes.string,
};

export default BodyDescription;
