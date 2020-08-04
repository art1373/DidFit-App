import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { Helpers, Fonts, Images, Colors } from "App/Theme";
import PropTypes from "prop-types";

const ButtonHome = ({ title, onPress, width, color, img, txtColor }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.button, { width: width || "95%", backgroundColor: color }]}
      onPress={onPress}
    >
      <View style={[styles.container, { backgroundColor: color }]}>
        <Image resizeMode="cover" style={styles.icon} source={img} />
        <Text style={[styles.text, { paddingHorizontal: img ? 10 : null }]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Helpers.rowCenter,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 20,
  },
  button: {
    borderRadius: 20,
  },
  text: {
    ...Fonts.input,
    fontWeight: "bold",
    color: Colors.white,
  },
  icon: {
    width: 15,
    height: 15,
  },
});

ButtonHome.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired,
  width: PropTypes.string || PropTypes.number,
  color: PropTypes.string,
  img: PropTypes.string,
};

export default ButtonHome;
