import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import { Colors } from "App/Theme";
import ButtonCurve from "../ButtonCurve";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { isAndroid } from "../../../Theme/Metrics";

const SubmitButton = ({ title, disabled, loading, width }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <>
      <View style={styles.button__wrap}>
        <ButtonCurve
          disabled={disabled}
          color={disabled ? Colors.gray : Colors.white}
          title={title}
          borderColor={disabled ? Colors.gray : Colors.white}
          loading={loading}
          width={"90%" || width}
          onPress={handleSubmit}
        />
      </View>
      <KeyboardSpacer />
    </>
  );
};
const styles = StyleSheet.create({
  button__wrap: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: isAndroid ? 100 : null,
    width: "100%",
  },
});

export default SubmitButton;
