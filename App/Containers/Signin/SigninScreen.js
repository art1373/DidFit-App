/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "App/Theme";
import styles from "./SigninStyles";
import LinearGradient from "react-native-linear-gradient";

import * as Animatable from "react-native-animatable";
import Toast from "react-native-toast-message";
import ButtonOAuth from "../../Components/Signin/ButtonOauths";
import SigninHeaders from "../../Components/Signin/SigninHeaders";
import BodyDescription from "../../Components/Signin/BodyDescription";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-community/google-signin";

const SigninScreen = ({ navigation }) => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("done", userInfo);
      Toast.show({
        type: "success",
        position: "bottom",
        text1: "Successfull",
        text2: "Welcome back to DidFit 🏃🏼‍♂️🏃🏻",
      });
      navigation.navigate("Home");
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("SIGN_IN_CANCELLED", error);
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "Authentication Failed",
          text2: "Signin Cancelled",
        });
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("IN_PROGRESS", error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("PLAY_SERVICES_NOT_AVAILABLE", error);
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Authentication Failed",
          text2: "Play services is not available!",
        });
      } else {
        console.log("Exception", error);
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Authentication Failed",
          text2: "Something went wrong!",
        });
      }
    }
  };
  return (
    <LinearGradient
      colors={["rgba(1,1,0,0.90)", "rgba(0,0,0,0.94)", "rgba(0,0,0,0.94)"]}
      style={styles.container}
    >
      <SafeAreaView style={{ backgroundColor: Colors.gray }} />
      <View style={styles.container}>
        <Animatable.View animation="fadeIn" duration={3000}>
          <SigninHeaders
            desc1="your"
            desc2="personal"
            desc3="trainer"
            desc4="rethought"
          />
        </Animatable.View>
        <Animatable.View animation="fadeIn" duration={5000}>
          <BodyDescription
            line1="Your everyday life is stressful"
            line2="enough. Stay flexible with"
            line3="online support for everyday life."
          />
        </Animatable.View>
        <Animatable.View
          style={styles.btnWrap}
          animation="fadeIn"
          duration={6000}
        >
          <ButtonOAuth
            color={Colors.black}
            mode="apple"
            title="Sign In with Apple"
          />
          <ButtonOAuth
            color={Colors.blueOcean}
            mode="google"
            title="Sign In with google"
            onPress={signIn}
          />
          <ButtonOAuth color={Colors.grass} title="Sign Up with Email" />
          <ButtonOAuth
            color={Colors.lightBlue}
            title="Log In"
            onPress={() => navigation.navigate("EmailSignin")}
          />
        </Animatable.View>
        <Animatable.View animation="fadeIn" duration={6500}>
          <Text style={styles.footerDescription}>Explore the classess</Text>
        </Animatable.View>
      </View>
    </LinearGradient>
  );
};
SigninScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SigninScreen;
