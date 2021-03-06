import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { PropTypes } from "prop-types";
import { Helpers, Fonts, Colors } from "App/Theme";
import Icon from "react-native-vector-icons/AntDesign";

const renderIcon = (mode) => {
  switch (mode) {
    case "google":
      return <Icon name="google" color={Colors.white} size={30} />;
    case "apple":
      return <Icon name="apple1" color={Colors.white} size={30} />;
    default:
      break;
  }
};

function ButtonOauth({ title, onPress, disabled, mode, color, loading }) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.6}>
      <View style={[styles.container, { backgroundColor: color }]}>
        {loading ? (
          <ActivityIndicator size={20} color={Colors.error} />
        ) : (
          <>
            {mode && renderIcon(mode)}
            <Text
              style={[styles.text, { paddingHorizontal: mode ? 10 : null }]}
            >
              {title}
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    ...Helpers.rowCenter,
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 50,
    borderRadius: 50,
  },
  text: {
    ...Fonts.input,
    fontWeight: "bold",
    color: Colors.white,
  },
});

ButtonOauth.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  isApple: PropTypes.bool,
  title: PropTypes.string.isRequired,
  mode: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default ButtonOauth;
