/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import { Colors, Helpers } from "App/Theme";
import styles from "./SigninStyles";

import * as Animatable from "react-native-animatable";
import ButtonOAuth from "../../Components/Signin/ButtonOauths";
import SigninHeaders from "../../Components/Signin/SigninHeaders";
import BodyDescription from "../../Components/Signin/BodyDescription";

const SigninScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: Colors.black }} />
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
        />
        <ButtonOAuth color={Colors.grass} title="Sign Up with Email" />
        <ButtonOAuth color={Colors.lightBlue} title="Log In" />
      </Animatable.View>
      <Animatable.View animation="fadeIn" duration={6500}>
        <Text style={styles.footerDescription}>Explore the classess</Text>
      </Animatable.View>
    </View>
  );
};
SigninScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SigninScreen;
