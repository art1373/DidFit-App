import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Feather";
import { Colors, Fonts, Helpers } from "App/Theme";

function BackChevron({ goBack, thick, customText }) {
  return (
    <TouchableOpacity
      style={customText ? styles.BackBtnCustomText : styles.BackBtn}
      activeOpacity={0.8}
      onPress={goBack}
    >
      {thick ? (
        <View style={{ ...Helpers.rowCenter }}>
          <Icon2
            color={Colors.white}
            name={"chevron-left"}
            size={30}
            resizeMode={"contain"}
          />
          <Text style={styles.customText}>{customText}</Text>
        </View>
      ) : (
        <Icon
          color={Colors.white}
          name={"arrowleft"}
          size={25}
          resizeMode={"contain"}
        />
      )}
    </TouchableOpacity>
  );
}
BackChevron.propTypes = {
  goBack: PropTypes.func.isRequired,
  thick: PropTypes.bool,
  customText: PropTypes.string,
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
  BackBtnCustomText: {
    marginTop: 50,
    justifyContent: "space-between",
  },
  customText: {
    ...Fonts.h4,
    color: Colors.white,
  },
});

export default BackChevron;
