import React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors, Fonts } from "App/Theme";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <Text style={styles.errors}>{error}</Text>;
};
const styles = StyleSheet.create({
  errors: {
    ...Fonts.normal,
    color: Colors.red,
    bottom: 15,
    paddingHorizontal: 20,
  },
});

export default ErrorMessage;
