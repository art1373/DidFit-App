import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { isIos } from "App/Theme/Metrics";
import { Input } from "react-native-elements";
import { Colors, Fonts } from "App/Theme";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

const FormField = ({
  name,
  placeholder,
  contentType,
  customStyle,
  isSecure,
  placeHolderColor,
  description,
  descriptionColor,
}) => {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <View style={styles.formPusher}>
      <Input
        inputContainerStyle={styles.input || customStyle}
        inputStyle={{ color: Colors.lightNeon }}
        placeholder={placeholder}
        autoFocus
        placeholderTextColor={placeHolderColor || Colors.blueNeon}
        textContentType={contentType}
        secureTextEntry={isSecure}
        selectionColor={Colors.dirtyNeon}
        underlineColorAndroid={Colors.blueNeon}
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />

      {description && (
        <TouchableOpacity>
          <Text
            style={[
              styles.description,
              {
                color: descriptionColor ? descriptionColor : Colors.white,
                opacity: descriptionColor ? 1 : 0.7,
              },
            ]}
          >
            {description}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderBottomColor: isIos ? Colors.lightNeon : Colors.primary,
    color: Colors.lightNeon,
    paddingLeft: 5,
  },
  formPusher: {
    flex: isIos ? 1 / 1.1 : null,
  },
  description: {
    ...Fonts.normal,
    color: Colors.white,
    paddingHorizontal: isIos ? 10 : 20,
  },
});

export default FormField;
