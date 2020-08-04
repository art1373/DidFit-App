/* eslint-disable react/prop-types */
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  BackHandler,
  Image,
} from "react-native";
import { Colors, Images } from "App/Theme";
import styles from "./SigninEmailStyles";
import { connect } from "react-redux";
import SigninActions from "../../Stores/Signin/Actions";

import ButtonCurve from "../../Components/shared/ButtonCurve";
import SigninHeader from "../../Components/Signin/SigninHeaders";

const EmailSigninScreen = ({ navigation, ...props }) => {
  const [email, setEmail] = React.useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}></View>
    </TouchableWithoutFeedback>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (userEmail) => dispatch(SigninActions.submitUserEmail(userEmail)),
});

export default connect(null, mapDispatchToProps)(EmailSigninScreen);
