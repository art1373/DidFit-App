import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import { Colors } from "App/Theme";
import Button from "../../Signin/ButtonOauths";

const SubmitButton = ({ title, disabled, loading, width, color }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <View style={styles.button__wrap}>
      <Button
        disabled={disabled}
        color={disabled ? Colors.gray : color}
        title={title}
        borderColor={disabled ? Colors.gray : Colors.white}
        loading={loading}
        width={"90%" || width}
        onPress={handleSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  button__wrap: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 40,
  },
});

export default SubmitButton;
