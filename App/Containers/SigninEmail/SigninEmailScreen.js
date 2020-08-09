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
import auth from "@react-native-firebase/auth";

import BackChevron from "../../Components/shared/BackChevron";
import { Form, FormField, SubmitButton } from "../../Components/shared/Forms";
import { SliderBox } from "react-native-image-slider-box";
import Toast from "react-native-toast-message";

function SigninEmailScreen(props) {
  const [loading, setloading] = React.useState(false);
  const obj = {
    images: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
    ],
  };
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

  async function userLogin(email, password) {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      console.log(response);
      setloading(false);
      navigation.navigate("Home");
      Toast.show({
        type: "success",
        text1: "Successfull",
        text2: "Welcome back to Vation 🏃🏼‍♂️🏃🏻",
      });
    } catch (error) {
      console.log(error);
      setloading(false);
      Toast.show({
        type: "error",
        text1: "Login failed",
        text2: "Something went wrong!",
      });
    }
  }
  async function userAuth(email, password) {
    try {
      setloading(true);
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("User account created & signed in!", response);
      setloading(false);
      Toast.show({
        type: "success",
        text1: "Successfull",
        text2: "Welcome to DidFit 🏃🏼‍♂️🏃🏻",
      });
      navigation.navigate("Home");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.error(error, "came here");
        Toast.show({
          type: "error",
          text1: "Login failed",
          text2: "Something went wrong!",
        });
        console.log("That email address is already in use!");
        // since we I only had a login page I will perform the login
        // if the user is exists
        userLogin(email, password);
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
        setloading(false);
        Toast.show({
          type: "error",
          text1: "Signup failed",
          text2: "email address is invalid",
        });
      }
      setloading(false);
      console.error(error, "came here");
      Toast.show({
        type: "error",
        text1: "Login failed",
        text2: "Something went wrong!",
      });
    }
  }

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "rgba(0, 0, 0, 0.137709)" }} />
      <View style={styles.container}>
        <View style={styles.sliderWrap}>
          <SliderBox
            dotColor={Colors.white}
            inactiveDotColor={"gray"}
            images={obj.images}
          />
        </View>
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
                onSubmit={(values) => userAuth(values.email, values.password)}
              >
                <FormField name="email" placeholder="Email" />
                <FormField isSecure name="password" placeholder="Password" />
                <SubmitButton
                  loading={loading}
                  title="Login"
                  color={Colors.lightBlue}
                />
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
    </>
  );
}

export default SigninEmailScreen;
