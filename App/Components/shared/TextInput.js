import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "App/Theme";

function AppTextInput({ icon, width = "100%", color, ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && <Icon name={icon} size={20} color={color} style={styles.icon} />}
      <TextInput
        placeholderTextColor={color}
        style={styles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightWhite,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppTextInput;
