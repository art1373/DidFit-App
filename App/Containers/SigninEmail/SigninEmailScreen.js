import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import styles from "./SigninEmailStyles";
import { Colors } from "App/Theme";
import * as yup from "yup";

import BackChevron from "../../Components/shared/BackChevron";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Form, FormField, SubmitButton } from "../../Components/shared/Forms";

function SigninEmailScreen(props) {
  const { navigation } = props;
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a Valid Email")
      .required()
      .label("Email"),
    password: yup
      .string()
      .min(5, "Password should be at least 5 characters")
      .required()
      .label("Password"),
  });

  return (
    <>
      <SafeAreaView style={{ backgroundColor: Colors.black }} />
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.backWrap}>
            <BackChevron goBack={() => navigation.goBack()} />
          </View>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screenInner}>
              <View style={styles.heading}>
                <Text style={styles.headingText}>Welcome back</Text>
                <Text style={styles.description}>Login to your account</Text>
              </View>
              <View style={styles.formWrapper}>
                <Form
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => console.log(values)}
                >
                  <FormField name="email" placeholder="Email" />
                  <FormField isSecure name="password" placeholder="Password" />
                  <SubmitButton title="Login" color={Colors.lightBlue} />
                </Form>
              </View>
              <TouchableOpacity activeOpacity={0.4}>
                <Text style={styles.forgotPassword}>Forgot your password?</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4}>
                <View style={styles.footerTextWrap}>
                  <Text style={styles.footerFirstLine}>
                    Don't have an account?
                  </Text>
                  <Text style={styles.footerSecondLine}>Sign up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}

export default SigninEmailScreen;
