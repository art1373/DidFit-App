import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from "App/Theme";

function BackChevron({ goBack }) {
  return (
    <TouchableOpacity
      style={styles.BackBtn}
      activeOpacity={0.8}
      onPress={goBack}
    >
      <Icon
        color={Colors.white}
        name={"arrowleft"}
        size={25}
        resizeMode={"contain"}
      />
    </TouchableOpacity>
  );
}
BackChevron.propTypes = {
  goBack: PropTypes.func.isRequired,
};
const styles = StyleSheet.create({
  BackBtn: {
    width: 144,
    height: 144,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.darkGray,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9.11,
    elevation: 14,
  },
});

export default BackChevron;
