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
import { Colors, Images } from "App/Theme";
import styles from "./SigninStyles";

import * as Animatable from "react-native-animatable";
import ButtonCurve from "../../Components/shared/ButtonCurve";

const SigninScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: Colors.black }} />
      <Animatable.View animation="wobble" duration={2000}>
        <Image style={styles.logo} resizeMode="contain" source={Images.logo} />
      </Animatable.View>
    </View>
  );
};
SigninScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SigninScreen;
